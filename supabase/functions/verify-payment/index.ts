import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    console.log("[VERIFY-PAYMENT] Function started");

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { sessionId } = await req.json();
    console.log("[VERIFY-PAYMENT] Verifying session:", sessionId);

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status !== "paid") {
      console.log("[VERIFY-PAYMENT] Payment not completed");
      return new Response(
        JSON.stringify({ success: false, status: session.payment_status }), 
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 200,
        }
      );
    }

    console.log("[VERIFY-PAYMENT] Payment verified, processing");

    // Parse items from metadata
    const items = JSON.parse(session.metadata?.items || "[]");
    const amount = session.amount_total ? session.amount_total / 100 : 0;
    const couponCode = session.metadata?.coupon_code || null;

    console.log("[VERIFY-PAYMENT] Transaction details:", { amount, couponCode, itemCount: items.length });

    // Create transaction in database
    const { error: transactionError } = await supabaseClient.rpc('create_transaction', {
      user_id: user.id,
      transaction_id: session.id,
      amount: amount,
      status: 'completed',
      payment_method: 'credit_card',
      items: JSON.stringify(items),
      coupon_code: couponCode,
      discount_amount: 0 // Could calculate from original price if needed
    });

    if (transactionError) {
      console.error("[VERIFY-PAYMENT] Error creating transaction:", transactionError);
      throw new Error("Failed to create transaction");
    }

    // Increment coupon usage if one was used
    if (couponCode) {
      console.log("[VERIFY-PAYMENT] Incrementing coupon usage:", couponCode);
      await supabaseClient.rpc('use_coupon', { coupon_code: couponCode });
    }

    // Add games to user library
    const gameIds = items.map((item: any) => item.game_id);
    const { error: libraryError } = await supabaseClient.rpc('add_games_to_library', {
      user_id: user.id,
      game_ids: gameIds
    });

    if (libraryError) {
      console.error("[VERIFY-PAYMENT] Error adding to library:", libraryError);
    }

    console.log("[VERIFY-PAYMENT] Payment processed successfully");

    // Enviar email de confirmação
    try {
      const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
      const gamesList = items.map((item: any) => `
        <li style="margin-bottom: 10px;">
          <strong>${item.title}</strong> - R$ ${item.price.toFixed(2)}
        </li>
      `).join('');

      const paymentMethod = session.payment_method_types?.[0] === 'pix' ? 'PIX' : 
                           session.payment_method_types?.[0] === 'boleto' ? 'Boleto' : 
                           'Cartão de Crédito';

      await resend.emails.send({
        from: "Paçoca Games <onboarding@resend.dev>",
        to: [user.email!],
        subject: "Compra confirmada - Paçoca Games",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
              Compra Confirmada! 🎮
            </h1>
            <p style="font-size: 16px; color: #555;">
              Olá! Sua compra foi confirmada com sucesso.
            </p>
            <h2 style="color: #333; margin-top: 30px;">Detalhes da compra:</h2>
            <ul style="list-style: none; padding: 0;">
              ${gamesList}
            </ul>
            <div style="margin-top: 30px; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: #333;">
                Total pago: R$ ${amount.toFixed(2)}
              </p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: #666;">
                Método de pagamento: ${paymentMethod}
              </p>
            </div>
            <p style="margin-top: 30px; font-size: 14px; color: #555;">
              Os jogos já estão disponíveis na sua biblioteca!
            </p>
            <p style="font-size: 14px; color: #999; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
              Obrigado por comprar na Paçoca Games!
            </p>
          </div>
        `,
      });
      console.log("[VERIFY-PAYMENT] Confirmation email sent successfully");
    } catch (emailError) {
      console.error("[VERIFY-PAYMENT] Error sending confirmation email:", emailError);
      // Não falhamos a requisição se o email falhar
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        transactionId: session.id
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("[VERIFY-PAYMENT] Error:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});

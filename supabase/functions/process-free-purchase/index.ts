import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
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
    console.log("[PROCESS-FREE-PURCHASE] Function started");

    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user) {
      throw new Error("User not authenticated");
    }

    const { items, couponCode } = await req.json();
    console.log("[PROCESS-FREE-PURCHASE] Processing free purchase for user:", user.id);
    console.log("[PROCESS-FREE-PURCHASE] Items:", items.length);

    // Create transaction in database
    const transactionId = `free_${Date.now()}_${user.id}`;
    const { error: transactionError } = await supabaseClient.rpc('create_transaction', {
      user_id: user.id,
      transaction_id: transactionId,
      amount: 0,
      status: 'completed',
      payment_method: 'free',
      items: JSON.stringify(items)
    });

    if (transactionError) {
      console.error("[PROCESS-FREE-PURCHASE] Error creating transaction:", transactionError);
      throw new Error("Failed to create transaction");
    }

    // Increment coupon usage if one was used
    if (couponCode) {
      console.log("[PROCESS-FREE-PURCHASE] Incrementing coupon usage:", couponCode);
      await supabaseClient.rpc('use_coupon', { coupon_code: couponCode });
    }

    // Add games to user library
    const gameIds = items.map((item: any) => item.game_id);
    const { error: libraryError } = await supabaseClient.rpc('add_games_to_library', {
      p_user_id: user.id,
      p_game_ids: gameIds
    });

    if (libraryError) {
      console.error("[PROCESS-FREE-PURCHASE] Error adding to library:", libraryError);
      throw new Error("Failed to add games to library");
    }

    console.log("[PROCESS-FREE-PURCHASE] Free purchase processed successfully");

    // Send confirmation email
    try {
      const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
      const gamesList = items.map((item: any) => `
        <li style="margin-bottom: 10px;">
          <strong>${item.title}</strong> - R$ ${item.price.toFixed(2)} <span style="color: #4CAF50;">(GRÁTIS com cupom!)</span>
        </li>
      `).join('');

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
            <div style="margin-top: 30px; padding: 20px; background-color: #4CAF50; border-radius: 5px;">
              <p style="margin: 0; font-size: 18px; font-weight: bold; color: white;">
                Total pago: R$ 0,00
              </p>
              <p style="margin: 10px 0 0 0; font-size: 14px; color: white;">
                Cupom de desconto aplicado: ${couponCode || 'N/A'}
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
      console.log("[PROCESS-FREE-PURCHASE] Confirmation email sent successfully");
    } catch (emailError) {
      console.error("[PROCESS-FREE-PURCHASE] Error sending confirmation email:", emailError);
      // Não falhamos a requisição se o email falhar
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        transactionId: transactionId
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("[PROCESS-FREE-PURCHASE] Error:", error);
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

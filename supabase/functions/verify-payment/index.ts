import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

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

    // Create transaction in database
    const { error: transactionError } = await supabaseClient.rpc('create_transaction', {
      user_id: user.id,
      transaction_id: session.id,
      amount: amount,
      status: 'completed',
      payment_method: 'credit_card',
      items: JSON.stringify(items)
    });

    if (transactionError) {
      console.error("[VERIFY-PAYMENT] Error creating transaction:", transactionError);
      throw new Error("Failed to create transaction");
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

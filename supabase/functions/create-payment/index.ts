import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabaseClient = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? ""
  );

  try {
    console.log("[CREATE-PAYMENT] Function started");

    // Retrieve authenticated user
    const authHeader = req.headers.get("Authorization")!;
    const token = authHeader.replace("Bearer ", "");
    const { data } = await supabaseClient.auth.getUser(token);
    const user = data.user;
    if (!user?.email) {
      throw new Error("User not authenticated or email not available");
    }
    console.log("[CREATE-PAYMENT] User authenticated:", user.email);

    // Get payment data from request
    const { items, amount, payment_method_types, coupon_code } = await req.json();
    console.log("[CREATE-PAYMENT] Processing payment:", { 
      amount, 
      itemCount: items.length,
      paymentMethods: payment_method_types,
      couponCode: coupon_code 
    });

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Check if a Stripe customer exists for this user
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log("[CREATE-PAYMENT] Existing customer found:", customerId);
    } else {
      console.log("[CREATE-PAYMENT] No existing customer found, will create one");
    }

    // Create line items from cart items
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: "brl",
        product_data: {
          name: item.game?.title || "Game",
          description: `Game ID: ${item.game_id}`,
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    console.log("[CREATE-PAYMENT] Creating checkout session with", lineItems.length, "items");

    // Create a checkout session
    const sessionConfig: any = {
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: lineItems,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/payment-methods?success=true`,
      cancel_url: `${req.headers.get("origin")}/payment-methods?canceled=true`,
      metadata: {
        user_id: user.id,
        coupon_code: coupon_code || null,
        items: JSON.stringify(items.map((item: any) => ({
          game_id: item.game_id,
          title: item.game?.title,
          price: item.price,
          quantity: item.quantity
        }))),
      },
    };

    // Add payment method types if specified
    if (payment_method_types && payment_method_types.length > 0) {
      sessionConfig.payment_method_types = payment_method_types;
      console.log("[CREATE-PAYMENT] Using payment methods:", payment_method_types);
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    console.log("[CREATE-PAYMENT] Checkout session created:", session.id);

    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id
      }), 
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("[CREATE-PAYMENT] Error:", error);
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

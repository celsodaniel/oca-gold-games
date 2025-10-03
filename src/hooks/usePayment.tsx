import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { CartItem } from "@/hooks/useCart";

interface CheckoutRequest {
  amount: number;
  items: CartItem[];
}

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const initiateCheckout = async (request: CheckoutRequest) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Você precisa estar autenticado para continuar.",
      });
      return;
    }

    setLoading(true);
    try {
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        'create-payment',
        {
          body: {
            items: request.items,
            amount: request.amount
          }
        }
      );

      if (checkoutError) {
        console.error('Erro ao criar checkout:', checkoutError);
        toast({
          variant: "destructive",
          title: "Erro ao processar",
          description: "Não foi possível iniciar o pagamento. Tente novamente.",
        });
        return;
      }

      if (!checkoutData?.url) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível criar a sessão de pagamento.",
        });
        return;
      }

      // Redirecionar para o Stripe Checkout
      window.location.href = checkoutData.url;
      
    } catch (error) {
      console.error('Erro no checkout:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro inesperado ao processar pagamento.",
      });
    } finally {
      setLoading(false);
    }
  };

  const getPaymentHistory = async () => {
    if (!user) return [];

    try {
      const { data, error } = await supabase.rpc('get_user_transactions', {
        user_id: user.id
      });

      if (error) {
        console.error('Erro ao buscar histórico:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
      return [];
    }
  };

  return {
    initiateCheckout,
    getPaymentHistory,
    loading
  };
};
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { CartItem } from "@/hooks/useCart";

interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  holderName: string;
}

interface PaymentRequest {
  amount: number;
  items: CartItem[];
  paymentMethod: PaymentData;
}

interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
}

export const usePayment = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const processPayment = async (paymentRequest: PaymentRequest): Promise<PaymentResult> => {
    if (!user) {
      return { success: false, error: "Usuário não autenticado" };
    }

    setLoading(true);
    try {
      // Validações básicas do cartão (para UX)
      const { cardNumber, expiryDate, cvv, holderName } = paymentRequest.paymentMethod;
      
      if (!cardNumber || cardNumber.replace(/\s/g, '').length < 13) {
        return { success: false, error: "Número do cartão inválido" };
      }

      if (!expiryDate || !expiryDate.includes('/') || expiryDate.length !== 5) {
        return { success: false, error: "Data de validade inválida" };
      }

      if (!cvv || cvv.length < 3) {
        return { success: false, error: "CVV inválido" };
      }

      if (!holderName || holderName.trim().length < 2) {
        return { success: false, error: "Nome do titular inválido" };
      }

      // Criar sessão de checkout do Stripe
      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        'create-payment',
        {
          body: {
            items: paymentRequest.items,
            amount: paymentRequest.amount
          }
        }
      );

      if (checkoutError) {
        console.error('Erro ao criar checkout:', checkoutError);
        return { 
          success: false, 
          error: "Erro ao processar pagamento. Tente novamente." 
        };
      }

      if (!checkoutData?.url) {
        return { 
          success: false, 
          error: "Erro ao criar sessão de pagamento." 
        };
      }

      // Abrir checkout do Stripe em nova aba
      const checkoutWindow = window.open(checkoutData.url, '_blank');
      
      if (!checkoutWindow) {
        return {
          success: false,
          error: "Por favor, permita pop-ups para completar o pagamento."
        };
      }

      // Aguardar retorno do pagamento (simples polling)
      // Em produção, considere usar webhooks
      toast({
        title: "Redirecionando para pagamento",
        description: "Complete o pagamento na janela aberta",
      });

      // Verificar status do pagamento após um tempo
      await new Promise(resolve => setTimeout(resolve, 3000));

      const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
        'verify-payment',
        {
          body: { sessionId: checkoutData.sessionId }
        }
      );

      if (verifyError || !verifyData?.success) {
        return {
          success: false,
          error: "Aguardando confirmação do pagamento..."
        };
      }

      return { 
        success: true, 
        transactionId: verifyData.transactionId 
      };

    } catch (error) {
      console.error('Erro no processamento do pagamento:', error);
      return { 
        success: false, 
        error: "Erro inesperado no processamento do pagamento" 
      };
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
    processPayment,
    getPaymentHistory,
    loading
  };
};
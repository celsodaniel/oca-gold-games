import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
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
      // Simular processamento de pagamento (em produção, usar Stripe real)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Validações básicas do cartão
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

      // Gerar ID da transação
      const transactionId = `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Salvar transação no banco usando RPC call para contornar limitação de tipos
      const { error: transactionError } = await supabase.rpc('create_transaction', {
        user_id: user.id,
        transaction_id: transactionId,
        amount: paymentRequest.amount,
        status: 'completed',
        payment_method: 'credit_card',
        items: JSON.stringify(paymentRequest.items.map(item => ({
          game_id: item.game_id,
          title: item.game?.title,
          price: item.price,
          quantity: item.quantity
        })))
      });

      if (transactionError) {
        console.error('Erro ao salvar transação:', transactionError);
        return { success: false, error: "Erro interno do sistema" };
      }

      // Adicionar jogos à biblioteca do usuário usando RPC call
      const { error: libraryError } = await supabase.rpc('add_games_to_library', {
        user_id: user.id,
        game_ids: paymentRequest.items.map(item => item.game_id)
      });

      if (libraryError) {
        console.error('Erro ao adicionar à biblioteca:', libraryError);
        // Não falhamos a transação por isso, apenas logamos
      }

      return { 
        success: true, 
        transactionId 
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
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar o histórico de pagamentos.",
        });
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
import { useState } from "react";
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
      // Simular processamento de pagamento (2 segundos de delay)
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

      // Salvar na localStorage temporariamente (simulação)
      const transactions = JSON.parse(localStorage.getItem('user_transactions') || '[]');
      transactions.push({
        id: transactionId,
        user_id: user.id,
        amount: paymentRequest.amount,
        status: 'completed',
        payment_method: 'credit_card',
        items: paymentRequest.items.map(item => ({
          game_id: item.game_id,
          title: item.game?.title,
          price: item.price,
          quantity: item.quantity
        })),
        created_at: new Date().toISOString()
      });
      localStorage.setItem('user_transactions', JSON.stringify(transactions));

      // Adicionar jogos à biblioteca do usuário (simulação)
      const library = JSON.parse(localStorage.getItem('user_library') || '[]');
      paymentRequest.items.forEach(item => {
        if (!library.some((lib: any) => lib.user_id === user.id && lib.game_id === item.game_id)) {
          library.push({
            user_id: user.id,
            game_id: item.game_id,
            acquired_at: new Date().toISOString()
          });
        }
      });
      localStorage.setItem('user_library', JSON.stringify(library));

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
      const transactions = JSON.parse(localStorage.getItem('user_transactions') || '[]');
      return transactions.filter((t: any) => t.user_id === user.id).sort((a: any, b: any) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
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
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discount: number;
  } | null>(null);
  const [validating, setValidating] = useState(false);
  const { toast } = useToast();

  const validateCoupon = async (cartTotal: number) => {
    if (!couponCode.trim()) {
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Digite um código de cupom.",
      });
      return;
    }

    setValidating(true);
    try {
      const { data, error } = await supabase.rpc("validate_coupon", {
        coupon_code: couponCode.toUpperCase(),
        cart_total: cartTotal,
      });

      if (error) throw error;

      const result = data[0];
      if (result.valid) {
        setAppliedCoupon({
          code: couponCode.toUpperCase(),
          discount: result.discount_amount,
        });
        toast({
          title: "Sucesso!",
          description: result.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Cupom inválido",
          description: result.message,
        });
      }
    } catch (error) {
      console.error("Erro ao validar cupom:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível validar o cupom.",
      });
    } finally {
      setValidating(false);
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast({
      title: "Cupom removido",
      description: "O desconto foi removido do carrinho.",
    });
  };

  return {
    couponCode,
    setCouponCode,
    appliedCoupon,
    validateCoupon,
    removeCoupon,
    validating,
  };
};

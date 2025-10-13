-- Criar tabela de cupons de desconto
CREATE TABLE public.coupons (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  code text NOT NULL UNIQUE,
  discount_type text NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value numeric NOT NULL CHECK (discount_value > 0),
  min_purchase numeric DEFAULT 0,
  max_uses integer,
  current_uses integer DEFAULT 0,
  expires_at timestamp with time zone,
  active boolean DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Políticas RLS - todos podem ver cupons ativos
CREATE POLICY "Anyone can view active coupons"
ON public.coupons
FOR SELECT
USING (active = true AND (expires_at IS NULL OR expires_at > now()));

-- Adicionar coluna de cupom nas transações
ALTER TABLE public.transactions
ADD COLUMN coupon_code text,
ADD COLUMN discount_amount numeric DEFAULT 0;

-- Função para validar e aplicar cupom
CREATE OR REPLACE FUNCTION public.validate_coupon(
  coupon_code text,
  cart_total numeric
)
RETURNS TABLE(
  valid boolean,
  discount_amount numeric,
  message text
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  coupon_record RECORD;
  calculated_discount numeric;
BEGIN
  -- Buscar cupom
  SELECT * INTO coupon_record
  FROM public.coupons
  WHERE code = coupon_code
  AND active = true
  AND (expires_at IS NULL OR expires_at > now())
  AND (max_uses IS NULL OR current_uses < max_uses);

  -- Verificar se cupom existe
  IF NOT FOUND THEN
    RETURN QUERY SELECT false, 0::numeric, 'Cupom inválido ou expirado'::text;
    RETURN;
  END IF;

  -- Verificar valor mínimo
  IF cart_total < coupon_record.min_purchase THEN
    RETURN QUERY SELECT false, 0::numeric, 
      ('Compra mínima de R$ ' || coupon_record.min_purchase::text || ' necessária')::text;
    RETURN;
  END IF;

  -- Calcular desconto
  IF coupon_record.discount_type = 'percentage' THEN
    calculated_discount := (cart_total * coupon_record.discount_value / 100);
  ELSE
    calculated_discount := coupon_record.discount_value;
  END IF;

  -- Garantir que o desconto não seja maior que o total
  IF calculated_discount > cart_total THEN
    calculated_discount := cart_total;
  END IF;

  RETURN QUERY SELECT true, calculated_discount, 'Cupom aplicado com sucesso!'::text;
END;
$$;

-- Função para incrementar uso do cupom
CREATE OR REPLACE FUNCTION public.use_coupon(coupon_code text)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  UPDATE public.coupons
  SET current_uses = current_uses + 1
  WHERE code = coupon_code;
END;
$$;
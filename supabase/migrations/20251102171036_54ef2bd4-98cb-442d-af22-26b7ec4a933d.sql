-- Inserir cupom de 100% de desconto
INSERT INTO public.coupons (code, discount_type, discount_value, min_purchase, max_uses, current_uses, active, expires_at)
VALUES ('GRATIS100', 'percentage', 100, 0, NULL, 0, true, NULL)
ON CONFLICT (code) DO NOTHING;
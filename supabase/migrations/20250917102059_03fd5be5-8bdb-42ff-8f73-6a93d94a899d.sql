-- Create RPC function to insert transactions
CREATE OR REPLACE FUNCTION public.create_transaction(
  user_id UUID,
  transaction_id TEXT,
  amount DECIMAL,
  status TEXT,
  payment_method TEXT,
  items TEXT
) RETURNS VOID AS $$
BEGIN
  INSERT INTO public.transactions (user_id, transaction_id, amount, status, payment_method, items)
  VALUES (user_id, transaction_id, amount, status, payment_method, items::jsonb);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create RPC function to add games to library
CREATE OR REPLACE FUNCTION public.add_games_to_library(
  user_id UUID,
  game_ids TEXT[]
) RETURNS VOID AS $$
DECLARE
  game_id TEXT;
BEGIN
  FOREACH game_id IN ARRAY game_ids
  LOOP
    INSERT INTO public.user_library (user_id, game_id)
    VALUES (user_id, game_id)
    ON CONFLICT (user_id, game_id) DO NOTHING;
  END LOOP;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create RPC function to get user transactions
CREATE OR REPLACE FUNCTION public.get_user_transactions(user_id UUID)
RETURNS SETOF public.transactions AS $$
BEGIN
  RETURN QUERY 
  SELECT * FROM public.transactions 
  WHERE transactions.user_id = get_user_transactions.user_id
  ORDER BY created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;
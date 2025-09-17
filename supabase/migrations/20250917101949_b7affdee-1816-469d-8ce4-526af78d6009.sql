-- Create transactions table for payment history
CREATE TABLE public.transactions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  transaction_id TEXT NOT NULL UNIQUE,
  amount DECIMAL(10,2) NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  payment_method TEXT NOT NULL,
  items JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_library table for games owned by users
CREATE TABLE public.user_library (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  game_id TEXT NOT NULL,
  acquired_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, game_id)
);

-- Enable RLS on both tables
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_library ENABLE ROW LEVEL SECURITY;

-- Create policies for transactions
CREATE POLICY "Users can view their own transactions" 
ON public.transactions 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own transactions" 
ON public.transactions 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create policies for user_library
CREATE POLICY "Users can view their own library" 
ON public.user_library 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can add games to their library" 
ON public.user_library 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Create indexes for better performance
CREATE INDEX idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX idx_transactions_status ON public.transactions(status);
CREATE INDEX idx_user_library_user_id ON public.user_library(user_id);
CREATE INDEX idx_user_library_game_id ON public.user_library(game_id);

-- Create trigger for automatic timestamp updates on transactions
CREATE TRIGGER update_transactions_updated_at
BEFORE UPDATE ON public.transactions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
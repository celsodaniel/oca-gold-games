-- Create cart table for shopping cart functionality
CREATE TABLE public.cart (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  game_id TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  price DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Ensure user can't add same game twice
  UNIQUE(user_id, game_id)
);

-- Enable Row Level Security
ALTER TABLE public.cart ENABLE ROW LEVEL SECURITY;

-- Create policies for cart access
CREATE POLICY "Users can view their own cart items" 
ON public.cart 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can add items to their own cart" 
ON public.cart 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own cart items" 
ON public.cart 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own cart items" 
ON public.cart 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create trigger for automatic timestamp updates on cart table
CREATE TRIGGER update_cart_updated_at
    BEFORE UPDATE ON public.cart
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { games } from "@/data/games";

export interface CartItem {
  id: string;
  game_id: string;
  quantity: number;
  price: number;
  created_at: string;
  game?: {
    title: string;
    image: string;
    category: string;
  };
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { toast } = useToast();

  const loadCart = async () => {
    if (!user) {
      setCartItems([]);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('cart')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao carregar carrinho:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível carregar o carrinho.",
        });
      } else {
        // Enriquecer os dados do carrinho com informações dos jogos
        const enrichedItems = data.map(item => {
          const game = games.find(g => g.id === item.game_id);
          return {
            ...item,
            game: game ? {
              title: game.title,
              image: game.image,
              category: game.category
            } : undefined
          };
        });
        setCartItems(enrichedItems);
      }
    } catch (error) {
      console.error('Erro ao carregar carrinho:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (gameId: string, price: number) => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Login necessário",
        description: "Você precisa estar logado para adicionar itens ao carrinho.",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('cart')
        .upsert({
          user_id: user.id,
          game_id: gameId,
          price: price,
          quantity: 1
        });

      if (error) {
        if (error.code === '23505') { // unique constraint violation
          toast({
            title: "Jogo já no carrinho",
            description: "Este jogo já está no seu carrinho.",
          });
        } else {
          throw error;
        }
      } else {
        const game = games.find(g => g.id === gameId);
        toast({
          title: "Adicionado ao carrinho!",
          description: `${game?.title} foi adicionado ao seu carrinho.`,
        });
        loadCart(); // Recarregar carrinho
      }
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível adicionar o jogo ao carrinho.",
      });
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('id', itemId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Erro ao remover do carrinho:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível remover o item do carrinho.",
        });
      } else {
        toast({
          title: "Item removido",
          description: "O item foi removido do carrinho.",
        });
        loadCart(); // Recarregar carrinho
      }
    } catch (error) {
      console.error('Erro ao remover do carrinho:', error);
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!user || quantity < 1) return;

    try {
      const { error } = await supabase
        .from('cart')
        .update({ quantity })
        .eq('id', itemId)
        .eq('user_id', user.id);

      if (error) {
        console.error('Erro ao atualizar quantidade:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível atualizar a quantidade.",
        });
      } else {
        loadCart(); // Recarregar carrinho
      }
    } catch (error) {
      console.error('Erro ao atualizar quantidade:', error);
    }
  };

  const clearCart = async () => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('cart')
        .delete()
        .eq('user_id', user.id);

      if (error) {
        console.error('Erro ao limpar carrinho:', error);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível limpar o carrinho.",
        });
      } else {
        toast({
          title: "Carrinho limpo",
          description: "Todos os itens foram removidos do carrinho.",
        });
        setCartItems([]);
      }
    } catch (error) {
      console.error('Erro ao limpar carrinho:', error);
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    loadCart();
  }, [user]);

  return {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getItemCount,
    refreshCart: loadCart
  };
};
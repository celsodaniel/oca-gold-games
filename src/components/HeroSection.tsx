import { PlayCircle, Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { games } from "@/data/games";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const HeroSection = () => {
  const [currentGameIndex, setCurrentGameIndex] = useState(0);
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Filtrar apenas jogos em destaque para o carousel
  const featuredGames = games.filter(game => game.featured);
  const currentGame = featuredGames[currentGameIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameIndex((prev) => (prev + 1) % featuredGames.length);
    }, 8000); // Muda a cada 8 segundos

    return () => clearInterval(interval);
  }, [featuredGames.length]);

  const nextGame = () => {
    setCurrentGameIndex((prev) => (prev + 1) % featuredGames.length);
  };

  const prevGame = () => {
    setCurrentGameIndex((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const handleBuyNow = async () => {
    if (!user) {
      navigate('/login');
      return;
    }

    if (currentGame.price === "Free to Play") {
      toast({
        title: "Jogo gratuito!",
        description: "Este jogo é gratuito para jogar.",
      });
      return;
    }

    try {
      const price = parseFloat(currentGame.price.replace("R$ ", "").replace(",", "."));
      
      const { error } = await supabase
        .from('cart')
        .upsert({
          user_id: user.id,
          game_id: currentGame.id,
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
        toast({
          title: "Adicionado ao carrinho!",
          description: `${currentGame.title} foi adicionado ao seu carrinho.`,
        });
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

  const handleWatchTrailer = () => {
    if (currentGame.trailer) {
      window.open(currentGame.trailer, '_blank');
    }
  };

  if (!currentGame) return null;

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={currentGame.image}
          alt={currentGame.title}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep via-black-deep/80 to-transparent" />
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black-deep/50 hover:bg-black-deep/80 text-white h-12 w-12"
        onClick={prevGame}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black-deep/50 hover:bg-black-deep/80 text-white h-12 w-12"
        onClick={nextGame}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Game Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentGameIndex ? 'bg-golden' : 'bg-white/30'
            }`}
            onClick={() => setCurrentGameIndex(index)}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl space-y-6">
          <div className="flex items-center gap-2 text-golden">
            <Star className="h-5 w-5 fill-current" />
            <span className="text-sm font-medium uppercase tracking-wider">
              Jogo em Destaque
            </span>
          </div>

          <h1 className="text-6xl font-bold text-foreground leading-tight">
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              {currentGame.title}
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg">
            {currentGame.description}
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < currentGame.rating ? 'fill-golden text-golden' : 'text-muted-foreground'}`}
                />
              ))}
              <span className="ml-2 text-foreground font-medium">{currentGame.rating}/5</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground capitalize">{currentGame.category}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-golden">{currentGame.price}</span>
              {currentGame.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">{currentGame.originalPrice}</span>
                  <span className="bg-gradient-golden text-black-deep px-3 py-1 rounded-full text-sm font-bold">
                    -{currentGame.discount}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-bold px-8 py-6 text-lg shadow-golden-glow hover:shadow-golden transition-all duration-300"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {currentGame.price === "Free to Play" ? "Jogar Grátis" : "Comprar Agora"}
            </Button>
            {currentGame.trailer && (
              <Button 
                variant="outline" 
                size="lg"
                className="border-golden text-golden hover:bg-golden hover:text-black-deep px-8 py-6 text-lg transition-all duration-300"
                onClick={handleWatchTrailer}
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Ver Trailer
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
import { PlayCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import gameHeroImage from "@/assets/game-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={gameHeroImage}
          alt="Featured Game"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-deep via-black-deep/80 to-transparent" />
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
            Legends of 
            <span className="bg-gradient-golden bg-clip-text text-transparent">
              {" "}Aetheria
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg">
            Embarque numa jornada épica através de mundos místicos, 
            enfrente criaturas lendárias e descubra segredos antigos 
            nesta aventura RPG definitiva.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-golden text-golden"
                />
              ))}
              <span className="ml-2 text-foreground font-medium">4.8/5</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Aventura, RPG, Fantasia</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-golden">R$ 89,99</span>
              <span className="text-lg text-muted-foreground line-through">R$ 129,99</span>
              <span className="bg-gradient-golden text-black-deep px-3 py-1 rounded-full text-sm font-bold">
                -31%
              </span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-bold px-8 py-6 text-lg shadow-golden-glow hover:shadow-golden transition-all duration-300"
            >
              Comprar Agora
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-golden text-golden hover:bg-golden hover:text-black-deep px-8 py-6 text-lg transition-all duration-300"
            >
              <PlayCircle className="h-5 w-5 mr-2" />
              Ver Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameGrid } from "@/components/GameGrid";
import { Badge } from "@/components/ui/badge";
import { Timer, Zap, Star, TrendingUp } from "lucide-react";

const Promotions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Promotions Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-golden to-golden-light relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-8 w-8 text-black-deep" />
                <Badge className="bg-black-deep text-golden px-4 py-2 text-lg">
                  MEGA PROMOÇÃO
                </Badge>
              </div>
              <h1 className="text-5xl font-bold text-black-deep mb-4">
                Ofertas Imperdíveis
              </h1>
              <p className="text-xl text-black-deep/80 max-w-2xl mx-auto mb-6">
                Aproveite descontos de até 90% nos melhores jogos. Ofertas por tempo limitado!
              </p>
              
              {/* Countdown Timer */}
              <div className="flex items-center justify-center gap-4 bg-black-deep/10 rounded-lg p-4 max-w-md mx-auto">
                <Timer className="h-5 w-5 text-black-deep" />
                <span className="font-bold text-black-deep">Termina em: 2d 14h 32m</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        {/* Flash Sales */}
        <section className="py-16 px-4 bg-black-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">Flash Sale</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Ofertas relâmpago com até 90% de desconto
              </p>
            </div>
          </div>
        </section>

        <GameGrid 
          title="Flash Sale - 90% OFF" 
          subtitle="Ofertas relâmpago por tempo muito limitado"
        />

        {/* Daily Deals */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="h-6 w-6 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">Ofertas do Dia</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Novos descontos todos os dias
              </p>
            </div>
          </div>
        </section>

        <GameGrid 
          title="Ofertas Diárias" 
          subtitle="Descontos especiais que mudam todos os dias"
        />

        {/* Weekly Deals */}
        <section className="py-16 px-4 bg-black-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">Ofertas da Semana</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Promoções especiais válidas por toda a semana
              </p>
            </div>
          </div>
        </section>

        <GameGrid 
          title="Ofertas Semanais" 
          subtitle="Grandes descontos válidos por 7 dias"
        />

        {/* Bundle Deals */}
        <GameGrid 
          title="Pacotes Promocionais" 
          subtitle="Compre jogos em pacotes e economize ainda mais"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { GameGrid } from "@/components/GameGrid";
import { Categories } from "@/components/Categories";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GameGrid 
          title="Jogos em Destaque" 
          subtitle="Os melhores jogos selecionados especialmente para você"
        />
        <Categories />
        <GameGrid 
          title="Promoções Imperdíveis" 
          subtitle="Aproveite os descontos incríveis por tempo limitado"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

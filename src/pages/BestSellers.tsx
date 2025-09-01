import { GameGrid } from "@/components/GameGrid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const BestSellers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Mais Vendidos
          </CardTitle>
          <CardDescription>
            Os jogos favoritos da nossa comunidade
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Descubra os títulos que conquistaram o coração dos gamers brasileiros. 
            Estes são os jogos mais populares e bem avaliados da nossa plataforma.
          </p>
        </CardContent>
      </Card>

      <GameGrid 
        title="Mais Vendidos" 
        subtitle="Os jogos favoritos da nossa comunidade"
        sortBy="popular"
        limit={12}
      />
      </main>
      <Footer />
    </div>
  );
};
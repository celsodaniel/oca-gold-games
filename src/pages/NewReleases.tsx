import { GameGrid } from "@/components/GameGrid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const NewReleases = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Novidades
          </CardTitle>
          <CardDescription>
            Confira os lançamentos mais recentes da nossa plataforma
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Fique por dentro dos jogos que acabaram de chegar! Aqui você encontra os lançamentos mais quentes 
            do momento, sempre com os melhores preços e promoções exclusivas.
          </p>
        </CardContent>
      </Card>

      <GameGrid 
        title="Novidades" 
        subtitle="Confira os lançamentos mais recentes da nossa plataforma"
        sortBy="newest"
        limit={12}
      />
      </main>
      <Footer />
    </div>
  );
};
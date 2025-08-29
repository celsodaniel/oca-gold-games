import { GameCard } from "@/components/GameCard";
import { games } from "@/data/games";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const FreeGames = () => {
  // Get free games
  const freeGames = games.filter(game => game.price === "Free to Play");

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Jogos Gratuitos
          </CardTitle>
          <CardDescription>
            Diversão sem custo algum!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Explore nossa seleção de jogos completamente gratuitos. 
            Alta qualidade, zero investimento - apenas diversão pura!
          </p>
        </CardContent>
      </Card>

      {freeGames.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">
            Nenhum jogo gratuito disponível no momento.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {freeGames.map((game) => (
            <GameCard
              key={game.id}
              id={game.id}
              title={game.title}
              price={game.price}
              originalPrice={game.originalPrice}
              discount={game.discount}
              rating={game.rating}
              image={game.image}
              featured={game.featured}
            />
          ))}
        </div>
      )}
    </div>
  );
};
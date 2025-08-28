import { GameCard } from "./GameCard";
import { games, Game } from "@/data/games";

interface GameGridProps {
  title: string;
  subtitle?: string;
  category?: string;
  searchQuery?: string;
  sortBy?: string;
  limit?: number;
}

export const GameGrid = ({ title, subtitle, category, searchQuery, sortBy, limit }: GameGridProps) => {
  let filteredGames = [...games];

  // Filter by category
  if (category && category !== "all") {
    filteredGames = filteredGames.filter(game => game.category === category);
  }

  // Filter by search query
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredGames = filteredGames.filter(game => 
      game.title.toLowerCase().includes(query) ||
      game.description.toLowerCase().includes(query)
    );
  }

  // Sort games
  if (sortBy) {
    switch (sortBy) {
      case "price-low":
        filteredGames.sort((a, b) => {
          const priceA = parseFloat(a.price.replace("R$ ", "").replace(",", "."));
          const priceB = parseFloat(b.price.replace("R$ ", "").replace(",", "."));
          return priceA - priceB;
        });
        break;
      case "price-high":
        filteredGames.sort((a, b) => {
          const priceA = parseFloat(a.price.replace("R$ ", "").replace(",", "."));
          const priceB = parseFloat(b.price.replace("R$ ", "").replace(",", "."));
          return priceB - priceA;
        });
        break;
      case "rating":
        filteredGames.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filteredGames.reverse();
        break;
      case "popular":
      default:
        filteredGames.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }
  }

  // Limit results
  if (limit) {
    filteredGames = filteredGames.slice(0, limit);
  }
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {filteredGames.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">
              Nenhum jogo encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredGames.map((game) => (
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

        <div className="text-center mt-12">
          <button className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-golden">
            Ver Mais Jogos
          </button>
        </div>
      </div>
    </section>
  );
};
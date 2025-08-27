import { GameCard } from "./GameCard";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";

const games = [
  {
    id: 1,
    title: "Neon Velocity: Underground",
    price: "R$ 45,99",
    originalPrice: "R$ 59,99",
    discount: "23%",
    rating: 4,
    image: game1,
    featured: true,
  },
  {
    id: 2,
    title: "Stellar Empire: Conquest",
    price: "R$ 67,99",
    originalPrice: "R$ 89,99",
    discount: "24%",
    rating: 5,
    image: game2,
  },
  {
    id: 3,
    title: "Realm of Dragons: Legacy",
    price: "R$ 39,99",
    rating: 4,
    image: game3,
  },
  {
    id: 4,
    title: "Apocalypse: Last Stand",
    price: "R$ 29,99",
    originalPrice: "R$ 49,99",
    discount: "40%",
    rating: 4,
    image: game4,
    featured: true,
  },
];

interface GameGridProps {
  title: string;
  subtitle?: string;
}

export const GameGrid = ({ title, subtitle }: GameGridProps) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
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

        <div className="text-center mt-12">
          <button className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-bold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-golden">
            Ver Mais Jogos
          </button>
        </div>
      </div>
    </section>
  );
};
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";
import game7 from "@/assets/game-7.jpg";
import game8 from "@/assets/game-8.jpg";

export interface Game {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  image: string;
  featured?: boolean;
  category: string;
  description: string;
  features: string[];
  requirements: {
    minimum: string;
    recommended: string;
  };
  screenshots: string[];
}

export const games: Game[] = [
  {
    id: "1",
    title: "Cyberpunk 2077",
    price: "R$ 89,99",
    originalPrice: "R$ 149,99",
    discount: "40%",
    rating: 4,
    image: game1,
    featured: true,
    category: "action",
    description: "Cyberpunk 2077 é um RPG de ação em mundo aberto que se passa em Night City, uma megalópole perigosa onde você luta pelo poder, glamour e imortalidade.",
    features: ["Mundo aberto massivo", "Personalização profunda", "História envolvente", "Gráficos de última geração"],
    requirements: {
      minimum: "Windows 10, Intel i5-3570K, 8GB RAM, GTX 780",
      recommended: "Windows 10, Intel i7-4790, 12GB RAM, GTX 1060"
    },
    screenshots: [game1, game2, game3, game4]
  },
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    price: "R$ 39,99",
    originalPrice: "R$ 79,99",
    discount: "50%",
    rating: 5,
    image: game2,
    category: "rpg",
    description: "Uma aventura épica em um mundo aberto com mais de 100 horas de gameplay principal e side quests.",
    features: ["Mundo aberto gigantesco", "História rica", "Combate estratégico", "Escolhas que importam"],
    requirements: {
      minimum: "Windows 7, Intel i5-2500K, 6GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-3770, 8GB RAM, GTX 770"
    },
    screenshots: [game2, game1, game3, game4]
  },
  {
    id: "3",
    title: "Dragon's Quest: Legends",
    price: "R$ 54,99",
    rating: 4,
    image: game3,
    category: "adventure",
    description: "Embarque numa jornada épica através de reinos místicos cheios de dragões, magia e aventuras.",
    features: ["Sistema de combate estratégico", "Múltiplas classes de personagem", "História envolvente", "Co-op online"],
    requirements: {
      minimum: "Windows 10, Intel i5-4570, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-6700, 16GB RAM, GTX 1070"
    },
    screenshots: [game3, game1, game2, game4]
  },
  {
    id: "4",
    title: "Zombie Apocalypse: Survival",
    price: "R$ 29,99",
    originalPrice: "R$ 49,99",
    discount: "40%",
    rating: 4,
    image: game4,
    featured: true,
    category: "horror",
    description: "Sobreviva em um mundo pós-apocalíptico infestado de zumbis. Colete recursos, construa abrigos e lute pela sobrevivência.",
    features: ["Mundo aberto survival", "Sistema de crafting", "Multijogador cooperativo", "Dia/noite dinâmico"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 8GB RAM, GTX 750 Ti",
      recommended: "Windows 10, Intel i5-8400, 16GB RAM, GTX 1060"
    },
    screenshots: [game4, game1, game2, game3]
  },
  {
    id: "5",
    title: "Knights of the Golden Realm",
    price: "R$ 67,99",
    originalPrice: "R$ 89,99",
    discount: "25%",
    rating: 5,
    image: game5,
    category: "rpg",
    description: "Um RPG medieval épico onde você controla um cavaleiro em busca da lendária espada dourada.",
    features: ["Sistema de combate tático", "Personalização de equipamentos", "História ramificada", "Gráficos deslumbrantes"],
    requirements: {
      minimum: "Windows 10, Intel i5-6500, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1660"
    },
    screenshots: [game5, game1, game2, game3]
  },
  {
    id: "6",
    title: "Neon Speed: Underground Racing",
    price: "R$ 45,99",
    rating: 4,
    image: game6,
    featured: true,
    category: "action",
    description: "Corridas ilegais pelas ruas neon de uma cidade futurística. Customize seu carro e domine as pistas underground.",
    features: ["Corridas noturnas", "Customização de carros", "Modo multijogador", "Trilha sonora eletrônica"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-7700, 16GB RAM, GTX 1070"
    },
    screenshots: [game6, game1, game2, game3]
  },
  {
    id: "7",
    title: "Haunted Manor: Dark Secrets",
    price: "R$ 34,99",
    originalPrice: "R$ 59,99",
    discount: "42%",
    rating: 4,
    image: game7,
    category: "horror",
    description: "Explore uma mansão assombrada cheia de mistérios sombrios e criaturas sobrenaturais.",
    features: ["Atmosfera de terror", "Puzzles complexos", "História de mistério", "Gráficos atmosféricos"],
    requirements: {
      minimum: "Windows 10, Intel i3-7100, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i5-8600, 16GB RAM, GTX 1060"
    },
    screenshots: [game7, game1, game2, game3]
  },
  {
    id: "8",
    title: "Love in Cherry Blossom",
    price: "R$ 24,99",
    rating: 5,
    image: game8,
    category: "romance",
    description: "Uma visual novel romântica ambientada no Japão durante a temporada das cerejeiras em flor.",
    features: ["Múltiplas rotas românticas", "Arte anime de alta qualidade", "Trilha sonora emocional", "Várias finais"],
    requirements: {
      minimum: "Windows 7, Intel i3-4130, 4GB RAM, Integrada",
      recommended: "Windows 10, Intel i5-6400, 8GB RAM, GTX 750"
    },
    screenshots: [game8, game1, game2, game3]
  },
  {
    id: "9",
    title: "Space Wars: Galaxy Battle",
    price: "R$ 49,99",
    originalPrice: "R$ 69,99",
    discount: "29%",
    rating: 4,
    image: game2,
    category: "action",
    description: "Batalhas épicas no espaço com naves customizáveis e combate em tempo real.",
    features: ["Batalhas espaciais", "Frota customizável", "Campanha épica", "Multijogador competitivo"],
    requirements: {
      minimum: "Windows 10, Intel i5-6500, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1660"
    },
    screenshots: [game2, game1, game3, game4]
  },
  {
    id: "10",
    title: "Forest Adventure: Lost Temple",
    price: "R$ 36,99",
    rating: 4,
    image: game3,
    category: "adventure",
    description: "Explore florestas misteriosas em busca de templos perdidos cheios de tesouros e perigos.",
    features: ["Exploração livre", "Puzzles arqueológicos", "Combate de aventura", "Descobertas secretas"],
    requirements: {
      minimum: "Windows 10, Intel i3-8100, 6GB RAM, GTX 950",
      recommended: "Windows 10, Intel i5-9400, 12GB RAM, GTX 1060"
    },
    screenshots: [game3, game1, game2, game4]
  },
  {
    id: "11",
    title: "Pro League Championship",
    price: "Free to Play",
    rating: 5,
    image: game1,
    featured: true,
    category: "esports",
    description: "O jogo de esports mais competitivo do mundo. Prove suas habilidades nas ligas profissionais.",
    features: ["Ranked competitivo", "Torneios oficiais", "Sistema de equipes", "Transmissões ao vivo"],
    requirements: {
      minimum: "Windows 10, Intel i5-4590, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game1, game2, game3, game4]
  },
  {
    id: "12",
    title: "Mystic Hearts: Eternal Bond",
    price: "R$ 42,99",
    originalPrice: "R$ 59,99",
    discount: "28%",
    rating: 5,
    image: game8,
    category: "romance",
    description: "Uma aventura romântica com elementos de fantasia onde o amor transcende dimensões.",
    features: ["Romance interativo", "Mundo fantástico", "Personagens carismáticos", "Múltiplas escolhas"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 6GB RAM, GTX 750",
      recommended: "Windows 10, Intel i5-7500, 12GB RAM, GTX 1050"
    },
    screenshots: [game8, game1, game2, game3]
  }
];

export const getGamesByCategory = (category: string): Game[] => {
  if (category === "all") return games;
  return games.filter(game => game.category === category);
};

export const searchGames = (query: string): Game[] => {
  if (!query.trim()) return games;
  const lowercaseQuery = query.toLowerCase();
  return games.filter(game => 
    game.title.toLowerCase().includes(lowercaseQuery) ||
    game.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const sortGames = (games: Game[], sortBy: string): Game[] => {
  const gamesCopy = [...games];
  
  switch (sortBy) {
    case "price-low":
      return gamesCopy.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("R$ ", "").replace(",", "."));
        const priceB = parseFloat(b.price.replace("R$ ", "").replace(",", "."));
        return priceA - priceB;
      });
    case "price-high":
      return gamesCopy.sort((a, b) => {
        const priceA = parseFloat(a.price.replace("R$ ", "").replace(",", "."));
        const priceB = parseFloat(b.price.replace("R$ ", "").replace(",", "."));
        return priceB - priceA;
      });
    case "rating":
      return gamesCopy.sort((a, b) => b.rating - a.rating);
    case "newest":
      return gamesCopy.reverse();
    case "popular":
    default:
      return gamesCopy.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
  }
};
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
  trailerImage: string;
  featured?: boolean;
  category: string;
  description: string;
  features: string[];
  requirements: {
    minimum: string;
    recommended: string;
  };
  screenshots: string[];
  trailer?: string;
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
    trailerImage: game2,
    featured: true,
    category: "action",
    description: "Cyberpunk 2077 é um RPG de ação em mundo aberto que se passa em Night City, uma megalópole perigosa onde você luta pelo poder, glamour e imortalidade.",
    features: ["Mundo aberto massivo", "Personalização profunda", "História envolvente", "Gráficos de última geração"],
    requirements: {
      minimum: "Windows 10, Intel i5-3570K, 8GB RAM, GTX 780",
      recommended: "Windows 10, Intel i7-4790, 12GB RAM, GTX 1060"
    },
    screenshots: [game1, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/8X2kIfS6fb8"
  },
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    price: "R$ 39,99",
    originalPrice: "R$ 79,99",
    discount: "50%",
    rating: 5,
    image: game2,
    trailerImage: game3,
    category: "rpg",
    description: "Uma aventura épica em um mundo aberto com mais de 100 horas de gameplay principal e side quests.",
    features: ["Mundo aberto gigantesco", "História rica", "Combate estratégico", "Escolhas que importam"],
    requirements: {
      minimum: "Windows 7, Intel i5-2500K, 6GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-3770, 8GB RAM, GTX 770"
    },
    screenshots: [game2, game1, game3, game4],
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs"
  },
  {
    id: "3",
    title: "Dragon's Quest: Legends",
    price: "R$ 54,99",
    rating: 4,
    image: game3,
    trailerImage: game4,
    category: "adventure",
    description: "Embarque numa jornada épica através de reinos místicos cheios de dragões, magia e aventuras.",
    features: ["Sistema de combate estratégico", "Múltiplas classes de personagem", "História envolvente", "Co-op online"],
    requirements: {
      minimum: "Windows 10, Intel i5-4570, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-6700, 16GB RAM, GTX 1070"
    },
    screenshots: [game3, game2, game1, game4],
    trailer: "https://www.youtube.com/embed/LH-i8IvYIcg"
  },
  {
    id: "4",
    title: "Zombie Apocalypse: Survival",
    price: "R$ 29,99",
    originalPrice: "R$ 49,99",
    discount: "40%",
    rating: 4,
    image: game4,
    trailerImage: game5,
    featured: true,
    category: "horror",
    description: "Sobreviva em um mundo pós-apocalíptico infestado de zumbis. Colete recursos, construa abrigos e lute pela sobrevivência.",
    features: ["Mundo aberto survival", "Sistema de crafting", "Multijogador cooperativo", "Dia/noite dinâmico"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 8GB RAM, GTX 750 Ti",
      recommended: "Windows 10, Intel i5-8400, 16GB RAM, GTX 1060"
    },
    screenshots: [game4, game3, game2, game1],
    trailer: "https://www.youtube.com/embed/MeB3eYk1Ze0"
  },
  {
    id: "5",
    title: "Knights of the Golden Realm",
    price: "R$ 67,99",
    originalPrice: "R$ 89,99",
    discount: "25%",
    rating: 5,
    image: game5,
    trailerImage: game6,
    category: "rpg",
    description: "Um RPG medieval épico onde você controla um cavaleiro em busca da lendária espada dourada.",
    features: ["Sistema de combate tático", "Personalização de equipamentos", "História ramificada", "Gráficos deslumbrantes"],
    requirements: {
      minimum: "Windows 10, Intel i5-6500, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1660"
    },
    screenshots: [game5, game4, game3, game2],
    trailer: "https://www.youtube.com/embed/K_03gMjJVjQ"
  },
  {
    id: "6",
    title: "Neon Speed: Underground Racing",
    price: "R$ 45,99",
    rating: 4,
    image: game6,
    trailerImage: game7,
    featured: true,
    category: "action",
    description: "Corridas ilegais pelas ruas neon de uma cidade futurística. Customize seu carro e domine as pistas underground.",
    features: ["Corridas noturnas", "Customização de carros", "Modo multijogador", "Trilha sonora eletrônica"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-7700, 16GB RAM, GTX 1070"
    },
    screenshots: [game6, game5, game4, game3],
    trailer: "https://www.youtube.com/embed/KZ7bVn6WLMM"
  },
  {
    id: "7",
    title: "Haunted Manor: Dark Secrets",
    price: "R$ 34,99",
    originalPrice: "R$ 59,99",
    discount: "42%",
    rating: 4,
    image: game7,
    trailerImage: game8,
    category: "horror",
    description: "Explore uma mansão assombrada cheia de mistérios sombrios e criaturas sobrenaturais.",
    features: ["Atmosfera de terror", "Puzzles complexos", "História de mistério", "Gráficos atmosféricos"],
    requirements: {
      minimum: "Windows 10, Intel i3-7100, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i5-8600, 16GB RAM, GTX 1060"
    },
    screenshots: [game7, game6, game5, game4],
    trailer: "https://www.youtube.com/embed/k2Y6wLZbmRE"
  },
  {
    id: "8",
    title: "Love in Cherry Blossom",
    price: "R$ 24,99",
    rating: 5,
    image: game8,
    trailerImage: game1,
    category: "romance",
    description: "Uma visual novel romântica ambientada no Japão durante a temporada das cerejeiras em flor.",
    features: ["Múltiplas rotas românticas", "Arte anime de alta qualidade", "Trilha sonora emocional", "Várias finais"],
    requirements: {
      minimum: "Windows 7, Intel i3-4130, 4GB RAM, Integrada",
      recommended: "Windows 10, Intel i5-6400, 8GB RAM, GTX 750"
    },
    screenshots: [game8, game7, game6, game5],
    trailer: "https://www.youtube.com/embed/iNF5GQXDvz8"
  },
  {
    id: "9",
    title: "Space Wars: Galaxy Battle",
    price: "R$ 49,99",
    originalPrice: "R$ 69,99",
    discount: "29%",
    rating: 4,
    image: game2,
    trailerImage: game3,
    category: "action",
    description: "Batalhas épicas no espaço com naves customizáveis e combate em tempo real.",
    features: ["Batalhas espaciais", "Frota customizável", "Campanha épica", "Multijogador competitivo"],
    requirements: {
      minimum: "Windows 10, Intel i5-6500, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1660"
    },
    screenshots: [game2, game1, game3, game4],
    trailer: "https://www.youtube.com/embed/VppjX4to9s4"
  },
  {
    id: "10",
    title: "Forest Adventure: Lost Temple",
    price: "R$ 36,99",
    rating: 4,
    image: game3,
    trailerImage: game4,
    category: "adventure",
    description: "Explore florestas misteriosas em busca de templos perdidos cheios de tesouros e perigos.",
    features: ["Exploração livre", "Puzzles arqueológicos", "Combate de aventura", "Descobertas secretas"],
    requirements: {
      minimum: "Windows 10, Intel i3-8100, 6GB RAM, GTX 950",
      recommended: "Windows 10, Intel i5-9400, 12GB RAM, GTX 1060"
    },
    screenshots: [game3, game1, game2, game4],
    trailer: "https://www.youtube.com/embed/J69I1PONv3s"
  },
  {
    id: "11",
    title: "Pro League Championship",
    price: "Free to Play",
    rating: 5,
    image: game1,
    trailerImage: game5,
    featured: true,
    category: "esports",
    description: "O jogo de esports mais competitivo do mundo. Prove suas habilidades nas ligas profissionais.",
    features: ["Ranked competitivo", "Torneios oficiais", "Sistema de equipes", "Transmissões ao vivo"],
    requirements: {
      minimum: "Windows 10, Intel i5-4590, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game1, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/kUdae8mONGQ"
  },
  {
    id: "12",
    title: "Mystic Hearts: Eternal Bond",
    price: "R$ 42,99",
    originalPrice: "R$ 59,99",
    discount: "28%",
    rating: 5,
    image: game8,
    trailerImage: game6,
    category: "romance",
    description: "Uma aventura romântica com elementos de fantasia onde o amor transcende dimensões.",
    features: ["Romance interativo", "Mundo fantástico", "Personagens carismáticos", "Múltiplas escolhas"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 6GB RAM, GTX 750",
      recommended: "Windows 10, Intel i5-7500, 12GB RAM, GTX 1050"
    },
    screenshots: [game8, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/iNF5GQXDvz8"
  },
  {
    id: "13",
    title: "Assassin's Creed: Valhalla",
    price: "R$ 99,99",
    originalPrice: "R$ 149,99",
    discount: "33%",
    rating: 5,
    image: game3,
    trailerImage: game7,
    featured: true,
    category: "action",
    description: "Torne-se um lendário Viking e lidere seu clã através das terras hostis da Inglaterra do século IX.",
    features: ["Mundo aberto Viking", "Combate brutal", "Construção de assentamentos", "Narrativa épica"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-7700HQ, 16GB RAM, GTX 1060"
    },
    screenshots: [game3, game1, game2, game4],
    trailer: "https://www.youtube.com/embed/ssrNcwxALS4"
  },
  {
    id: "14",
    title: "FIFA 24",
    price: "R$ 199,99",
    rating: 4,
    image: game4,
    trailerImage: game8,
    category: "esports",
    description: "O jogo de futebol mais realista já criado, com HyperMotion Technology e jogabilidade autêntica.",
    features: ["Ultimate Team", "Modo Carreira", "Volta Football", "Pro Clubs"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600K, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, GTX 1660"
    },
    screenshots: [game4, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/o1igaMv46SY"
  },
  {
    id: "15",
    title: "Red Dead Redemption 2",
    price: "R$ 149,99",
    originalPrice: "R$ 199,99",
    discount: "25%",
    rating: 5,
    image: game5,
    trailerImage: game1,
    featured: true,
    category: "adventure",
    description: "Viva a vida de um fora da lei no coração da América. Sobreviva, lute e prospere no mundo selvagem do oeste.",
    features: ["Mundo aberto imenso", "Física realista", "História cinematográfica", "Online multiplayer"],
    requirements: {
      minimum: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 770",
      recommended: "Windows 10, Intel i7-4770K, 12GB RAM, GTX 1060"
    },
    screenshots: [game5, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/gmA6MrX81z4"
  },
  {
    id: "16",
    title: "Call of Duty: Modern Warfare III",
    price: "R$ 299,99",
    rating: 4,
    image: game6,
    trailerImage: game2,
    featured: true,
    category: "action",
    description: "A mais nova entrada na icônica série Modern Warfare com campanha épica e multijogador competitivo.",
    features: ["Campanha cinematográfica", "Multijogador competitivo", "Modo Zombies", "Cross-platform"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600K, 8GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, RTX 3060"
    },
    screenshots: [game6, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/mGPy1IMBBQw"
  },
  {
    id: "17",
    title: "Baldur's Gate 3",
    price: "R$ 199,99",
    rating: 5,
    image: game7,
    trailerImage: game3,
    category: "rpg",
    description: "O RPG definitivo baseado em D&D. Reúna seu grupo e retorne aos Reinos Esquecidos em uma aventura épica.",
    features: ["D&D autêntico", "Co-op para 4 jogadores", "Narrativa ramificada", "Combate tático por turnos"],
    requirements: {
      minimum: "Windows 10, Intel i5-4690, 8GB RAM, GTX 970",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game7, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/1T22wNvoNiU"
  },
  {
    id: "18",
    title: "Elden Ring",
    price: "R$ 179,99",
    originalPrice: "R$ 249,99",
    discount: "28%",
    rating: 5,
    image: game8,
    trailerImage: game4,
    featured: true,
    category: "rpg",
    description: "Levante-se, Maculado, e seja guiado pela graça para brandir o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias.",
    features: ["Mundo aberto de fantasia sombria", "Combate souls-like", "Narrativa de George R.R. Martin", "Exploração épica"],
    requirements: {
      minimum: "Windows 10, Intel i5-8400, 12GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game8, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0"
  },
  {
    id: "19",
    title: "Apex Legends",
    price: "Free to Play",
    rating: 4,
    image: game1,
    trailerImage: game5,
    category: "esports",
    description: "Battle Royale competitivo com heróis únicos, cada um com habilidades especiais e estratégias táticas.",
    features: ["Battle Royale gratuito", "Heróis únicos", "Competitivo ranqueado", "Squads de 3 jogadores"],
    requirements: {
      minimum: "Windows 7, Intel i5-3570K, 6GB RAM, GTX 650",
      recommended: "Windows 10, Intel i5-8600K, 8GB RAM, GTX 970"
    },
    screenshots: [game1, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/UMJb_mkqynU"
  },
  {
    id: "20",
    title: "Stardew Valley",
    price: "R$ 24,99",
    rating: 5,
    image: game2,
    trailerImage: game6,
    category: "adventure",
    description: "Herde a fazenda do seu avô e transforme terrenos selvagens em uma fazenda próspera.",
    features: ["Farming relaxante", "Relacionamentos", "Exploração de cavernas", "Co-op multiplayer"],
    requirements: {
      minimum: "Windows Vista, Intel Core 2 Duo, 2GB RAM, Integrada",
      recommended: "Windows 10, Intel i3-6100, 4GB RAM, GTX 750"
    },
    screenshots: [game2, game1, game3, game4],
    trailer: "https://www.youtube.com/embed/ot7uXNQskhs"
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
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
    title: "Gran Turismo 7",
    price: "R$ 249,99",
    originalPrice: "R$ 299,99",
    discount: "17%",
    rating: 5,
    image: game1,
    trailerImage: game2,
    featured: true,
    category: "action",
    description: "Gran Turismo 7 une os melhores recursos dos simuladores de corrida da série. Seja piloto de corrida, tuning expert ou designer de livery - encontre o seu caminho com três modos de jogo distintos.",
    features: ["Mais de 400 carros", "Fotorrealismo impressionante", "Modo Campanha GT", "Multiplayer competitivo"],
    requirements: {
      minimum: "PlayStation 4, 100GB de espaço",
      recommended: "PlayStation 5, 100GB de espaço, SSD"
    },
    screenshots: [game1, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/1tBUsXIkARQ"
  },
  {
    id: "2",
    title: "The Witcher 3: Wild Hunt",
    price: "R$ 59,99",
    originalPrice: "R$ 99,99",
    discount: "40%",
    rating: 5,
    image: game2,
    trailerImage: game3,
    category: "rpg",
    description: "Você é Geralt de Rívia, caçador de monstros mercenário. Diante de você está uma guerra devastada, um monstro que só você pode parar.",
    features: ["Mundo aberto gigantesco", "Mais de 100 horas de gameplay", "Escolhas que importam", "16 DLCs gratuitos"],
    requirements: {
      minimum: "Windows 7, Intel i5-2500K, 6GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-3770, 8GB RAM, GTX 770"
    },
    screenshots: [game2, game1, game3, game4],
    trailer: "https://www.youtube.com/embed/c0i88t0Kacs"
  },
  {
    id: "3",
    title: "Red Dead Redemption 2",
    price: "R$ 149,99",
    originalPrice: "R$ 249,99",
    discount: "40%",
    rating: 5,
    image: game3,
    trailerImage: game4,
    featured: true,
    category: "adventure",
    description: "A América, 1899. Arthur Morgan e a gangue Van der Linde são bandidos em fuga. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos.",
    features: ["Mundo aberto épico", "História cinematográfica", "Red Dead Online", "Gráficos impressionantes"],
    requirements: {
      minimum: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 770",
      recommended: "Windows 10, Intel i7-4770K, 12GB RAM, GTX 1060"
    },
    screenshots: [game3, game2, game1, game4],
    trailer: "https://www.youtube.com/embed/gmA6MrX81z4"
  },
  {
    id: "4",
    title: "Grand Theft Auto V",
    price: "R$ 99,99",
    originalPrice: "R$ 139,99",
    discount: "29%",
    rating: 5,
    image: game4,
    trailerImage: game5,
    featured: true,
    category: "action",
    description: "Quando um jovem bandido, um assaltante de bancos aposentado e um psicopata aterrorizante se veem envolvidos com os criminosos mais assustadores do submundo, o governo dos EUA e a indústria do entretenimento, eles devem realizar uma série de assaltos perigosos para sobreviver.",
    features: ["Mundo aberto de Los Santos", "3 protagonistas jogáveis", "GTA Online", "Gráficos aprimorados"],
    requirements: {
      minimum: "Windows 10, Intel i5-3470, 8GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-4770, 8GB RAM, GTX 1060"
    },
    screenshots: [game4, game3, game2, game1],
    trailer: "https://www.youtube.com/embed/QkkoHAzjnUs"
  },
  {
    id: "5",
    title: "Elden Ring",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 5,
    image: game5,
    trailerImage: game6,
    featured: true,
    category: "rpg",
    description: "Levante-se, Maculado, e seja guiado pela graça para brandir o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias. Um RPG de ação e fantasia sombria da FromSoftware e George R.R. Martin.",
    features: ["Mundo aberto vasto", "Combate souls-like", "Narrativa de George R.R. Martin", "Exploração épica"],
    requirements: {
      minimum: "Windows 10, Intel i5-8400, 12GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game5, game4, game3, game2],
    trailer: "https://www.youtube.com/embed/E3Huy2cdih0"
  },
  {
    id: "6",
    title: "God of War Ragnarök",
    price: "R$ 299,99",
    rating: 5,
    image: game6,
    trailerImage: game7,
    featured: true,
    category: "action",
    description: "Embarque numa jornada épica e comovente enquanto Kratos e Atreus lutam entre o desejo de se manterem unidos e a necessidade de se separarem. Em meio a ameaças dos Nove Reinos, eles exploram paisagens míticas impressionantes.",
    features: ["Combate brutal", "História emocionante", "Exploração dos 9 reinos", "Gráficos de última geração"],
    requirements: {
      minimum: "PlayStation 4, 100GB de espaço",
      recommended: "PlayStation 5, 100GB de espaço, SSD"
    },
    screenshots: [game6, game5, game4, game3],
    trailer: "https://www.youtube.com/embed/hfJ4Km46A-0"
  },
  {
    id: "7",
    title: "Hogwarts Legacy",
    price: "R$ 249,99",
    originalPrice: "R$ 299,99",
    discount: "17%",
    rating: 5,
    image: game7,
    trailerImage: game8,
    featured: true,
    category: "adventure",
    description: "Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado no universo dos livros de Harry Potter. Embarque numa jornada através de locais novos e conhecidos enquanto você explora e descobre criaturas fantásticas.",
    features: ["Mundo aberto de Hogwarts", "Sistema de magia profundo", "Crie seu bruxo", "História original"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600, 16GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1080 Ti"
    },
    screenshots: [game7, game6, game5, game4],
    trailer: "https://www.youtube.com/embed/1O6Qstncpnc"
  },
  {
    id: "8",
    title: "The Last of Us Part II",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 5,
    image: game8,
    trailerImage: game1,
    category: "action",
    description: "Cinco anos após a jornada perigosa pelos Estados Unidos pós-pandêmicos, Ellie e Joel se estabeleceram em Jackson, Wyoming. Viver em uma comunidade próspera de sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça constante dos infectados e de outros sobreviventes mais desesperados.",
    features: ["Narrativa emocionante", "Gráficos fotorrealistas", "Gameplay intenso", "Modo multiplayer"],
    requirements: {
      minimum: "PlayStation 4, 100GB de espaço",
      recommended: "PlayStation 5, 100GB de espaço"
    },
    screenshots: [game8, game7, game6, game5],
    trailer: "https://www.youtube.com/embed/II5UsqP2JAk"
  }
];

export const getGamesByCategory = (category: string): Game[] => {
  if (category === "all") return games;
  return games.filter(game => game.category === category);
};

export const searchGames = (query: string): Game[] => {
  const lowercaseQuery = query.toLowerCase();
  return games.filter(
    game =>
      game.title.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const sortGames = (games: Game[], sortBy: string): Game[] => {
  const sortedGames = [...games];
  
  switch (sortBy) {
    case "price-low":
      return sortedGames.sort((a, b) => {
        const priceA = a.price === "Free to Play" ? 0 : parseFloat(a.price.replace("R$ ", "").replace(",", "."));
        const priceB = b.price === "Free to Play" ? 0 : parseFloat(b.price.replace("R$ ", "").replace(",", "."));
        return priceA - priceB;
      });
    case "price-high":
      return sortedGames.sort((a, b) => {
        const priceA = a.price === "Free to Play" ? 0 : parseFloat(a.price.replace("R$ ", "").replace(",", "."));
        const priceB = b.price === "Free to Play" ? 0 : parseFloat(b.price.replace("R$ ", "").replace(",", "."));
        return priceB - priceA;
      });
    case "rating":
      return sortedGames.sort((a, b) => b.rating - a.rating);
    case "newest":
      return sortedGames.reverse();
    case "popular":
      return sortedGames.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      });
    default:
      return sortedGames;
  }
};

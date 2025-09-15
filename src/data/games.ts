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
  },
  {
    id: "21",
    title: "Silent Hill: Nightmare Returns",
    price: "R$ 89,99",
    originalPrice: "R$ 119,99", 
    discount: "25%",
    rating: 5,
    image: game1,
    trailerImage: game7,
    featured: true,
    category: "horror",
    description: "Retorne à cidade amaldiçoada de Silent Hill onde pesadelos se tornam realidade e o terror psicológico aguarda.",
    features: ["Terror psicológico", "Atmosfera sinistra", "Múltiplos finais", "Puzzles complexos"],
    requirements: {
      minimum: "Windows 10, Intel i5-6500, 8GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, GTX 1660"
    },
    screenshots: [game1, game7, game8, game3],
    trailer: "https://www.youtube.com/embed/Zb4dBhpkqjE"
  },
  {
    id: "22", 
    title: "Dead Space: Remake",
    price: "R$ 179,99",
    originalPrice: "R$ 249,99",
    discount: "28%",
    rating: 5,
    image: game7,
    trailerImage: game4,
    category: "horror",
    description: "Sobreviva ao horror no espaço profundo enquanto luta contra criaturas grotescas na estação espacial Ishimura.",
    features: ["Horror espacial", "Desmembramento estratégico", "Gráficos de última geração", "Áudio 3D"],
    requirements: {
      minimum: "Windows 10, Intel i5-8400, 12GB RAM, GTX 1060", 
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, RTX 2070"
    },
    screenshots: [game7, game4, game1, game8],
    trailer: "https://www.youtube.com/embed/sODGuG8bFRg"
  },
  {
    id: "23",
    title: "Resident Evil 4: Remake", 
    price: "R$ 199,99",
    rating: 5,
    image: game8,
    trailerImage: game1,
    featured: true,
    category: "horror",
    description: "Leon Kennedy enfrenta horrores inéditos em uma missão para salvar a filha do presidente em uma vila rural infectada.",
    features: ["Survival horror clássico", "Combate aprimorado", "Gráficos fotorrealistas", "Modo Mercenários"],
    requirements: {
      minimum: "Windows 10, Intel i5-7500, 12GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, RTX 2060"
    },
    screenshots: [game8, game1, game7, game4],
    trailer: "https://www.youtube.com/embed/E69tKrfEQag"
  },
  {
    id: "24",
    title: "Outlast Trinity",
    price: "R$ 49,99",
    originalPrice: "R$ 79,99",
    discount: "38%",
    rating: 4,
    image: game4,
    trailerImage: game8,
    category: "horror",
    description: "Três jogos de terror psicológico onde você é um jornalista investigativo enfrentando os piores pesadelos.",
    features: ["Terror first-person", "Sem combate - apenas fuga", "Documentação em tempo real", "Atmosfera claustrofóbica"],
    requirements: {
      minimum: "Windows 7, Intel i3-4160, 4GB RAM, GTX 750",
      recommended: "Windows 10, Intel i5-6600, 8GB RAM, GTX 1050"
    },
    screenshots: [game4, game8, game7, game1],
    trailer: "https://www.youtube.com/embed/MOLM6rYhIf0"
  },
  {
    id: "25",
    title: "Phasmophobia: Deluxe Edition",
    price: "R$ 34,99",
    rating: 4,
    image: game3,
    trailerImage: game7,
    category: "horror", 
    description: "Investigue atividades paranormais com seus amigos neste jogo cooperativo de caça aos fantasmas.",
    features: ["Co-op até 4 jogadores", "Caça aos fantasmas", "Comunicação por voz", "Equipamentos de investigação"],
    requirements: {
      minimum: "Windows 10, Intel i5-4590, 8GB RAM, GTX 970",
      recommended: "Windows 10, Intel i5-8400, 16GB RAM, GTX 1060"
    },
    screenshots: [game3, game7, game8, game4],
    trailer: "https://www.youtube.com/embed/MANyxCrqUs4"
  },
  {
    id: "26",
    title: "Romance of the Three Kingdoms",
    price: "R$ 159,99", 
    originalPrice: "R$ 199,99",
    discount: "20%",
    rating: 5,
    image: game5,
    trailerImage: game2,
    category: "romance",
    description: "Uma saga épica de amor e guerra na antiga China, onde escolhas românticas moldam o destino de reinos inteiros.",
    features: ["Romance histórico", "Múltiplas rotas", "Sistema de relacionamentos", "Eventos sazonais"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 6GB RAM, GTX 750",
      recommended: "Windows 10, Intel i5-7400, 12GB RAM, GTX 1050"
    },
    screenshots: [game5, game2, game6, game8],
    trailer: "https://www.youtube.com/embed/ZaESkWmPqjk"
  },
  {
    id: "27",
    title: "Doki Doki Literature Club Plus",
    price: "R$ 44,99",
    rating: 4,
    image: game6,
    trailerImage: game8,
    category: "romance",
    description: "Uma visual novel aparentemente inocente que subverte expectativas em uma experiência psicológica única.",
    features: ["Visual novel inovadora", "Meta-narrativa", "Múltiplos finais", "Experiência imersiva"],
    requirements: {
      minimum: "Windows 7, Intel i3-3220, 4GB RAM, Integrada",
      recommended: "Windows 10, Intel i5-4590, 8GB RAM, GTX 750"
    },
    screenshots: [game6, game8, game5, game2],
    trailer: "https://www.youtube.com/embed/WUVaB_663M4"
  },
  {
    id: "28", 
    title: "Catherine: Full Body",
    price: "R$ 89,99",
    originalPrice: "R$ 129,99",
    discount: "31%",
    rating: 5,
    image: game2,
    trailerImage: game5,
    featured: true,
    category: "romance",
    description: "Um thriller psicológico sobre relacionamentos adultos, infidelidade e consequências das escolhas amorosas.",
    features: ["Narrativa madura", "Puzzles únicos", "Múltiplos finais", "Escolhas morais"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 6GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-6700, 8GB RAM, GTX 1050"
    },
    screenshots: [game2, game5, game6, game8],
    trailer: "https://www.youtube.com/embed/Eg5kbu6_8xI"
  },
  {
    id: "29",
    title: "Persona 5 Royal",
    price: "R$ 149,99",
    rating: 5,
    image: game8,
    trailerImage: game6,
    category: "romance",
    description: "Viva uma vida dupla como estudante e Ladrão Fantasma, desenvolvendo relacionamentos profundos em Tóquio moderno.",
    features: ["Simulação de vida", "Sistema de relacionamentos", "Combate estilizado", "Música incrível"],
    requirements: {
      minimum: "Windows 10, Intel i7-4790, 8GB RAM, GTX 650 Ti",
      recommended: "Windows 10, Intel i7-4790, 8GB RAM, GTX 1060"
    },
    screenshots: [game8, game6, game2, game5],
    trailer: "https://www.youtube.com/embed/Ec8VrjjMLjA"
  },
  {
    id: "30",
    title: "Hatoful Boyfriend: Collector's Edition",
    price: "R$ 24,99", 
    originalPrice: "R$ 39,99",
    discount: "37%",
    rating: 4,
    image: game1,
    trailerImage: game3,
    category: "romance",
    description: "Uma visual novel excêntrica onde você namora pombos em uma escola para aves. Bizarro mas surpreendentemente tocante.",
    features: ["Romance bizarro", "Humor único", "Múltiplas rotas", "Arte charmosa"],
    requirements: {
      minimum: "Windows XP, Intel Pentium 4, 512MB RAM, Integrada",
      recommended: "Windows 10, Intel i3-2100, 2GB RAM, GTX 550"
    },
    screenshots: [game1, game3, game6, game8],
    trailer: "https://www.youtube.com/embed/7K8Y6S8PKcU"
  },
  {
    id: "31",
    title: "Grand Theft Auto V: Premium Edition",
    price: "R$ 129,99",
    originalPrice: "R$ 199,99",
    discount: "35%",
    rating: 5,
    image: game3,
    trailerImage: game1,
    featured: true,
    category: "action",
    description: "O jogo de mundo aberto definitivo com três protagonistas únicos em Los Santos, a cidade do crime e oportunidades.",
    features: ["Mundo aberto massivo", "Três personagens", "GTA Online", "Mods suportados"],
    requirements: {
      minimum: "Windows 8, Intel i5-3470, 8GB RAM, GTX 660",
      recommended: "Windows 10, Intel i7-4770K, 16GB RAM, GTX 1060"
    },
    screenshots: [game3, game1, game6, game4],
    trailer: "https://www.youtube.com/embed/QkkoHAzjnUs"
  },
  {
    id: "32",
    title: "Doom Eternal",
    price: "R$ 79,99",
    originalPrice: "R$ 119,99", 
    discount: "33%",
    rating: 5,
    image: game4,
    trailerImage: game7,
    category: "action",
    description: "O FPS mais intenso já criado. Extermine demônios com armas devastadoras em combate frenético e brutal.",
    features: ["Combate ultrarrápido", "Arsenal devastador", "Campanha épica", "Multiplayer competitivo"],
    requirements: {
      minimum: "Windows 10, Intel i5-7600K, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, RTX 2060"
    },
    screenshots: [game4, game7, game3, game1],
    trailer: "https://www.youtube.com/embed/FoNdJUKlHHM"
  },
  {
    id: "33",
    title: "Spider-Man: Miles Morales",
    price: "R$ 199,99",
    rating: 5,
    image: game7,
    trailerImage: game4,
    category: "action",
    description: "Torne-se o novo Spider-Man enquanto Miles Morales descobre poderes explosivos que o diferenciam de Peter Parker.",
    features: ["Poderes bioelétricos", "Nova York detalhada", "História emocionante", "Combate acrobático"],
    requirements: {
      minimum: "Windows 10, Intel i3-4160, 8GB RAM, GTX 950",
      recommended: "Windows 10, Intel i5-4670, 16GB RAM, GTX 1060"
    },
    screenshots: [game7, game4, game3, game1],
    trailer: "https://www.youtube.com/embed/T03KudWDMJo"
  },
  {
    id: "34",
    title: "Hades: Game of the Year Edition", 
    price: "R$ 59,99",
    originalPrice: "R$ 89,99",
    discount: "33%",
    rating: 5,
    image: game1,
    trailerImage: game8,
    category: "action",
    description: "Escape do submundo como Zagreus neste roguelike de ação com narrativa excepcional e combate viciante.",
    features: ["Roguelike perfeito", "Narrativa contínua", "Arte deslumbrante", "Progressão satisfatória"],
    requirements: {
      minimum: "Windows 7, Intel Core 2 Duo, 4GB RAM, GTX 650",
      recommended: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 950"
    },
    screenshots: [game1, game8, game7, game4],
    trailer: "https://www.youtube.com/embed/91t0ha9x0AE"
  },
  {
    id: "35",
    title: "Counter-Strike 2",
    price: "Free to Play",
    rating: 5,
    image: game8,
    trailerImage: game1,
    featured: true,
    category: "esports",
    description: "A evolução do FPS tático mais competitivo do mundo, reconstruído na Source 2 com gráficos e física aprimorados.",
    features: ["Matchmaking ranqueado", "Novos mapas", "Physics aprimorada", "Economia de skins"],
    requirements: {
      minimum: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game8, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/ZYbtOSwdCRE"
  },
  {
    id: "36",
    title: "League of Legends: Wild Rift", 
    price: "Free to Play",
    rating: 4,
    image: game2,
    trailerImage: game5,
    category: "esports",
    description: "O MOBA mais jogado do mundo agora otimizado para todas as plataformas com controles intuitivos.",
    features: ["MOBA clássico", "Cross-platform", "Campeões icônicos", "Ranked competitivo"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 4GB RAM, GTX 650",
      recommended: "Windows 10, Intel i5-7400, 8GB RAM, GTX 1050"
    },
    screenshots: [game2, game5, game8, game1],
    trailer: "https://www.youtube.com/embed/M71DqvyROSk"
  },
  {
    id: "37",
    title: "Rocket League: Ultimate Edition",
    price: "Free to Play",
    rating: 5,
    image: game5,
    trailerImage: game2,
    category: "esports",
    description: "Futebol com carros em arenas futuristas. Fácil de aprender, impossível de dominar completamente.",
    features: ["Física única", "Cross-platform", "Temporadas competitivas", "Customização de carros"],
    requirements: {
      minimum: "Windows 7, Intel i3-6100, 4GB RAM, GTX 660",
      recommended: "Windows 10, Intel i5-7400, 8GB RAM, GTX 1050"
    },
    screenshots: [game5, game2, game8, game1],
    trailer: "https://www.youtube.com/embed/Vawwy2eu5sA"
  },
  {
    id: "38",
    title: "Valorant: Champions Bundle",
    price: "Free to Play",
    rating: 4,
    image: game1,
    trailerImage: game6,
    category: "esports",
    description: "FPS tático 5v5 onde habilidades precisas se encontram com estratégia de equipe em arenas competitivas.",
    features: ["Tático 5v5", "Agentes únicos", "Anti-cheat robusto", "Competitivo ranqueado"],
    requirements: {
      minimum: "Windows 7, Intel i3-4150, 4GB RAM, GTX 730",
      recommended: "Windows 10, Intel i5-4460, 8GB RAM, GTX 1050 Ti"
    },
    screenshots: [game1, game6, game2, game5],
    trailer: "https://www.youtube.com/embed/e_E9W2vsRbQ"
  },
  {
    id: "39",
    title: "Overwatch 2: Legendary Edition",
    price: "Free to Play",
    rating: 4,
    image: game6,
    trailerImage: game1,
    category: "esports",
    description: "O shooter de heróis definitivo com personagens únicos, cada um com habilidades especiais e papéis táticos.",
    features: ["Heroes únicos", "Modos PvP e PvE", "Eventos sazonais", "Sistema de classificação"],
    requirements: {
      minimum: "Windows 10, Intel i3-6100, 6GB RAM, GTX 1050",
      recommended: "Windows 10, Intel i7-6700K, 8GB RAM, GTX 1060"
    },
    screenshots: [game6, game1, game2, game5],
    trailer: "https://www.youtube.com/embed/GKXS_YA9s7E"
  },
  {
    id: "40",
    title: "The Legend of Zelda: Breath of the Wild",
    price: "R$ 299,99",
    rating: 5,
    image: game3,
    trailerImage: game7,
    featured: true,
    category: "adventure",
    description: "Explore Hyrule como nunca antes nesta aventura épica que redefine a franquia Zelda com liberdade total.",
    features: ["Mundo aberto revolucionário", "Física interativa", "Exploração livre", "Arte cel-shading"],
    requirements: {
      minimum: "Windows 10, Intel i5-4430, 8GB RAM, GTX 750 Ti",
      recommended: "Windows 10, Intel i7-6700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game3, game7, game1, game4],
    trailer: "https://www.youtube.com/embed/zw47_q9wbBE"
  },
  {
    id: "41",
    title: "God of War: Ragnarök",
    price: "R$ 299,99",
    rating: 5,
    image: game7,
    trailerImage: game3,
    category: "adventure",
    description: "Kratos e Atreus embarcam em uma jornada épica pela mitologia nórdica enfrentando deuses e monstros.",
    features: ["Narrativa cinematográfica", "Combate visceral", "Relacionamento pai-filho", "Mitologia nórdica"],
    requirements: {
      minimum: "Windows 10, Intel i5-8400, 8GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, RTX 2070"
    },
    screenshots: [game7, game3, game1, game4],
    trailer: "https://www.youtube.com/embed/EE-4GvjKcfs"
  },
  {
    id: "42",
    title: "Horizon Zero Dawn: Complete Edition",
    price: "R$ 149,99",
    originalPrice: "R$ 199,99",
    discount: "25%",
    rating: 5,
    image: game4,
    trailerImage: game8,
    category: "adventure",
    description: "Caçe máquinas robóticas em um mundo pós-apocalíptico exuberante como Aloy, uma hábil caçadora.",
    features: ["Mundo pós-apocalíptico", "Caça a robôs", "História envolvente", "Exploração épica"],
    requirements: {
      minimum: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 780",
      recommended: "Windows 10, Intel i7-4770K, 16GB RAM, GTX 1060"
    },
    screenshots: [game4, game8, game7, game3],
    trailer: "https://www.youtube.com/embed/wzx96gYA8ek"
  },
  {
    id: "43",
    title: "Uncharted: Legacy Collection",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 5,
    image: game8,
    trailerImage: game4,
    category: "adventure",
    description: "A coleção completa das aventuras de Nathan Drake em busca de tesouros perdidos ao redor do mundo.",
    features: ["Quatro jogos completos", "Aventura cinematográfica", "Puzzles arqueológicos", "Ação de cinema"],
    requirements: {
      minimum: "Windows 10, Intel i5-4430, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-6700K, 16GB RAM, GTX 1070"
    },
    screenshots: [game8, game4, game7, game3],
    trailer: "https://www.youtube.com/embed/5kVUL1-5TgQ"
  },
  {
    id: "44",
    title: "Subnautica: Below Zero",
    price: "R$ 89,99",
    originalPrice: "R$ 119,99",
    discount: "25%",
    rating: 4,
    image: game1,
    trailerImage: game5,
    category: "adventure",
    description: "Mergulhe em um oceano alienígena congelado e descubra criaturas fantásticas neste survival aquático.",
    features: ["Exploração submarina", "Survival crafting", "Criaturas alienígenas", "História misteriosa"],
    requirements: {
      minimum: "Windows 10, Intel i3-6300, 8GB RAM, GTX 550 Ti",
      recommended: "Windows 10, Intel i7-6700K, 8GB RAM, GTX 1050 Ti"
    },
    screenshots: [game1, game5, game8, game4],
    trailer: "https://www.youtube.com/embed/BtP8r8nRfko"
  },
  {
    id: "45",
    title: "Final Fantasy XIV: Complete Edition",
    price: "R$ 159,99",
    originalPrice: "R$ 219,99",
    discount: "27%",
    rating: 5,
    image: game5,
    trailerImage: game1,
    featured: true,
    category: "rpg",
    description: "O MMORPG definitivo com a história mais aclamada da franquia Final Fantasy e milhões de jogadores.",
    features: ["MMORPG premium", "História épica", "Classes múltiplas", "Conteúdo cooperativo"],
    requirements: {
      minimum: "Windows 10, Intel i5-2400, 4GB RAM, GTX 750",
      recommended: "Windows 10, Intel i7-6700, 8GB RAM, GTX 970"
    },
    screenshots: [game5, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/4tyuIh12_HU"
  },
  {
    id: "46",
    title: "Mass Effect: Legendary Edition",
    price: "R$ 179,99", 
    originalPrice: "R$ 229,99",
    discount: "22%",
    rating: 5,
    image: game2,
    trailerImage: game6,
    category: "rpg",
    description: "A trilogia completa de Shepard remasterizada com gráficos aprimorados e todas as DLCs incluídas.",
    features: ["Trilogia completa", "Gráficos aprimorados", "Todas as DLCs", "Escolhas épicas"],
    requirements: {
      minimum: "Windows 10, Intel i5-3570K, 8GB RAM, GTX 750 Ti",
      recommended: "Windows 10, Intel i7-7700HQ, 16GB RAM, GTX 1060"
    },
    screenshots: [game2, game6, game5, game1],
    trailer: "https://www.youtube.com/embed/n8i53TtQ6IQ"
  },
  {
    id: "47",
    title: "Divinity: Original Sin 2",
    price: "R$ 129,99",
    originalPrice: "R$ 159,99", 
    discount: "19%",
    rating: 5,
    image: game6,
    trailerImage: game2,
    category: "rpg",
    description: "O RPG tactical definitivo onde cada escolha importa e a criatividade no combate é recompensada.",
    features: ["Co-op para 4 jogadores", "Liberdade total", "Narrativa profunda", "Combate tático"],
    requirements: {
      minimum: "Windows 7, Intel i5-2400, 4GB RAM, GTX 550",
      recommended: "Windows 10, Intel i7-6700K, 8GB RAM, GTX 970"
    },
    screenshots: [game6, game2, game5, game1],
    trailer: "https://www.youtube.com/embed/YQzUcYnZyV0"
  },
  {
    id: "48",
    title: "Disco Elysium: Final Cut",
    price: "R$ 99,99",
    originalPrice: "R$ 139,99",
    discount: "29%", 
    rating: 5,
    image: game1,
    trailerImage: game7,
    category: "rpg",
    description: "Um RPG revolucionário sobre um detetive com amnésia resolvendo um caso enquanto reconstrói sua identidade.",
    features: ["Narrativa revolucionária", "Sem combate tradicional", "Diálogos profundos", "Arte única"],
    requirements: {
      minimum: "Windows 7, Intel i5-7500, 8GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700, 8GB RAM, GTX 1060"
    },
    screenshots: [game1, game7, game6, game2],
    trailer: "https://www.youtube.com/embed/URMR-znfСyo"
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
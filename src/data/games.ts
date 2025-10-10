import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";
import game5 from "@/assets/game-5.jpg";
import game6 from "@/assets/game-6.jpg";
import game7 from "@/assets/game-7.jpg";
import game8 from "@/assets/game-8.jpg";
import game9 from "@/assets/game-9.jpg";
import game10 from "@/assets/game-10.jpg";
import game11 from "@/assets/game-11.jpg";
import game12 from "@/assets/game-12.jpg";
import game13 from "@/assets/game-13.jpg";
import game14 from "@/assets/game-14.jpg";
import game15 from "@/assets/game-15.jpg";
import game16 from "@/assets/game-16.jpg";
import game17 from "@/assets/game-17.jpg";
import game18 from "@/assets/game-18.jpg";
import game19 from "@/assets/game-19.jpg";
import game20 from "@/assets/game-20.jpg";
import game21 from "@/assets/game-21.jpg";
import game22 from "@/assets/game-22.jpg";
import game23 from "@/assets/game-23.jpg";
import game24 from "@/assets/game-24.jpg";
import game25 from "@/assets/game-25.jpg";
import game26 from "@/assets/game-26.jpg";
import game27 from "@/assets/game-27.jpg";
import game28 from "@/assets/game-28.jpg";
import game29 from "@/assets/game-29.jpg";
import game30 from "@/assets/game-30.jpg";
import game31 from "@/assets/game-31.jpg";
import game32 from "@/assets/game-32.jpg";

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
  },
  {
    id: "9",
    title: "Marvel's Spider-Man 2",
    price: "R$ 299,99",
    rating: 5,
    image: game9,
    trailerImage: game1,
    featured: true,
    category: "action",
    description: "Spider-Men Peter Parker e Miles Morales enfrentam o teste definitivo de força dentro e fora da máscara enquanto lutam para salvar a cidade, uns aos outros e aqueles que amam, da monstruosa Venom e da nova ameaça simbionte.",
    features: ["Dois Spider-Men jogáveis", "Nova York de mundo aberto", "Trajes simbiontes", "Combate aprimorado"],
    requirements: {
      minimum: "PlayStation 5, 100GB de espaço",
      recommended: "PlayStation 5, 100GB de espaço, SSD"
    },
    screenshots: [game9, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/nq1M_Wc4FIc"
  },
  {
    id: "10",
    title: "Final Fantasy VII Rebirth",
    price: "R$ 349,99",
    rating: 5,
    image: game10,
    trailerImage: game2,
    featured: true,
    category: "rpg",
    description: "Final Fantasy VII Rebirth é a aguardada sequência de Final Fantasy VII Remake, continuando a jornada épica de Cloud e seus companheiros enquanto exploram um vasto mundo além de Midgar.",
    features: ["Mundo aberto massivo", "Sistema de combate dinâmico", "História épica", "Gráficos de última geração"],
    requirements: {
      minimum: "PlayStation 5, 150GB de espaço",
      recommended: "PlayStation 5, 150GB de espaço, SSD"
    },
    screenshots: [game10, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/nAJbzbqQsJY"
  },
  {
    id: "11",
    title: "Tekken 8",
    price: "R$ 299,99",
    originalPrice: "R$ 349,99",
    discount: "14%",
    rating: 5,
    image: game11,
    trailerImage: game3,
    category: "action",
    description: "Tekken 8 traz a lendária franquia de luta para uma nova era com gráficos impressionantes e um sistema de combate renovado. Descubra o destino da família Mishima neste novo capítulo emocionante.",
    features: ["32 personagens", "Modo história cinemático", "Multiplayer online", "Sistema Heat revolucionário"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600K, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-7700K, 16GB RAM, RTX 2070"
    },
    screenshots: [game11, game3, game4, game5],
    trailer: "https://www.youtube.com/embed/Kl5RCGpZ5FM"
  },
  {
    id: "12",
    title: "Helldivers 2",
    price: "R$ 159,99",
    rating: 5,
    image: game12,
    trailerImage: game4,
    category: "action",
    description: "Helldivers 2 é um shooter cooperativo de terceira pessoa onde você e seu esquadrão lutam em uma guerra galáctica pela liberdade e democracia. Trabalhe em equipe para completar missões desafiadoras em planetas hostis.",
    features: ["Co-op para 4 jogadores", "Mundos procedurais", "Arsenal massivo", "Ação frenética"],
    requirements: {
      minimum: "Windows 10, Intel i7-4790K, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, RTX 2060"
    },
    screenshots: [game12, game4, game5, game6],
    trailer: "https://www.youtube.com/embed/pzBUg861-Ts"
  },
  {
    id: "13",
    title: "Dragon Ball: Sparking! ZERO",
    price: "R$ 299,99",
    originalPrice: "R$ 349,99",
    discount: "14%",
    rating: 5,
    image: game13,
    trailerImage: game5,
    category: "action",
    description: "Dragon Ball: Sparking! ZERO traz de volta o lendário estilo de jogo de Budokai Tenkaichi em um novo capítulo. Batalhe com mais de 160 personagens em arenas 3D destruíveis com gráficos de última geração.",
    features: ["Mais de 160 personagens", "Batalhas épicas 3D", "Modo história extenso", "Transformações icônicas"],
    requirements: {
      minimum: "Windows 10, Intel i5-9600K, 8GB RAM, GTX 1660 Super",
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, RTX 2070 Super"
    },
    screenshots: [game13, game5, game6, game7],
    trailer: "https://www.youtube.com/embed/pRQWKAтериториtU"
  },
  {
    id: "14",
    title: "Resident Evil 4 Remake",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 5,
    image: game14,
    trailerImage: game6,
    category: "action",
    description: "O clássico de survival horror Resident Evil 4 foi reconstruído do zero com gráficos modernos e jogabilidade aprimorada. Siga Leon S. Kennedy em sua missão de resgatar a filha do presidente em uma vila europeia aterrorizante.",
    features: ["Gráficos fotorrealistas", "Jogabilidade modernizada", "Horror de sobrevivência intenso", "Inimigos reimaginados"],
    requirements: {
      minimum: "Windows 10, Intel i5-7500, 16GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, RTX 2060"
    },
    screenshots: [game14, game6, game7, game8],
    trailer: "https://www.youtube.com/embed/E69tKrfEQag"
  },
  {
    id: "15",
    title: "Cyberpunk 2077",
    price: "R$ 149,99",
    originalPrice: "R$ 249,99",
    discount: "40%",
    rating: 4,
    image: game15,
    trailerImage: game7,
    category: "rpg",
    description: "Cyberpunk 2077 é um RPG de ação em mundo aberto que se passa em Night City, uma metrópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário fora da lei em busca de um implante único que é a chave da imortalidade.",
    features: ["Mundo aberto gigante", "Personalização profunda", "História ramificada", "Combate dinâmico"],
    requirements: {
      minimum: "Windows 10, Intel i5-3570K, 8GB RAM, GTX 780",
      recommended: "Windows 10, Intel i7-4790, 12GB RAM, RTX 2060"
    },
    screenshots: [game15, game7, game8, game1],
    trailer: "https://www.youtube.com/embed/8X2kIfS6fb8"
  },
  {
    id: "16",
    title: "Assassin's Creed Valhalla",
    price: "R$ 179,99",
    originalPrice: "R$ 249,99",
    discount: "28%",
    rating: 4,
    image: game16,
    trailerImage: game8,
    category: "adventure",
    description: "Torne-se Eivor, um lendário guerreiro Viking em busca de glória. Explore um mundo aberto dinâmico e bonito contra o cenário brutal da Inglaterra na Idade das Trevas. Invada seus inimigos, expanda seu assentamento e construa seu poder político.",
    features: ["Combate viking brutal", "Mundo aberto massivo", "Personalização de assentamento", "Mitologia nórdica"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-7700, 8GB RAM, GTX 1080"
    },
    screenshots: [game16, game8, game1, game2],
    trailer: "https://www.youtube.com/embed/ssrNcwxALS4"
  },
  {
    id: "17",
    title: "Minecraft",
    price: "R$ 89,99",
    rating: 5,
    image: game17,
    trailerImage: game1,
    featured: true,
    category: "adventure",
    description: "Minecraft é um jogo de construção e aventura em um mundo aberto infinito. Explore, construa e sobreviva em um mundo gerado proceduralmente feito de blocos. Desde construir uma cabana simples até criar castelos imensos, as possibilidades são infinitas.",
    features: ["Criatividade infinita", "Modo sobrevivência e criativo", "Multiplayer online", "Mods e customização"],
    requirements: {
      minimum: "Windows 10, Intel i3-3210, 4GB RAM, Intel HD Graphics 4000",
      recommended: "Windows 10, Intel i5-4690, 8GB RAM, GTX 700"
    },
    screenshots: [game17, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/MmB9b5njVbA"
  },
  {
    id: "18",
    title: "Call of Duty: Modern Warfare III",
    price: "R$ 299,99",
    rating: 4,
    image: game18,
    trailerImage: game2,
    category: "action",
    description: "Na campanha de jogador único direta e de alto impacto de Call of Duty: Modern Warfare III, os jogadores se unem aos membros da Task Force 141 em uma série de missões de ação global de alta adrenaline.",
    features: ["Campanha cinematográfica", "Multiplayer competitivo", "Modo Warzone", "Gráficos de última geração"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600, 8GB RAM, GTX 960",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, RTX 3060 Ti"
    },
    screenshots: [game18, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/mWLiq-udVFA"
  },
  {
    id: "19",
    title: "Forza Horizon 5",
    price: "R$ 249,99",
    rating: 5,
    image: game19,
    trailerImage: game3,
    featured: true,
    category: "action",
    description: "Sua aventura Horizon está esperando! Explore os mundos vibrantes e em constante evolução nas paisagens do México com ação de direção ilimitada e divertida em centenas dos melhores carros do mundo.",
    features: ["Mais de 500 carros", "Mundo aberto do México", "Clima dinâmico", "Multiplayer online"],
    requirements: {
      minimum: "Windows 10, Intel i5-4460, 8GB RAM, GTX 970",
      recommended: "Windows 10, Intel i5-8400, 16GB RAM, RTX 3070"
    },
    screenshots: [game19, game3, game4, game5],
    trailer: "https://www.youtube.com/embed/FYH9n37B7Yw"
  },
  {
    id: "20",
    title: "Baldur's Gate 3",
    price: "R$ 199,99",
    rating: 5,
    image: game20,
    trailerImage: game4,
    featured: true,
    category: "rpg",
    description: "Reúna seu grupo e retorne aos Reinos Esquecidos em uma história de amizade e traição, sacrifício e sobrevivência, e a atração do poder absoluto. Forças misteriosas estão despertando dentro de você, tiradas de uma parasita de Imortal Mente que foi plantada em seu cérebro.",
    features: ["RPG baseado em D&D 5e", "Escolhas significativas", "Co-op para 4 jogadores", "Mais de 100 horas de conteúdo"],
    requirements: {
      minimum: "Windows 10, Intel i5-4690, 8GB RAM, GTX 970",
      recommended: "Windows 10, Intel i7-8700K, 16GB RAM, RTX 2060 Super"
    },
    screenshots: [game20, game4, game5, game6],
    trailer: "https://www.youtube.com/embed/OcP0WdH7rTs"
  },
  {
    id: "21",
    title: "Halo Infinite",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 4,
    image: game21,
    trailerImage: game5,
    category: "action",
    description: "Quando toda a esperança se perde e o destino da humanidade está em jogo, o Master Chief está pronto para enfrentar o inimigo mais implacável que já encontrou. Explore uma escala épica no mundo aberto de Halo Infinite.",
    features: ["Campanha em mundo aberto", "Multiplayer free-to-play", "Ganchos e veículos", "Modo Forge"],
    requirements: {
      minimum: "Windows 10, AMD Ryzen 5 1600, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, AMD Ryzen 7 3700X, 16GB RAM, RTX 2070"
    },
    screenshots: [game21, game5, game6, game7],
    trailer: "https://www.youtube.com/embed/PyMlV5_HRWk"
  },
  {
    id: "22",
    title: "Star Wars Jedi: Survivor",
    price: "R$ 249,99",
    originalPrice: "R$ 299,99",
    discount: "17%",
    rating: 5,
    image: game22,
    trailerImage: game6,
    category: "adventure",
    description: "A história de Cal Kestis continua em Star Wars Jedi: Survivor, um épico jogo de ação e aventura em terceira pessoa da Respawn Entertainment. Este título narrativo em mundo aberto dá sequência à história de Cal.",
    features: ["Combate com sabre de luz", "Exploração galáctica", "História cinematográfica", "Poderes Jedi aprimorados"],
    requirements: {
      minimum: "Windows 10, Intel i7-7700, 8GB RAM, GTX 1070",
      recommended: "Windows 10, Intel i5-11600K, 16GB RAM, RTX 2070"
    },
    screenshots: [game22, game6, game7, game8],
    trailer: "https://www.youtube.com/embed/_nIu2c9vHW4"
  },
  {
    id: "23",
    title: "Mortal Kombat 1",
    price: "R$ 299,99",
    rating: 5,
    image: game23,
    trailerImage: game7,
    category: "action",
    description: "Descubra uma nova era de Mortal Kombat. Criado por Liu Kang, o Guardião do Tempo e Protetor da Terra, este novo universo de MK está repleto de novas lutas, novos guerreiros, e uma história totalmente reimaginada.",
    features: ["Combate brutal renovado", "Roster completo", "História reimaginada", "Fatalities épicas"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600, 8GB RAM, GTX 980",
      recommended: "Windows 10, Intel i5-8600K, 8GB RAM, RTX 2060"
    },
    screenshots: [game23, game7, game8, game1],
    trailer: "https://www.youtube.com/embed/UZ5SlzNnS4Y"
  },
  {
    id: "24",
    title: "Street Fighter 6",
    price: "R$ 249,99",
    rating: 5,
    image: game24,
    trailerImage: game8,
    category: "action",
    description: "Aqui vem um novo desafiante! Street Fighter 6, o mais recente capítulo da série de jogos de luta mais icônica, apresenta um sistema de controle inovador, modos de jogo imersivos e uma experiência de combate refinada.",
    features: ["18 personagens jogáveis", "World Tour mode", "Drive System inovador", "Rollback netcode"],
    requirements: {
      minimum: "Windows 10, Intel i5-7500, 8GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-8700, 16GB RAM, RTX 2070"
    },
    screenshots: [game24, game8, game1, game2],
    trailer: "https://www.youtube.com/embed/W0DKtoGW3QU"
  },
  {
    id: "25",
    title: "Diablo IV",
    price: "R$ 299,99",
    rating: 5,
    image: game25,
    trailerImage: game1,
    category: "rpg",
    description: "Diablo IV é o próximo capítulo da série de RPG de ação que define o gênero. Incalculáveis horrores aguardam em Santuário. Escolha sua classe, personalize seu equipamento e explore um vasto mundo aberto sombrio.",
    features: ["5 classes jogáveis", "Mundo aberto sombrio", "Co-op online", "Dungeons infinitas"],
    requirements: {
      minimum: "Windows 10, Intel i5-2500K, 8GB RAM, GTX 660",
      recommended: "Windows 10, Intel i5-4670K, 16GB RAM, GTX 970"
    },
    screenshots: [game25, game1, game2, game3],
    trailer: "https://www.youtube.com/embed/9bRWIdOMfro"
  },
  {
    id: "26",
    title: "Starfield",
    price: "R$ 299,99",
    rating: 4,
    image: game26,
    trailerImage: game2,
    featured: true,
    category: "rpg",
    description: "Starfield é o primeiro RPG original em 25 anos da Bethesda Game Studios. Neste RPG de próxima geração ambientado entre as estrelas, crie qualquer personagem que desejar e explore com uma liberdade sem precedentes enquanto você embarca em uma jornada épica.",
    features: ["Mais de 1000 planetas", "Personalização de nave", "Exploração espacial", "História profunda"],
    requirements: {
      minimum: "Windows 10, AMD Ryzen 5 2600X, 16GB RAM, AMD Radeon RX 5700",
      recommended: "Windows 10, AMD Ryzen 5 3600X, 16GB RAM, AMD Radeon RX 6800 XT"
    },
    screenshots: [game26, game2, game3, game4],
    trailer: "https://www.youtube.com/embed/kfYEiTdsyas"
  },
  {
    id: "27",
    title: "Assassin's Creed Mirage",
    price: "R$ 199,99",
    rating: 4,
    image: game27,
    trailerImage: game3,
    category: "adventure",
    description: "Experiência as origens da Irmandade dos Assassinos enquanto Basim, um astuto ladrão de rua em busca de respostas e justiça. Navegue pelas ruas movimentadas de Bagdá do século IX e torne-se um Assassino lendário.",
    features: ["Bagdá histórica", "Furtividade clássica", "Parkour fluido", "Assassinatos icônicos"],
    requirements: {
      minimum: "Windows 10, Intel i7-4790K, 8GB RAM, GTX 1060",
      recommended: "Windows 10, Intel i7-9700K, 16GB RAM, RTX 2070"
    },
    screenshots: [game27, game3, game4, game5],
    trailer: "https://www.youtube.com/embed/ffPIZkZ3Hfo"
  },
  {
    id: "28",
    title: "Dead Space Remake",
    price: "R$ 249,99",
    rating: 5,
    image: game28,
    trailerImage: game4,
    category: "action",
    description: "O clássico de terror de sobrevivência sci-fi, Dead Space, retorna totalmente reconstruído do zero para oferecer uma experiência ainda mais imersiva. O engenheiro Isaac Clarke luta pela sobrevivência quando uma escavação em um planeta morto dá muito errado.",
    features: ["Gráficos fotorrealistas", "Terror atmosférico", "Combate visceral", "Desmembramento estratégico"],
    requirements: {
      minimum: "Windows 10, Intel i5-8600, 16GB RAM, GTX 1070",
      recommended: "Windows 10, Intel i5-11600K, 16GB RAM, RTX 3070"
    },
    screenshots: [game28, game4, game5, game6],
    trailer: "https://www.youtube.com/embed/nNI_TUYhpbw"
  },
  {
    id: "29",
    title: "EA Sports FC 24",
    price: "R$ 299,99",
    rating: 4,
    image: game29,
    trailerImage: game5,
    category: "action",
    description: "EA SPORTS FC 24 dá boas-vindas a você ao The World's Game - o jogo mais verdadeiro do futebol com HyperMotionV, PlayStyles otimizados por Opta e uma variedade de modos de jogo.",
    features: ["HyperMotion V", "Mais de 19000 jogadores", "Ultimate Team", "Modo Carreira renovado"],
    requirements: {
      minimum: "Windows 10, Intel i5-6600K, 8GB RAM, GTX 1050 Ti",
      recommended: "Windows 10, Intel i7-8700, 12GB RAM, RTX 2060"
    },
    screenshots: [game29, game5, game6, game7],
    trailer: "https://www.youtube.com/embed/XMrYY5BivXY"
  },
  {
    id: "30",
    title: "Spider-Man: Miles Morales",
    price: "R$ 199,99",
    originalPrice: "R$ 249,99",
    discount: "20%",
    rating: 5,
    image: game30,
    trailerImage: game6,
    category: "adventure",
    description: "A ascensão de Miles Morales. Miles Morales descobre poderes explosivos que o diferenciam de seu mentor, Peter Parker. Domine seus novos poderes únicos de bioeletricidade Venom Blast e invisibilidade para se tornar seu próprio Spider-Man.",
    features: ["Poderes Venom únicos", "New York em inverno", "História comovente", "Combate espetacular"],
    requirements: {
      minimum: "Windows 10, Intel i3-4160, 8GB RAM, GTX 950",
      recommended: "Windows 10, Intel i5-4670, 16GB RAM, GTX 1060"
    },
    screenshots: [game30, game6, game7, game8],
    trailer: "https://www.youtube.com/embed/T03PxxuCfDA"
  },
  {
    id: "31",
    title: "Horizon Forbidden West",
    price: "R$ 299,99",
    rating: 5,
    image: game31,
    trailerImage: game7,
    featured: true,
    category: "adventure",
    description: "Junte-se a Aloy enquanto ela brava as Terras Proibidas, uma majestosa mas perigosa fronteira que esconde novas ameaças misteriosas. Explore terras distantes, enfrente máquinas maiores e mais imponentes, e encontre tribos incríveis.",
    features: ["Mundo aberto vasto", "Combate dinâmico", "Máquinas impressionantes", "História épica"],
    requirements: {
      minimum: "PlayStation 4, 100GB de espaço",
      recommended: "PlayStation 5, 100GB de espaço, SSD"
    },
    screenshots: [game31, game7, game8, game1],
    trailer: "https://www.youtube.com/embed/Lq594XmpPBg"
  },
  {
    id: "32",
    title: "Ratchet & Clank: Rift Apart",
    price: "R$ 299,99",
    rating: 5,
    image: game32,
    trailerImage: game8,
    category: "adventure",
    description: "Pule entre dimensões com Ratchet e Clank enquanto eles enfrentam um imperador maligno de outra realidade. Salte de mundo em mundo através de portais dimensionais em velocidades alucinantes, explore novos ambientes e encontre armas insanas.",
    features: ["Viagem interdimensional", "Arsenal imenso", "Gráficos espetaculares", "Ação frenética"],
    requirements: {
      minimum: "PlayStation 5, 50GB de espaço, SSD",
      recommended: "PlayStation 5, 50GB de espaço, SSD"
    },
    screenshots: [game32, game8, game1, game2],
    trailer: "https://www.youtube.com/embed/ai3o0XtrnM8"
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

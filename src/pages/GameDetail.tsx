import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Heart, Share2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";

// Mock game data
const games = {
  '1': {
    id: '1',
    title: 'Cyberpunk 2077',
    price: 'R$ 89,99',
    originalPrice: 'R$ 149,99',
    discount: '40%',
    rating: 4,
    image: game1,
    category: 'Ação',
    description: 'Cyberpunk 2077 é um RPG de ação em mundo aberto que se passa em Night City, uma megalópole perigosa onde você luta pelo poder, glamour e imortalidade.',
    features: ['Mundo aberto massivo', 'Personalização profunda', 'Historia envolvente', 'Gráficos de última geração'],
    requirements: {
      minimum: 'Windows 10, Intel i5-3570K, 8GB RAM, GTX 780',
      recommended: 'Windows 10, Intel i7-4790, 12GB RAM, GTX 1060'
    },
    screenshots: [game1, game2, game3, game4]
  },
  '2': {
    id: '2',
    title: 'The Witcher 3',
    price: 'R$ 39,99',
    originalPrice: 'R$ 79,99',
    discount: '50%',
    rating: 5,
    image: game2,
    category: 'RPG',
    description: 'Uma aventura épica em um mundo aberto com mais de 100 horas de gameplay principal e side quests.',
    features: ['Mundo aberto gigantesco', 'História rica', 'Combate estratégico', 'Escolhas que importam'],
    requirements: {
      minimum: 'Windows 7, Intel i5-2500K, 6GB RAM, GTX 660',
      recommended: 'Windows 10, Intel i7-3770, 8GB RAM, GTX 770'
    },
    screenshots: [game2, game1, game3, game4]
  }
};

const GameDetail = () => {
  const { id } = useParams();
  const game = games[id as keyof typeof games];

  if (!game) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Jogo não encontrado</h1>
            <Link to="/">
              <Button>Voltar à Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-golden mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar à loja
        </Link>

        {/* Game header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <img 
              src={game.image} 
              alt={game.title}
              className="w-full rounded-lg shadow-card"
            />
            
            {/* Screenshot gallery */}
            <div className="grid grid-cols-4 gap-2">
              {game.screenshots.map((screenshot, index) => (
                <img 
                  key={index}
                  src={screenshot} 
                  alt={`Screenshot ${index + 1}`}
                  className="w-full aspect-video object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{game.category}</Badge>
                {game.discount && (
                  <Badge className="bg-gradient-golden text-black-deep">-{game.discount}</Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">{game.title}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < game.rating ? "fill-golden text-golden" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({game.rating}/5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-golden">{game.price}</span>
                {game.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {game.originalPrice}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3 mb-6">
                <Button className="flex-1 bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Quick features */}
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">Características:</h3>
                <ul className="space-y-1">
                  {game.features.map((feature, index) => (
                    <li key={index} className="text-muted-foreground flex items-center">
                      <Play className="h-3 w-3 mr-2 text-golden" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Game details tabs */}
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Descrição</TabsTrigger>
            <TabsTrigger value="requirements">Requisitos</TabsTrigger>
            <TabsTrigger value="reviews">Avaliações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Sobre este jogo</h3>
              <p className="text-muted-foreground leading-relaxed">{game.description}</p>
            </div>
          </TabsContent>
          
          <TabsContent value="requirements" className="mt-6">
            <div className="bg-card p-6 rounded-lg space-y-4">
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Requisitos Mínimos:</h4>
                <p className="text-muted-foreground">{game.requirements.minimum}</p>
              </div>
              <div>
                <h4 className="font-semibold text-card-foreground mb-2">Requisitos Recomendados:</h4>
                <p className="text-muted-foreground">{game.requirements.recommended}</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="bg-card p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-card-foreground mb-4">Avaliações dos Usuários</h3>
              <p className="text-muted-foreground">Sistema de avaliações em desenvolvimento...</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default GameDetail;
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Heart, Share2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { games } from "@/data/games";

const GameDetail = () => {
  const { id } = useParams();
  const game = games.find(g => g.id === id);
  const [currentMedia, setCurrentMedia] = useState<{type: 'trailer' | 'image', src: string}>({type: 'trailer', src: ''});

  useEffect(() => {
    if (game?.trailer) {
      setCurrentMedia({type: 'trailer', src: game.trailer});
    }
  }, [game]);

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
          {/* Main Image/Trailer */}
          <div className="space-y-4">
            <div className="aspect-video rounded-lg overflow-hidden shadow-card bg-black">
              {currentMedia.type === 'trailer' ? (
                <iframe
                  src={currentMedia.src}
                  title={`${game.title} trailer`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <img 
                  src={currentMedia.src} 
                  alt={`${game.title} screenshot`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          
            {/* Media gallery */}
            <div className="grid grid-cols-5 gap-2">
              {/* Trailer thumbnail */}
              {game.trailer && (
                <div 
                  className={`relative w-full aspect-video object-cover rounded cursor-pointer hover:opacity-80 transition-opacity overflow-hidden ${
                    currentMedia.type === 'trailer' ? 'ring-2 ring-golden' : ''
                  }`}
                  onClick={() => setCurrentMedia({type: 'trailer', src: game.trailer!})}
                >
                  <img 
                    src={game.trailerImage} 
                    alt="Trailer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              )}
              
              {/* Screenshots */}
              {game.screenshots.map((screenshot, index) => (
                <img 
                  key={index}
                  src={screenshot} 
                  alt={`Screenshot ${index + 1}`}
                  className={`w-full aspect-video object-cover rounded cursor-pointer hover:opacity-80 transition-opacity ${
                    currentMedia.type === 'image' && currentMedia.src === screenshot ? 'ring-2 ring-golden' : ''
                  }`}
                  onClick={() => setCurrentMedia({type: 'image', src: screenshot})}
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
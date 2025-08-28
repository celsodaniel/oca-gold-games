import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Gamepad2, Trophy, Zap } from "lucide-react";
import game1 from "@/assets/game-1.jpg";
import game2 from "@/assets/game-2.jpg";
import game3 from "@/assets/game-3.jpg";
import game4 from "@/assets/game-4.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Grandes Lançamentos de 2024: Os Jogos Mais Esperados",
    excerpt: "Descubra os títulos que prometem revolucionar o mundo dos games neste ano.",
    image: game1,
    category: "Lançamentos",
    date: "2024-01-15",
    author: "Equipe Paçoca",
    featured: true
  },
  {
    id: 2,
    title: "Torneio de Esports Paçoca Games: Inscrições Abertas",
    excerpt: "Participe do maior torneio da plataforma com premiação de R$ 100.000.",
    image: game2,
    category: "Esports",
    date: "2024-01-12",
    author: "Equipe Paçoca"
  },
  {
    id: 3,
    title: "Análise: Os RPGs Que Definiram a Década",
    excerpt: "Uma retrospectiva dos jogos de RPG mais influentes dos últimos 10 anos.",
    image: game3,
    category: "Análise",
    date: "2024-01-10",
    author: "João Silva"
  },
  {
    id: 4,
    title: "Dicas e Truques: Como Melhorar no Competitive Gaming",
    excerpt: "Estratégias profissionais para se destacar nos jogos competitivos.",
    image: game4,
    category: "Dicas",
    date: "2024-01-08",
    author: "Maria Santos"
  }
];

const News = () => {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* News Header */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
                <Badge className="bg-primary-foreground text-primary px-4 py-2 text-lg">
                  NOVIDADES
                </Badge>
              </div>
              <h1 className="text-5xl font-bold text-primary-foreground mb-4">
                Últimas Notícias
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Fique por dentro de tudo que acontece no mundo dos games
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Trophy className="h-6 w-6 text-golden" />
                  <h2 className="text-3xl font-bold text-foreground">Destaque</h2>
                </div>
              </div>
              
              <Card className="max-w-6xl mx-auto overflow-hidden bg-card border-border hover:border-golden/50 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover min-h-[300px]"
                    />
                    <Badge className="absolute top-4 left-4 bg-golden text-black-deep">
                      {featuredArticle.category}
                    </Badge>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <CardTitle className="text-2xl mb-4 text-card-foreground">
                      {featuredArticle.title}
                    </CardTitle>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(featuredArticle.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredArticle.author}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep w-fit">
                      Ler Artigo Completo
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* News Categories */}
        <section className="py-16 px-4 bg-black-light">
          <div className="container mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-black-deep">
                Todas
              </Button>
              <Button variant="ghost" className="hover:text-golden">
                Lançamentos
              </Button>
              <Button variant="ghost" className="hover:text-golden">
                Análises
              </Button>
              <Button variant="ghost" className="hover:text-golden">
                Esports
              </Button>
              <Button variant="ghost" className="hover:text-golden">
                Dicas
              </Button>
              <Button variant="ghost" className="hover:text-golden">
                Promoções
              </Button>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="h-6 w-6 text-golden" />
                <h2 className="text-3xl font-bold text-foreground">Últimas Notícias</h2>
              </div>
              <p className="text-xl text-muted-foreground">
                Fique sempre atualizado com as novidades do mundo gamer
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="group overflow-hidden bg-card border-border hover:border-golden/50 transition-all duration-300 hover:shadow-golden-glow">
                  <div className="relative">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-golden text-black-deep">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-golden transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString('pt-BR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full justify-between hover:text-golden">
                      Ler Mais
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
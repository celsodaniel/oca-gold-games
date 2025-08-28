import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameGrid } from "@/components/GameGrid";
import { Button } from "@/components/ui/button";

const categoryData = {
  action: {
    name: "Ação",
    description: "Jogos cheios de adrenalina com combate intenso e aventuras emocionantes",
    color: "from-red-500 to-orange-500"
  },
  adventure: {
    name: "Aventura",
    description: "Explore mundos fantásticos e viva aventuras épicas",
    color: "from-blue-500 to-purple-500"
  },
  rpg: {
    name: "RPG",
    description: "Jogos de interpretação com histórias profundas e desenvolvimento de personagem",
    color: "from-green-500 to-teal-500"
  },
  horror: {
    name: "Terror",
    description: "Prepare-se para experiências assombradas e atmosferas sinistras",
    color: "from-gray-700 to-black"
  },
  romance: {
    name: "Romance",
    description: "Histórias de amor envolventes e relacionamentos profundos",
    color: "from-pink-500 to-rose-500"
  },
  esports: {
    name: "Esports",
    description: "Jogos competitivos para se tornar um campeão profissional",
    color: "from-golden to-golden-light"
  }
};

const Category = () => {
  const { category } = useParams();
  const categoryInfo = categoryData[category as keyof typeof categoryData];

  if (!categoryInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
            <Link to="/store">
              <Button>Voltar à Loja</Button>
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
      <main>
        {/* Category Header */}
        <section className={`py-20 px-4 bg-gradient-to-br ${categoryInfo.color} relative overflow-hidden`}>
          <div className="container mx-auto relative z-10">
            <Link to="/store" className="inline-flex items-center text-white/80 hover:text-white mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar à loja
            </Link>
            
            <div className="text-center">
              <h1 className="text-5xl font-bold text-white mb-4">
                {categoryInfo.name}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                {categoryInfo.description}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
        </section>

        {/* Featured Games in Category */}
        <GameGrid 
          title={`Jogos de ${categoryInfo.name} em Destaque`}
          subtitle="Os melhores títulos desta categoria"
        />

        {/* Popular Games in Category */}
        <GameGrid 
          title={`Mais Populares em ${categoryInfo.name}`}
          subtitle="Os jogos mais jogados pelos usuários"
        />

        {/* New Releases in Category */}
        <GameGrid 
          title={`Novidades em ${categoryInfo.name}`}
          subtitle="Os lançamentos mais recentes"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Category;
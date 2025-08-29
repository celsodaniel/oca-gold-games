import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GameGrid } from "@/components/GameGrid";
import { Categories } from "@/components/Categories";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const Store = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    const search = searchParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Store Header */}
        <section className="py-12 px-4 bg-black-light">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Loja de Jogos
              </h1>
              <p className="text-xl text-muted-foreground">
                Descubra os melhores jogos com preços incríveis
              </p>
            </div>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Buscar jogos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-card border-border focus:border-golden"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full md:w-48 bg-card border-border">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Mais Populares</SelectItem>
                    <SelectItem value="price-low">Menor Preço</SelectItem>
                    <SelectItem value="price-high">Maior Preço</SelectItem>
                    <SelectItem value="rating">Melhor Avaliado</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 bg-card border-border">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas</SelectItem>
                    <SelectItem value="action">Ação</SelectItem>
                    <SelectItem value="adventure">Aventura</SelectItem>
                    <SelectItem value="rpg">RPG</SelectItem>
                    <SelectItem value="horror">Terror</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="esports">Esports</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <Categories />

        {/* Main Games Grid */}
        {searchQuery || selectedCategory !== "all" || sortBy !== "popular" ? (
          <GameGrid 
            title="Resultados da Busca" 
            subtitle={`${searchQuery ? `Buscando por "${searchQuery}"` : ''} ${selectedCategory !== "all" ? `na categoria ${selectedCategory}` : ''}`}
            searchQuery={searchQuery}
            category={selectedCategory}
            sortBy={sortBy}
          />
        ) : (
          <>
            {/* Featured Games */}
            <GameGrid 
              title="Jogos em Destaque" 
              subtitle="Os melhores jogos selecionados especialmente para você"
              limit={8}
              sortBy="popular"
            />

            {/* All Games */}
            <GameGrid 
              title="Todos os Jogos" 
              subtitle="Explore nosso catálogo completo"
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Store;
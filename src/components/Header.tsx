import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import pacocalLogo from "@/assets/pacoca-logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo e Nome */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src={pacocalLogo} 
            alt="Paçoca Games" 
            className="h-10 w-10"
          />
          <span className="text-2xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Paçoca Games
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/store" className="text-foreground hover:text-golden transition-colors">
            Loja
          </Link>
          <Link to="/store" className="text-foreground hover:text-golden transition-colors">
            Categorias
          </Link>
          <Link to="/promotions" className="text-foreground hover:text-golden transition-colors">
            Promoções
          </Link>
          <Link to="/news" className="text-foreground hover:text-golden transition-colors">
            Novidades
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden lg:flex relative flex-1 max-w-sm mx-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar jogos..."
            className="pl-10 bg-black-light border-border focus:border-golden"
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
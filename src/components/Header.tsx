import { ShoppingCart, Search, User, Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import pacocalLogo from "@/assets/pacoca-logo.png";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [profileData, setProfileData] = useState<{ display_name?: string; avatar_url?: string } | null>(null);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    try {
      const { data } = await supabase
        .from('profiles')
        .select('display_name, avatar_url')
        .eq('id', user.id)
        .maybeSingle();

      setProfileData(data);
    } catch (error) {
      console.error('Erro ao carregar perfil:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/store?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };
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
          <Link to="/about" className="text-foreground hover:text-golden transition-colors">
            Sobre
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden lg:flex relative flex-1 max-w-sm mx-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar jogos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-black-light border-border focus:border-golden"
          />
        </form>

        {/* User Actions */}
        <div className="flex items-center space-x-2">
          {user && (
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
          )}
          
          {/* User Auth */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={profileData?.avatar_url} alt="Avatar" />
                    <AvatarFallback className="bg-gradient-golden text-black-deep text-sm font-bold">
                      {profileData?.display_name?.[0] || user.email?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem disabled>
                  {user.email}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Meu Perfil
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          )}
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
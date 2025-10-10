import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  id?: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  image: string;
  featured?: boolean;
}

export const GameCard = ({ 
  id = "1",
  title, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  image, 
  featured = false 
}: GameCardProps) => {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!user) {
      navigate('/login');
      return;
    }

    if (price === "Free to Play") {
      return;
    }

    const numericPrice = parseFloat(price.replace("R$ ", "").replace(",", "."));
    addToCart(id, numericPrice);
  };
  return (
    <Card className={`group overflow-hidden bg-card border-border hover:border-golden/50 transition-all duration-300 hover:shadow-golden ${featured ? 'ring-2 ring-golden/30' : ''}`}>
      <Link to={`/game/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-black/5">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-gradient-golden text-black-deep px-2 py-1 rounded-md text-sm font-bold">
              -{discount}
            </div>
          )}
          {featured && (
            <div className="absolute top-2 right-2 bg-golden text-black-deep px-2 py-1 rounded-md text-xs font-bold">
              DESTAQUE
            </div>
          )}
        </div>
      </Link>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-golden transition-colors line-clamp-2">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-golden text-golden" : "text-muted-foreground"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating}/5)</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-golden">{price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold group-hover:shadow-golden-glow transition-all duration-300"
          size="sm"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {price === "Free to Play" ? "Jogar Grátis" : "Adicionar ao Carrinho"}
        </Button>
      </CardFooter>
    </Card>
  );
};
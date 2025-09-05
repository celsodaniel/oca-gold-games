import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";

export default function Cart() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { cartItems, loading, removeFromCart, updateQuantity, clearCart, getTotalPrice, getItemCount } = useCart();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const total = getTotalPrice();
  const itemCount = getItemCount();

  return (
    <div className="min-h-screen bg-gradient-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="hover:bg-muted"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Meu Carrinho</h1>
              <p className="text-muted-foreground">
                {itemCount > 0 ? `${itemCount} item${itemCount > 1 ? 's' : ''} no carrinho` : 'Carrinho vazio'}
              </p>
            </div>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="animate-pulse flex gap-4">
                      <div className="w-20 h-20 bg-muted rounded"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-3 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-1/4"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold text-foreground mb-2">Seu carrinho está vazio</h2>
              <p className="text-muted-foreground mb-6">
                Adicione alguns jogos incríveis ao seu carrinho!
              </p>
              <Button
                onClick={() => navigate('/store')}
                className="bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold px-8"
              >
                Explorar Jogos
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-foreground">Itens do Carrinho</h2>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearCart}
                    className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Limpar Carrinho
                  </Button>
                </div>

                {cartItems.map((item) => (
                  <Card key={item.id} className="bg-card border-border">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        {item.game?.image && (
                          <img
                            src={item.game.image}
                            alt={item.game.title}
                            className="w-20 h-20 rounded object-cover"
                          />
                        )}
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-foreground">
                                {item.game?.title || `Jogo ${item.game_id}`}
                              </h3>
                              {item.game?.category && (
                                <Badge variant="secondary" className="capitalize mt-1">
                                  {item.game.category}
                                </Badge>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-foreground">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <div className="text-right">
                              <p className="text-lg font-semibold text-golden">
                                R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                              </p>
                              {item.quantity > 1 && (
                                <p className="text-sm text-muted-foreground">
                                  R$ {item.price.toFixed(2).replace('.', ',')} cada
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="lg:col-span-1">
                <Card className="bg-card border-border sticky top-8">
                  <CardHeader>
                    <CardTitle className="text-foreground">Resumo do Pedido</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal ({itemCount} item{itemCount > 1 ? 's' : ''})</span>
                        <span className="text-foreground">R$ {total.toFixed(2).replace('.', ',')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Taxa de processamento</span>
                        <span className="text-foreground">R$ 0,00</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-semibold text-lg">
                      <span className="text-foreground">Total</span>
                      <span className="text-golden">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>

                    <Button 
                      className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold py-6 text-lg"
                      disabled={cartItems.length === 0}
                    >
                      Finalizar Compra
                    </Button>

                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate('/store')}
                    >
                      Continuar Comprando
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
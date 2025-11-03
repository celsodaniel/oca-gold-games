import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, ArrowLeft, CheckCircle, Wallet } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { usePayment } from "@/hooks/usePayment";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cartItems, getTotalPrice, getItemCount, clearCart } = useCart();
  const { initiateCheckout, loading: paymentLoading } = usePayment();
  const { toast } = useToast();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = getTotalPrice();
  const itemCount = getItemCount();
  const returnUrl = searchParams.get('return') || '/store';
  const success = searchParams.get('success');
  const canceled = searchParams.get('canceled');

  useEffect(() => {
    if (success === 'true') {
      setPaymentSuccess(true);
      clearCart();
    } else if (canceled === 'true') {
      toast({
        variant: "destructive",
        title: "Pagamento cancelado",
        description: "Você cancelou o pagamento. Tente novamente quando desejar.",
      });
    }
  }, [success, canceled, clearCart, toast]);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (cartItems.length === 0 && !paymentSuccess) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de finalizar a compra.",
      });
      navigate('/store');
    }
  }, [user, cartItems, navigate, toast, paymentSuccess]);

  const handleCheckout = async () => {
    await initiateCheckout({
      amount: total,
      items: cartItems
    });
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen bg-gradient-black">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border-border rounded-lg p-8">
              <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Seu jogo foi comprado!</h1>
              <p className="text-muted-foreground mb-6">
                Sua compra foi processada com sucesso. Os jogos foram adicionados à sua biblioteca e enviamos a confirmação por email.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => navigate('/profile')}
                  className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold"
                >
                  Ver Minha Biblioteca
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/store')}
                  className="w-full"
                >
                  Continuar Comprando
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user || cartItems.length === 0) {
    return null;
  }

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
              onClick={() => navigate(returnUrl)}
              className="hover:bg-muted"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Finalizar Compra</h1>
              <p className="text-muted-foreground">Pagamento seguro via cartão de crédito</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Wallet className="h-5 w-5" />
                    Métodos de Pagamento
                  </CardTitle>
                  <CardDescription>
                    Selecione um método de pagamento seguro
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleCheckout}
                    disabled={paymentLoading}
                    className="w-full h-20 bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold text-lg justify-start px-6"
                  >
                    <CreditCard className="h-8 w-8 mr-4" />
                    <div className="text-left">
                      <div className="font-bold">Cartão de Crédito</div>
                      <div className="text-sm font-normal opacity-80">Visa, Mastercard, Elo e mais</div>
                    </div>
                  </Button>

                  <div className="bg-muted/30 border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-muted-foreground mt-0.5" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">Pagamento Seguro</p>
                        <p className="text-xs text-muted-foreground">
                          Seus dados são protegidos com criptografia de ponta a ponta. 
                          Processamento via Stripe, líder mundial em pagamentos online.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 space-y-2 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-golden"></span>
                      Parcelamento em até 12x sem juros
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-golden"></span>
                      Confirmação instantânea
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-golden"></span>
                      Jogos disponíveis imediatamente após aprovação
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Resumo do Pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          {item.game?.image && (
                            <img
                              src={item.game.image}
                              alt={item.game.title}
                              className="w-10 h-10 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {item.game?.title || `Jogo ${item.game_id}`}
                            </p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                            )}
                          </div>
                        </div>
                        <span className="text-golden font-medium">
                          R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

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
                    onClick={() => navigate('/payment-methods')}
                    className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold py-6 text-lg"
                  >
                    Finalizar Compra - R$ {total.toFixed(2).replace('.', ',')}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-2">
                    Escolha seu método de pagamento preferido na próxima etapa
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
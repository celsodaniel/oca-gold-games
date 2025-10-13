import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, QrCode, FileText, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function PaymentMethods() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cartItems, getTotalPrice, getItemCount, loading: cartLoading } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const total = getTotalPrice();
  const itemCount = getItemCount();
  const success = searchParams.get('success');

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    // Só valida carrinho vazio após o carregamento terminar
    if (!cartLoading && cartItems.length === 0 && success !== 'true') {
      toast({
        title: "Carrinho vazio",
        description: "Adicione itens ao carrinho antes de continuar.",
      });
      navigate('/store');
    }
  }, [user, cartItems, cartLoading, navigate, toast, success]);

  useEffect(() => {
    if (success === 'true') {
      toast({
        title: "Pagamento aprovado!",
        description: "Sua compra foi processada com sucesso.",
      });
    }
  }, [success, toast]);

  const handlePaymentMethod = async (method: 'card' | 'pix' | 'boleto') => {
    setLoading(true);
    setSelectedMethod(method);
    
    try {
      const paymentMethodTypes: Record<string, string[]> = {
        card: ['card'],
        pix: ['pix'],
        boleto: ['boleto']
      };

      const { data: checkoutData, error: checkoutError } = await supabase.functions.invoke(
        'create-payment',
        {
          body: {
            items: cartItems,
            amount: total,
            payment_method_types: paymentMethodTypes[method]
          }
        }
      );

      if (checkoutError) {
        console.error('Erro ao criar checkout:', checkoutError);
        toast({
          variant: "destructive",
          title: "Erro ao processar",
          description: "Não foi possível iniciar o pagamento. Tente novamente.",
        });
        return;
      }

      if (!checkoutData?.url) {
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Não foi possível criar a sessão de pagamento.",
        });
        return;
      }

      // Redirecionar para o Stripe Checkout
      window.location.href = checkoutData.url;
      
    } catch (error) {
      console.error('Erro no checkout:', error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Erro inesperado ao processar pagamento.",
      });
    } finally {
      setLoading(false);
      setSelectedMethod(null);
    }
  };

  if (success === 'true') {
    return (
      <div className="min-h-screen bg-gradient-black">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card border-border rounded-lg p-8">
              <CheckCircle className="h-16 w-16 mx-auto text-green-500 mb-4" />
              <h1 className="text-3xl font-bold text-foreground mb-2">Pagamento Aprovado!</h1>
              <p className="text-muted-foreground mb-6">
                Sua compra foi processada com sucesso. Os jogos foram adicionados à sua biblioteca.
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

  if (!user || (cartItems.length === 0 && !cartLoading)) {
    return null;
  }

  // Mostrar loading enquanto carrega o carrinho
  if (cartLoading) {
    return (
      <div className="min-h-screen bg-gradient-black">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-1/3"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-64 bg-muted rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-black">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/checkout')}
              className="hover:bg-muted"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Escolha o Método de Pagamento</h1>
              <p className="text-muted-foreground">Selecione como deseja pagar sua compra</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Cartão de Crédito/Débito */}
            <Card className="bg-card border-border hover:border-golden transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-golden/20 flex items-center justify-center group-hover:bg-gradient-golden/30 transition-colors">
                    <CreditCard className="h-8 w-8 text-golden" />
                  </div>
                </div>
                <CardTitle className="text-center text-foreground">Cartão</CardTitle>
                <CardDescription className="text-center">
                  Crédito ou Débito
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handlePaymentMethod('card')}
                  disabled={loading}
                  className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold"
                >
                  {loading && selectedMethod === 'card' ? "Processando..." : "Pagar com Cartão"}
                </Button>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Parcelamento em até 12x
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Aprovação imediata
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Todas as bandeiras
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* PIX */}
            <Card className="bg-card border-border hover:border-golden transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-golden/20 flex items-center justify-center group-hover:bg-gradient-golden/30 transition-colors">
                    <QrCode className="h-8 w-8 text-golden" />
                  </div>
                </div>
                <CardTitle className="text-center text-foreground">PIX</CardTitle>
                <CardDescription className="text-center">
                  Pagamento instantâneo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handlePaymentMethod('pix')}
                  disabled={loading}
                  className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold"
                >
                  {loading && selectedMethod === 'pix' ? "Processando..." : "Pagar com PIX"}
                </Button>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Confirmação em segundos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    QR Code para escanear
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Sem taxas adicionais
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Boleto */}
            <Card className="bg-card border-border hover:border-golden transition-colors cursor-pointer group">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-golden/20 flex items-center justify-center group-hover:bg-gradient-golden/30 transition-colors">
                    <FileText className="h-8 w-8 text-golden" />
                  </div>
                </div>
                <CardTitle className="text-center text-foreground">Boleto</CardTitle>
                <CardDescription className="text-center">
                  Bancário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => handlePaymentMethod('boleto')}
                  disabled={loading}
                  className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold"
                >
                  {loading && selectedMethod === 'boleto' ? "Processando..." : "Gerar Boleto"}
                </Button>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Vencimento em 3 dias
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Pague em qualquer banco
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-golden"></span>
                    Confirmação em 1-2 dias úteis
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do Pedido */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Resumo do Pedido</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {item.game?.image && (
                        <img
                          src={item.game.image}
                          alt={item.game.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                      )}
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {item.game?.title || `Jogo ${item.game_id}`}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-xs text-muted-foreground">Qtd: {item.quantity}</p>
                        )}
                      </div>
                    </div>
                    <span className="text-golden font-medium">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal ({itemCount} item{itemCount > 1 ? 's' : ''})</span>
                  <span className="text-foreground">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-golden">R$ {total.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

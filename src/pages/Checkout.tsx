import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ArrowLeft, CheckCircle } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import { usePayment } from "@/hooks/usePayment";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { cartItems, getTotalPrice, getItemCount, clearCart } = useCart();
  const { processPayment, loading: paymentLoading } = usePayment();
  const { toast } = useToast();
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    holderName: ''
  });
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = getTotalPrice();
  const itemCount = getItemCount();
  const returnUrl = searchParams.get('return') || '/store';

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

  const handlePayment = async () => {
    if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.holderName) {
      toast({
        variant: "destructive",
        title: "Dados incompletos",
        description: "Preencha todos os dados do cartão.",
      });
      return;
    }

    setProcessingPayment(true);
    try {
      const result = await processPayment({
        amount: total,
        items: cartItems,
        paymentMethod: paymentData
      });

      if (result.success) {
        setPaymentSuccess(true);
        await clearCart();
        toast({
          title: "Pagamento aprovado!",
          description: "Sua compra foi processada com sucesso.",
        });
      } else {
        throw new Error(result.error || 'Erro no pagamento');
      }
    } catch (error) {
      console.error('Erro no pagamento:', error);
      toast({
        variant: "destructive",
        title: "Pagamento recusado",
        description: "Verifique os dados do cartão e tente novamente.",
      });
    } finally {
      setProcessingPayment(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + (v.length > 2 ? '/' + v.substring(2, 4) : '');
    }
    return v;
  };

  if (paymentSuccess) {
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
            {/* Payment Form */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <CreditCard className="h-5 w-5" />
                    Dados do Cartão
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="holderName">Nome do Titular</Label>
                    <Input
                      id="holderName"
                      placeholder="Nome como está no cartão"
                      value={paymentData.holderName}
                      onChange={(e) => setPaymentData(prev => ({ ...prev, holderName: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Número do Cartão</Label>
                    <Input
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={paymentData.cardNumber}
                      onChange={(e) => setPaymentData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiryDate">Validade</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/AA"
                        value={paymentData.expiryDate}
                        onChange={(e) => setPaymentData(prev => ({ ...prev, expiryDate: formatExpiryDate(e.target.value) }))}
                        maxLength={5}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) => setPaymentData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                    <Lock className="h-4 w-4" />
                    <span>Seus dados estão protegidos com criptografia SSL</span>
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
                    onClick={handlePayment}
                    disabled={processingPayment || paymentLoading}
                    className="w-full bg-gradient-golden hover:bg-gradient-golden-dark text-black-deep font-semibold py-6 text-lg"
                  >
                    {processingPayment ? "Processando..." : `Pagar R$ ${total.toFixed(2).replace('.', ',')}`}
                  </Button>
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
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Central de Ajuda
          </CardTitle>
          <CardDescription>
            Encontre respostas para suas dúvidas
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Perguntas Frequentes</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Como faço para comprar um jogo?</AccordionTrigger>
                <AccordionContent>
                  Basta navegar pela nossa loja, escolher o jogo desejado e clicar em "Adicionar ao Carrinho". 
                  Depois, finalize sua compra no carrinho.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Posso pedir reembolso?</AccordionTrigger>
                <AccordionContent>
                  Sim! Oferecemos reembolso em até 14 dias após a compra, desde que o tempo de jogo seja inferior a 2 horas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Como baixo meus jogos?</AccordionTrigger>
                <AccordionContent>
                  Após a compra, os jogos ficam disponíveis na sua biblioteca. 
                  Você pode baixá-los através do nosso launcher oficial.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Categorias de Ajuda</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Problemas de Pagamento</h3>
              <p className="text-sm text-muted-foreground">Dificuldades com cartão, PIX ou outros métodos de pagamento.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Problemas Técnicos</h3>
              <p className="text-sm text-muted-foreground">Erro no download, instalação ou execução dos jogos.</p>
            </div>
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Conta e Perfil</h3>
              <p className="text-sm text-muted-foreground">Questões relacionadas ao seu perfil e configurações.</p>
            </div>
          </CardContent>
        </Card>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default HelpCenter;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";

export const Refunds = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Política de Reembolsos
          </CardTitle>
          <CardDescription>
            Entenda nossos termos e condições para reembolso
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="border-green-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
              <h3 className="font-semibold text-green-500">Elegível para Reembolso</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Menos de 14 dias desde a compra</li>
              <li>• Menos de 2 horas jogadas</li>
              <li>• Problemas técnicos não resolvidos</li>
              <li>• Compra acidental</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <Clock className="h-6 w-6 text-yellow-500" />
              <h3 className="font-semibold text-yellow-500">Em Análise</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Entre 2-5 horas jogadas</li>
              <li>• Mais de 14 dias (casos especiais)</li>
              <li>• DLC ou conteúdo adicional</li>
              <li>• Jogos em early access</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-500/20">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2 mb-4">
              <XCircle className="h-6 w-6 text-red-500" />
              <h3 className="font-semibold text-red-500">Não Elegível</h3>
            </div>
            <ul className="space-y-2 text-sm">
              <li>• Mais de 5 horas jogadas</li>
              <li>• Códigos de ativação utilizados</li>
              <li>• Violação dos termos</li>
              <li>• Jogos gratuitos</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Como Solicitar Reembolso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center text-black text-sm font-bold">1</div>
                <div>
                  <h4 className="font-medium">Acesse sua Biblioteca</h4>
                  <p className="text-sm text-muted-foreground">Encontre o jogo que deseja reembolsar</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center text-black text-sm font-bold">2</div>
                <div>
                  <h4 className="font-medium">Clique em "Solicitar Reembolso"</h4>
                  <p className="text-sm text-muted-foreground">Preencha o formulário com o motivo</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-golden rounded-full flex items-center justify-center text-black text-sm font-bold">3</div>
                <div>
                  <h4 className="font-medium">Aguarde a Análise</h4>
                  <p className="text-sm text-muted-foreground">Resposta em até 3 dias úteis</p>
                </div>
              </div>
            </div>
            <Button className="w-full">Acessar Minha Biblioteca</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tempo de Processamento</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Análise da solicitação</span>
                <span className="text-sm font-medium">1-3 dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cartão de crédito</span>
                <span className="text-sm font-medium">5-10 dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">PIX</span>
                <span className="text-sm font-medium">1-2 dias</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Boleto bancário</span>
                <span className="text-sm font-medium">3-5 dias</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Importante:</strong> Os prazos podem variar conforme o banco ou operadora do cartão.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Contato
          </CardTitle>
          <CardDescription>
            Entre em contato conosco
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Envie uma Mensagem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Nome</label>
                <Input placeholder="Seu nome" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Assunto</label>
              <Input placeholder="Assunto da mensagem" />
            </div>
            <div>
              <label className="text-sm font-medium">Mensagem</label>
              <Textarea placeholder="Descreva sua dúvida ou problema..." className="min-h-32" />
            </div>
            <Button className="w-full">Enviar Mensagem</Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-golden" />
                <span>suporte@pacogames.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-golden" />
                <span>0800 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-golden" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-golden" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tempo de Resposta</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Respondemos todas as mensagens em até 24 horas durante dias úteis. 
                Para casos urgentes, utilize nosso chat ao vivo disponível das 8h às 22h.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
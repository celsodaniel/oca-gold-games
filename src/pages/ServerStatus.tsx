import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, XCircle, Clock } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const ServerStatus = () => {
  const getCurrentStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const isOperationalHours = hour >= 8 && hour <= 22;
    return isOperationalHours ? "online" : "offline";
  };

  const currentStatus = getCurrentStatus();
  
  const serverStatus = [
    { name: "Loja Online", status: currentStatus, response: currentStatus === "offline" ? "N/A" : "45ms" },
    { name: "Downloads", status: currentStatus, response: currentStatus === "offline" ? "N/A" : "120ms" },
    { name: "Autenticação", status: currentStatus, response: currentStatus === "offline" ? "N/A" : "32ms" },
    { name: "Pagamentos", status: "maintenance", response: "N/A" },
    { name: "Chat/Suporte", status: currentStatus, response: currentStatus === "offline" ? "N/A" : "67ms" },
    { name: "Multiplayer", status: currentStatus === "online" ? "degraded" : "offline", response: currentStatus === "offline" ? "N/A" : "340ms" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "online":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "maintenance":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "offline":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "degraded":
        return "bg-yellow-500";
      case "maintenance":
        return "bg-blue-500";
      case "offline":
        return "bg-red-500";
      default:
        return "bg-green-500";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "online":
        return "Online";
      case "degraded":
        return "Degradado";
      case "maintenance":
        return "Manutenção";
      case "offline":
        return "Offline";
      default:
        return "Online";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Status dos Servidores
          </CardTitle>
          <CardDescription>
            Acompanhe o status em tempo real dos nossos serviços
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="mb-8">
        <Card>
          <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            {currentStatus === "online" ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Sistemas operacionais (08:00-22:00)</span>
              </>
            ) : (
              <>
                <XCircle className="h-5 w-5 text-red-500" />
                <span>Sistemas offline (fora do horário 08:00-22:00)</span>
              </>
            )}
          </CardTitle>
            <CardDescription>
              Última atualização: {new Date().toLocaleString('pt-BR')}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {serverStatus.map((server, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getStatusIcon(server.status)}
                  <h3 className="font-semibold">{server.name}</h3>
                </div>
                <Badge variant="outline" className={`text-white ${getStatusColor(server.status)}`}>
                  {getStatusText(server.status)}
                </Badge>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Tempo de resposta:</span>
                <span className="font-medium">{server.response}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Manutenções Programadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Sistema de Pagamentos</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Manutenção programada para otimização do sistema
                </p>
                <p className="text-xs text-blue-400">
                  30/08/2024 02:00 - 04:00 (horário de Brasília)
                </p>
              </div>
              
              <p className="text-sm text-muted-foreground">
                Nenhuma outra manutenção programada nos próximos 7 dias.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Incidentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-medium text-sm">Lentidão nos Downloads</p>
                <p className="text-xs text-muted-foreground">
                  28/08/2024 14:30 - 15:45 (Resolvido)
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Alguns usuários experimentaram lentidão nos downloads. Problema resolvido com otimização dos servidores.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium text-sm">Sistema Totalmente Estável</p>
                <p className="text-xs text-muted-foreground">
                  Últimos 30 dias com 99.9% de uptime
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      </main>
      <Footer />
    </div>
  );
};
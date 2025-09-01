import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Calendar, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Press = () => {
  const pressReleases = [
    {
      title: "Paçoca Games atinge 1 milhão de usuários registrados",
      date: "25 de Agosto, 2024",
      summary: "A plataforma brasileira de jogos digitais celebra marco histórico e anuncia expansão para toda América Latina."
    },
    {
      title: "Nova parceria com desenvolvedores independentes brasileiros",
      date: "15 de Agosto, 2024", 
      summary: "Programa de apoio a estúdios nacionais promete revolucionar o cenário de games no Brasil."
    },
    {
      title: "Lançamento da funcionalidade de transmissões ao vivo",
      date: "8 de Agosto, 2024",
      summary: "Gamers agora podem fazer streaming diretamente da plataforma, integrando comunidade e gameplay."
    }
  ];

  const mediaAssets = [
    { name: "Logo Paçoca Games (PNG)", size: "2.4 MB" },
    { name: "Screenshots da Plataforma", size: "15.7 MB" },
    { name: "Guia de Marca", size: "4.2 MB" },
    { name: "Fotos da Equipe", size: "8.9 MB" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Imprensa
          </CardTitle>
          <CardDescription>
            Recursos e informações para a imprensa
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Sobre a Paçoca Games</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A Paçoca Games é a principal plataforma brasileira de distribuição de jogos digitais, 
              fundada em 2023 com o objetivo de democratizar o acesso aos games no Brasil.
            </p>
            <p className="text-muted-foreground">
              Com mais de 1 milhão de usuários registrados, oferecemos um catálogo diversificado 
              que vai desde indies brasileiros até os principais AAA internacionais.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-golden">1M+</div>
                <div className="text-sm text-muted-foreground">Usuários Ativos</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-2xl font-bold text-golden">500+</div>
                <div className="text-sm text-muted-foreground">Jogos Disponíveis</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contato para Imprensa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Assessoria de Imprensa</h4>
              <p className="text-sm text-muted-foreground">Maria Santos</p>
              <p className="text-sm text-muted-foreground">imprensa@pacogames.com.br</p>
              <p className="text-sm text-muted-foreground">(11) 98765-4321</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Parcerias Estratégicas</h4>
              <p className="text-sm text-muted-foreground">João Silva</p>
              <p className="text-sm text-muted-foreground">parcerias@pacogames.com.br</p>
              <p className="text-sm text-muted-foreground">(11) 99876-5432</p>
            </div>
            <Button className="w-full mt-4">
              <ExternalLink className="h-4 w-4 mr-2" />
              Kit de Imprensa Completo
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Comunicados à Imprensa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-b border-border pb-6 last:border-b-0">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{release.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {release.date}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{release.summary}</p>
                <Button variant="outline" size="sm">
                  Ler Comunicado Completo
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recursos de Mídia</CardTitle>
          <CardDescription>
            Logos, imagens e materiais para uso editorial
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mediaAssets.map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <h4 className="font-medium">{asset.name}</h4>
                  <p className="text-sm text-muted-foreground">{asset.size}</p>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      </main>
      <Footer />
    </div>
  );
};
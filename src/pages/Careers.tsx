import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

export const Careers = () => {
  const jobOpenings = [
    {
      title: "Desenvolvedor Frontend React",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      salary: "R$ 8.000 - R$ 12.000",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "UX/UI Designer",
      location: "Remoto",
      type: "Tempo Integral", 
      salary: "R$ 6.000 - R$ 9.000",
      tags: ["Figma", "Design Systems", "Gaming"]
    },
    {
      title: "Analista de Marketing Digital",
      location: "Rio de Janeiro, RJ",
      type: "Tempo Integral",
      salary: "R$ 5.000 - R$ 7.500",
      tags: ["SEO", "Google Ads", "Social Media"]
    },
    {
      title: "Desenvolvedor Backend Node.js",
      location: "São Paulo, SP",
      type: "Tempo Integral",
      salary: "R$ 9.000 - R$ 14.000",
      tags: ["Node.js", "PostgreSQL", "AWS"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Carreiras
          </CardTitle>
          <CardDescription>
            Venha fazer parte da equipe Paçoca Games
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <Card>
          <CardContent className="pt-6 text-center">
            <Users className="h-12 w-12 text-golden mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Equipe Diversa</h3>
            <p className="text-muted-foreground text-sm">
              Valorizamos a diversidade e inclusão em todos os aspectos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <MapPin className="h-12 w-12 text-golden mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Trabalho Híbrido</h3>
            <p className="text-muted-foreground text-sm">
              Flexibilidade para trabalhar de casa ou no escritório
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 text-center">
            <DollarSign className="h-12 w-12 text-golden mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Benefícios Completos</h3>
            <p className="text-muted-foreground text-sm">
              Plano de saúde, vale-refeição, PLR e muito mais
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Vagas Abertas</CardTitle>
          <CardDescription>
            Encontre a oportunidade perfeita para você
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Button>Candidatar-se</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Por que trabalhar conosco?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Crescimento Profissional</h4>
              <p className="text-muted-foreground text-sm">
                Oferecemos trilhas de carreira claras e investimos no desenvolvimento dos nossos colaboradores 
                através de treinamentos, cursos e certificações.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Ambiente Inovador</h4>
              <p className="text-muted-foreground text-sm">
                Trabalhe com as tecnologias mais modernas em um ambiente que estimula a criatividade 
                e a inovação no setor de games.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Shield, Trophy, Star, Gamepad2 } from "lucide-react";
import pacocalLogo from "@/assets/pacoca-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* About Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-golden to-golden-light relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <img 
                  src={pacocalLogo} 
                  alt="Paçoca Games" 
                  className="h-16 w-16"
                />
                <h1 className="text-5xl font-bold text-black-deep">
                  Paçoca Games
                </h1>
              </div>
              <p className="text-xl text-black-deep/80 max-w-3xl mx-auto mb-6">
                A maior plataforma de jogos digitais do Brasil, onde diversão e qualidade se encontram.
              </p>
              <Badge className="bg-black-deep text-golden px-6 py-2 text-lg">
                Desde 2020
              </Badge>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Nossa História</h2>
              <p className="text-xl text-muted-foreground">
                Conheça a jornada que nos trouxe até aqui
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                A Paçoca Games nasceu em 2020 com um sonho simples: democratizar o acesso aos melhores jogos digitais do mundo. Começamos como uma pequena equipe de entusiastas de games que acreditava que todo jogador merece ter acesso a experiências incríveis a preços justos.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Nosso nome vem da tradicional paçoca brasileira - doce, reconfortante e que traz alegria para qualquer momento. Assim como a paçoca une amendoim e açúcar em perfeita harmonia, nós unimos jogadores e desenvolvedores, criando uma comunidade próspera e vibrante.
              </p>
              
              <p className="text-lg leading-relaxed">
                Hoje, somos orgulhosos de servir milhões de jogadores em todo o Brasil, oferecendo desde indies inovadores até os maiores blockbusters, sempre com o compromisso de qualidade, segurança e preços acessíveis que nos define desde o primeiro dia.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 px-4 bg-black-light">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Nossos Valores</h2>
              <p className="text-xl text-muted-foreground">
                Os princípios que guiam tudo que fazemos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-card border-border hover:border-golden/50 transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Heart className="h-12 w-12 text-golden group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-card-foreground">Paixão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Somos apaixonados por jogos e essa paixão transparece em tudo que fazemos para nossa comunidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-golden/50 transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-golden group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-card-foreground">Comunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Construímos pontes entre jogadores, criando uma comunidade unida e acolhedora.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-golden/50 transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Shield className="h-12 w-12 text-golden group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-card-foreground">Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Protegemos suas informações e garantimos transações seguras em todas as compras.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-golden/50 transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Trophy className="h-12 w-12 text-golden group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-card-foreground">Excelência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Buscamos sempre a excelência em atendimento, produtos e experiência do usuário.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Nossa Comunidade</h2>
              <p className="text-xl text-muted-foreground">
                Números que representam nossa jornada
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-16 w-16 text-golden" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">2.5M+</div>
                <div className="text-muted-foreground">Jogadores Ativos</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Gamepad2 className="h-16 w-16 text-golden" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">10K+</div>
                <div className="text-muted-foreground">Jogos Disponíveis</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Star className="h-16 w-16 text-golden" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">4.8/5</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Shield className="h-16 w-16 text-golden" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                <div className="text-muted-foreground">Transações Seguras</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Message */}
        <section className="py-16 px-4 bg-black-light">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">
                  Uma mensagem da nossa equipe
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  "Acreditamos que os jogos são mais do que entretenimento - eles são arte, cultura e uma forma poderosa de conectar pessoas. Nossa missão é garantir que essas experiências transformadoras sejam acessíveis a todos os brasileiros, mantendo sempre os mais altos padrões de qualidade e atendimento."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <img 
                    src={pacocalLogo} 
                    alt="Paçoca Games" 
                    className="h-8 w-8"
                  />
                  <span className="font-semibold text-golden">- Equipe Paçoca Games</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
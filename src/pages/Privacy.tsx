import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold bg-gradient-golden bg-clip-text text-transparent">
            Política de Privacidade
          </CardTitle>
          <CardDescription>
            Última atualização: 29 de agosto de 2024
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>1. Informações que Coletamos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h4 className="font-semibold">Informações de Conta</h4>
            <p className="text-muted-foreground">
              Coletamos informações quando você cria uma conta, incluindo nome, e-mail, 
              data de nascimento e país de residência.
            </p>
            
            <h4 className="font-semibold">Informações de Uso</h4>
            <p className="text-muted-foreground">
              Registramos como você interage com nossa plataforma, incluindo jogos jogados, 
              tempo de sessão, preferências e histórico de compras.
            </p>
            
            <h4 className="font-semibold">Informações Técnicas</h4>
            <p className="text-muted-foreground">
              Coletamos dados sobre seu dispositivo, sistema operacional, endereço IP 
              e informações de conexão para melhorar o desempenho.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>2. Como Usamos suas Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="space-y-2 text-muted-foreground">
              <li>• Fornecer e melhorar nossos serviços</li>
              <li>• Processar transações e gerenciar sua conta</li>
              <li>• Personalizar sua experiência na plataforma</li>
              <li>• Enviar comunicações importantes sobre serviços</li>
              <li>• Detectar e prevenir fraudes</li>
              <li>• Cumprir obrigações legais</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>3. Compartilhamento de Informações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Não vendemos suas informações pessoais. Compartilhamos dados apenas nas seguintes situações:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Com provedores de serviço confiáveis (processamento de pagamentos, analytics)</li>
              <li>• Quando exigido por lei ou ordem judicial</li>
              <li>• Para proteger nossos direitos ou a segurança dos usuários</li>
              <li>• Com seu consentimento explícito</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Seus Direitos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              De acordo com a LGPD, você tem os seguintes direitos:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Acessar seus dados pessoais</li>
              <li>• Corrigir informações incompletas ou incorretas</li>
              <li>• Solicitar a exclusão de dados</li>
              <li>• Revogar consentimento a qualquer momento</li>
              <li>• Portabilidade dos dados</li>
              <li>• Informações sobre compartilhamento</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>5. Cookies e Tecnologias Similares</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Usamos cookies e tecnologias similares para:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Manter você logado em sua conta</li>
              <li>• Lembrar suas preferências</li>
              <li>• Analisar como você usa nossos serviços</li>
              <li>• Personalizar conteúdo e anúncios</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Você pode gerenciar cookies através das configurações do seu navegador.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>6. Segurança dos Dados</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Implementamos medidas técnicas e organizacionais apropriadas para proteger 
              suas informações contra acesso não autorizado, alteração, divulgação ou destruição.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Criptografia de dados em trânsito e em repouso</li>
              <li>• Controles de acesso rigorosos</li>
              <li>• Monitoramento contínuo de segurança</li>
              <li>• Auditorias regulares de segurança</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>7. Retenção de Dados</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Mantemos suas informações pelo tempo necessário para cumprir as finalidades 
              descritas nesta política, exceto quando um período de retenção mais longo 
              for exigido ou permitido por lei.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>8. Menores de Idade</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Nossos serviços não são direcionados a menores de 13 anos. Se descobrirmos 
              que coletamos informações de uma criança menor de 13 anos, excluiremos 
              essas informações imediatamente.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>9. Alterações nesta Política</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos atualizar esta política periodicamente. Notificaremos sobre 
              mudanças significativas através de e-mail ou aviso em nossa plataforma.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>10. Contato</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre esta política ou quiser exercer seus direitos, 
              entre em contato conosco:
            </p>
            <div className="space-y-1 text-muted-foreground">
              <p>E-mail: privacidade@pacogames.com.br</p>
              <p>Telefone: 0800 123 4567</p>
              <p>Endereço: Rua dos Games, 123 - São Paulo, SP</p>
            </div>
          </CardContent>
        </Card>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
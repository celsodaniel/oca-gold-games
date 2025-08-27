import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import pacocalLogo from "@/assets/pacoca-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-black-deep border-t border-border py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={pacocalLogo} 
                alt="Paçoca Games" 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold bg-gradient-golden bg-clip-text text-transparent">
                Paçoca Games
              </span>
            </div>
            <p className="text-muted-foreground">
              A melhor plataforma de jogos do Brasil. Diversão garantida com os melhores preços!
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-muted-foreground hover:text-golden cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-muted-foreground hover:text-golden cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-muted-foreground hover:text-golden cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-muted-foreground hover:text-golden cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links da Loja */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">Loja</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Novidades</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Promoções</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Mais Vendidos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Gratuitos</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">Suporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Reembolsos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Status dos Servidores</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-foreground font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Imprensa</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-golden transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Paçoca Games. Todos os direitos reservados. Feito com ❤️ no Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
};
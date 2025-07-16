import { Shield, Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">Conselho Tutelar Petrópolis</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Protegendo e garantindo os direitos de crianças e adolescentes em Petrópolis, 
              conforme estabelecido pelo Estatuto da Criança e do Adolescente (ECA).
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(24) 2233-0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">conselho@petropolis.rj.gov.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm">
                  Rua do Imperador, 350<br />
                  Centro - Petrópolis/RJ<br />
                  CEP: 25610-020
                </span>
              </div>
            </div>
          </div>

          {/* Emergência */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emergência</h3>
            <div className="space-y-3">
              <Button 
                className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                onClick={() => window.open("tel:100", "_self")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Disque 100
              </Button>
              <Button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                onClick={() => window.open("tel:190", "_self")}
              >
                <Phone className="h-4 w-4 mr-2" />
                Polícia 190
              </Button>
              <p className="text-xs text-primary-foreground/70">
                Em situações de emergência, ligue imediatamente
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2024 Conselho Tutelar de Petrópolis. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
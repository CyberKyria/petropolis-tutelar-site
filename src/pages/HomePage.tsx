
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, FileText, Phone, Heart, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-protection.jpg";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                CONHEÇA E DEFENDA OS DIREITOS DE 
                <span className="block text-yellow-300">CRIANÇAS E ADOLESCENTES</span>
              </h1>
              <p className="text-xl mb-12 text-primary-foreground/90">
                Como denunciar uma situação de risco?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start lg:ml-32 items-center mt-8">
                <Button asChild className="btn-primary text-lg px-8 py-4">
                  <Link to="/conselho-tutelar">
                    SAIBA MAIS SOBRE O CONSELHO TUTELAR
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  className="text-lg px-8 py-4 border-white bg-white/10 text-white hover:bg-white hover:text-primary"
                >
                  <Link to="/como-denunciar">
                    Como denunciar uma situação de risco?
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-up">
              <img 
                src={heroImage} 
                alt="Proteção de crianças e adolescentes" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Conselho Tutelar */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Sobre o Conselho Tutelar
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Conheça como o Conselho Tutelar atua para proteger e garantir os direitos fundamentais de crianças e adolescentes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-soft protection-theme border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Proteção contra violência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Atendimento e proteção em casos de violência física, psicológica, sexual, negligência e abandono.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft education-theme border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-xl">Acolhimento e escuta</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Oferecemos um ambiente seguro para ouvir crianças, adolescentes e famílias com respeito e dignidade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft support-theme border">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <ArrowRight className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Encaminhamento de casos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Direcionamento adequado para órgãos competentes e acompanhamento de medidas de proteção.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="btn-primary">
              <Link to="/conselho-tutelar">
                Saiba mais sobre nosso trabalho
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ECA Section */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Conheça o ECA
              </h2>
              <div className="flex items-center mb-6">
                <div className="text-4xl font-bold text-primary mr-4">1990</div>
                <div className="flex-1 h-px bg-border"></div>
                <div className="text-4xl font-bold text-primary ml-4">2024</div>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                O Estatuto da Criança e do Adolescente (ECA) foi criado em 1990 e representa um marco 
                na proteção dos direitos fundamentais de crianças e adolescentes no Brasil.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/eca">
                  Baixar ECA completo em PDF
                  <FileText className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="space-y-4">
              <Card className="card-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Direito à Educação</h3>
                  <p className="text-muted-foreground">Toda criança tem direito à educação de qualidade e gratuita.</p>
                </CardContent>
              </Card>
              <Card className="card-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Direito à Saúde</h3>
                  <p className="text-muted-foreground">Acesso universal aos serviços de saúde desde o nascimento.</p>
                </CardContent>
              </Card>
              <Card className="card-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Proteção Integral</h3>
                  <p className="text-muted-foreground">Proteção contra qualquer forma de violência ou exploração.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-destructive text-destructive-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Phone className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Precisa denunciar uma situação de risco?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Sua denúncia pode salvar vidas. Denuncie agora mesmo de forma anônima e segura.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-destructive hover:bg-gray-100 text-lg px-8 py-4"
            onClick={() => window.open("tel:100", "_self")}
          >
            <Phone className="h-5 w-5 mr-2" />
            DENUNCIAR AGORA - DISQUE 100
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Recursos e Informações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft hover:scale-105 transition-transform">
              <CardHeader>
                <FileText className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Materiais Educativos</CardTitle>
                <CardDescription>
                  Cartilhas, guias e materiais informativos sobre direitos da criança
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/materiais">Acessar Materiais</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft hover:scale-105 transition-transform">
              <CardHeader>
                <GraduationCap className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Cursos e Capacitações</CardTitle>
                <CardDescription>
                  Formação continuada para profissionais e comunidade em geral
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cursos">Ver Cursos</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft hover:scale-105 transition-transform">
              <CardHeader>
                <Heart className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Fale Conosco</CardTitle>
                <CardDescription>
                  Entre em contato para esclarecimentos, sugestões ou mais informações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contato">Entrar em Contato</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

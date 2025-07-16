import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Scale, AlertTriangle, Phone, MapPin, Clock, Mail } from "lucide-react";

export default function ConselhoTutelarPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">O que é o Conselho Tutelar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              O Conselho Tutelar é um órgão permanente e autônomo, encarregado de zelar pelo cumprimento 
              dos direitos da criança e do adolescente, conforme estabelecido pelo ECA.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Como surgiu o Conselho Tutelar no Brasil
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O Conselho Tutelar foi criado pelo Estatuto da Criança e do Adolescente (Lei 8.069/90) 
                  como parte de um sistema inovador de proteção integral à infância e juventude.
                </p>
                <p>
                  Antes do ECA, as crianças eram tratadas como "menores em situação irregular", 
                  sendo objetos de intervenção do Estado. Com a nova lei, passaram a ser reconhecidas 
                  como sujeitos de direitos.
                </p>
                <p>
                  Cada município brasileiro deve ter pelo menos um Conselho Tutelar, composto por 
                  cinco membros eleitos pela comunidade local para mandatos de quatro anos.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="h-6 w-6 mr-2 text-primary" />
                    Lei 8.069/90
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Criação do Estatuto da Criança e do Adolescente e dos Conselhos Tutelares</p>
                </CardContent>
              </Card>
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2 text-primary" />
                    Proteção Integral
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Mudança de paradigma: de "menores" para sujeitos de direitos</p>
                </CardContent>
              </Card>
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2 text-primary" />
                    Municipalização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Descentralização do atendimento e fortalecimento do poder local</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Papel na Sociedade */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Papel do Conselho Tutelar na Sociedade
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Proteção de Direitos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Zelar pelo cumprimento dos direitos fundamentais estabelecidos no ECA, 
                  como educação, saúde, convivência familiar e comunitária.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
                <CardTitle>Atendimento de Denúncias</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receber e investigar denúncias de violações dos direitos de crianças e 
                  adolescentes, aplicando medidas de proteção quando necessário.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Orientação e Apoio</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Orientar pais, responsáveis e a comunidade sobre os direitos da criança 
                  e adolescente, promovendo a prevenção de violações.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Situações de Atuação */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Situações que exigem atuação do Conselho Tutelar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Violência Física</h3>
                  <p className="text-muted-foreground">Agressões, maus-tratos, castigos corporais excessivos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Violência Sexual</h3>
                  <p className="text-muted-foreground">Abuso sexual, exploração sexual, pornografia infantil</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Negligência</h3>
                  <p className="text-muted-foreground">Falta de cuidados básicos: alimentação, higiene, educação, saúde</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Abandono</h3>
                  <p className="text-muted-foreground">Criança ou adolescente deixado pelos responsáveis</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Trabalho Infantil</h3>
                  <p className="text-muted-foreground">Exploração do trabalho de crianças e adolescentes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Falta às Aulas</h3>
                  <p className="text-muted-foreground">Evasão escolar, faltas excessivas sem justificativa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informações de Contato Petrópolis */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Conselho Tutelar de Petrópolis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <MapPin className="h-8 w-8 mb-2" />
                <CardTitle>Endereço</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Rua do Imperador, 350<br />
                  Centro - Petrópolis/RJ<br />
                  CEP: 25610-020
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Phone className="h-8 w-8 mb-2" />
                <CardTitle>Telefones</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  (24) 2233-0000<br />
                  (24) 99999-0000<br />
                  Plantão 24h
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Clock className="h-8 w-8 mb-2" />
                <CardTitle>Horário</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Segunda a Sexta:<br />
                  8h às 17h<br />
                  Plantão: 24h
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground text-primary">
              <CardHeader>
                <Mail className="h-8 w-8 mb-2" />
                <CardTitle>E-mail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  conselho@petropolis.rj.gov.br
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              onClick={() => window.open("tel:100", "_self")}
            >
              <Phone className="h-5 w-5 mr-2" />
              EMERGÊNCIA - DISQUE 100
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
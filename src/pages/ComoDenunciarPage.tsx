import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, AlertTriangle, MapPin, Clock, Shield, FileText, Users, ArrowRight } from "lucide-react";

export default function ComoDenunciarPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Phone className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Como Denunciar</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Sua denúncia pode salvar vidas. Saiba como e quando denunciar situações de risco para crianças e adolescentes.
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
        </div>
      </section>

      {/* Quando Denunciar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Quando Denunciar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft border-red-200 bg-red-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle className="text-red-800">Violência Física</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-red-700">
                  Agressões, lesões corporais, castigos físicos excessivos, 
                  marcas de violência no corpo da criança ou adolescente.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft border-purple-200 bg-purple-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-purple-800">Violência Sexual</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-700">
                  Abuso sexual, exploração sexual, pornografia infantil, 
                  comportamento sexual inadequado para a idade.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft border-orange-200 bg-orange-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-orange-800">Negligência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-orange-700">
                  Falta de cuidados básicos: alimentação, higiene, saúde, 
                  educação, supervisão adequada.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft border-blue-200 bg-blue-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-blue-800">Abandono</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-700">
                  Criança ou adolescente deixado sem cuidados, 
                  ausência prolongada dos responsáveis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft border-yellow-200 bg-yellow-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle className="text-yellow-800">Trabalho Infantil</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-yellow-700">
                  Exploração do trabalho infantil, atividades que prejudiquem 
                  o desenvolvimento ou a educação.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft border-green-200 bg-green-50">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-green-800">Outros Casos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700">
                  Evasão escolar, uso de drogas, discriminação, 
                  qualquer violação dos direitos da criança.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Canais de Denúncia */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Canais de Denúncia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft">
              <CardHeader>
                <Phone className="h-12 w-12 text-destructive mb-4" />
                <CardTitle>Disque 100</CardTitle>
                <CardDescription>Disque Direitos Humanos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Serviço gratuito, nacional e confidencial, 24 horas por dia.
                </p>
                <Button 
                  className="btn-danger w-full"
                  onClick={() => window.open("tel:100", "_self")}
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Conselho Tutelar</CardTitle>
                <CardDescription>Petrópolis - RJ</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  (24) 2233-0000<br />
                  Plantão 24h: (24) 99999-0000
                </p>
                <Button 
                  className="btn-primary w-full"
                  onClick={() => window.open("tel:2422330000", "_self")}
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <Phone className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Polícia Civil</CardTitle>
                <CardDescription>Delegacia da Criança</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  197 - Polícia Civil<br />
                  190 - Emergência
                </p>
                <Button 
                  className="btn-secondary w-full"
                  onClick={() => window.open("tel:197", "_self")}
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Passo a Passo */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Passo a Passo da Denúncia
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Identifique a situação de risco</h3>
                  <p className="text-muted-foreground">
                    Observe sinais de violência, negligência ou qualquer situação que coloque 
                    a criança ou adolescente em risco.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Saiba onde denunciar</h3>
                  <p className="text-muted-foreground">
                    Escolha o canal mais adequado: Disque 100 (emergências), Conselho Tutelar 
                    (casos locais) ou Polícia (crimes).
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">O que esperar após a denúncia</h3>
                  <p className="text-muted-foreground">
                    Sua denúncia será investigada, a criança será protegida e, 
                    se necessário, medidas legais serão tomadas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Direitos do denunciante</h3>
                  <p className="text-muted-foreground">
                    Sua identidade será protegida, você pode denunciar anonimamente e 
                    não sofrerá represálias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Localização do Conselho Tutelar
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-primary-foreground text-primary">
                <CardHeader>
                  <MapPin className="h-8 w-8 mb-2" />
                  <CardTitle>Endereço</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    Rua do Imperador, 350<br />
                    Centro - Petrópolis/RJ<br />
                    CEP: 25610-020
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Segunda a Sexta: 8h às 17h</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span className="text-sm">Plantão 24h disponível</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 text-center">
              <MapPin className="h-24 w-24 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">
                Mapa interativo será carregado aqui
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Importantes */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4" />
              <h3 className="text-2xl font-bold text-yellow-800">Importante Saber</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Denúncia Anônima</h4>
                <p className="text-yellow-700">
                  Você pode denunciar sem se identificar. Sua segurança é garantida.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Sem Represálias</h4>
                <p className="text-yellow-700">
                  Denunciar é um direito. Não há punição para quem denuncia de boa-fé.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Investigação Confidencial</h4>
                <p className="text-yellow-700">
                  Todas as denúncias são investigadas com sigilo e seriedade.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Proteção Imediata</h4>
                <p className="text-yellow-700">
                  Em casos graves, a criança é protegida imediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
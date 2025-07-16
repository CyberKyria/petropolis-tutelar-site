import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Scale, Heart, GraduationCap, Shield, Download } from "lucide-react";

export default function EcaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Conheça o ECA</h1>
            <p className="text-xl max-w-3xl mx-auto">
              O Estatuto da Criança e do Adolescente é a lei que garante os direitos fundamentais 
              de todas as crianças e adolescentes brasileiros.
            </p>
          </div>
        </div>
      </section>

      {/* História do ECA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                História do ECA
              </h2>
              <div className="flex items-center mb-8">
                <div className="text-4xl font-bold text-primary">1990</div>
                <div className="flex-1 h-1 bg-gradient-to-r from-primary to-primary-glow mx-4"></div>
                <div className="text-4xl font-bold text-primary">2024</div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  O Estatuto da Criança e do Adolescente foi promulgado em 13 de julho de 1990, 
                  substituindo o antigo Código de Menores de 1979.
                </p>
                <p>
                  Representa uma verdadeira revolução na forma como o Brasil trata suas crianças 
                  e adolescentes, estabelecendo o princípio da proteção integral.
                </p>
                <p>
                  Ao longo de mais de 30 anos, o ECA tem sido fundamental para a construção 
                  de políticas públicas voltadas à infância e juventude.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">34 anos</CardTitle>
                  <CardDescription>de proteção integral</CardDescription>
                </CardHeader>
              </Card>
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">267 artigos</CardTitle>
                  <CardDescription>garantindo direitos</CardDescription>
                </CardHeader>
              </Card>
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="text-2xl">Lei 8.069/90</CardTitle>
                  <CardDescription>marco legal histórico</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Principais Direitos */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Principais Direitos Assegurados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-soft education-theme border">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Direito à Educação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Acesso à educação pública e gratuita em todos os níveis, 
                  desde a educação infantil até o ensino médio.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft protection-theme border">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle>Direito à Saúde</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Atendimento médico integral, desde o nascimento, 
                  incluindo prevenção e tratamento de doenças.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-soft support-theme border">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Proteção contra Violência</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Proteção contra qualquer forma de violência física, 
                  psicológica, sexual ou negligência.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Direito à Convivência Familiar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Toda criança tem o direito de ser criada e educada no seio da família, 
                    preferencialmente pelos pais biológicos.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Direito à Profissionalização
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Adolescentes têm direito à formação profissional e proteção no trabalho, 
                    respeitando sua condição de pessoa em desenvolvimento.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Direito ao Lazer e Cultura
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Acesso a atividades culturais, artísticas, esportivas e de lazer, 
                    fundamentais para o desenvolvimento integral.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Direito à Dignidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tratamento com respeito e dignidade, considerando sua condição peculiar 
                    de pessoa em desenvolvimento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Artigos Importantes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Artigos Fundamentais do ECA
          </h2>
          <div className="space-y-6">
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-primary">Artigo 4°</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "É dever da família, da comunidade, da sociedade em geral e do poder público 
                  assegurar, com absoluta prioridade, a efetivação dos direitos referentes à vida, 
                  à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, 
                  à cultura, à dignidade, ao respeito, à liberdade e à convivência familiar e comunitária."
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-primary">Artigo 5°</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Nenhuma criança ou adolescente será objeto de qualquer forma de negligência, 
                  discriminação, exploração, violência, crueldade e opressão, punido na forma 
                  da lei qualquer atentado, por ação ou omissão, aos seus direitos fundamentais."
                </p>
              </CardContent>
            </Card>

            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-primary">Artigo 53</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "A criança e o adolescente têm direito à educação, visando ao pleno desenvolvimento 
                  de sua pessoa, preparo para o exercício da cidadania e qualificação para o trabalho."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download do ECA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Baixe o ECA Completo
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tenha acesso ao texto integral do Estatuto da Criança e do Adolescente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
              onClick={() => window.open("https://www.gov.br/mdh/pt-br/assuntos/noticias/2023/julho/estatuto-da-crianca-e-do-adolescente-completa-33-anos", "_blank")}
            >
              <Download className="h-5 w-5 mr-2" />
              Download ECA em PDF
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              onClick={() => window.open("https://www.planalto.gov.br/ccivil_03/leis/l8069.htm", "_blank")}
            >
              <FileText className="h-5 w-5 mr-2" />
              Consultar Online
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
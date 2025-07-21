
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Eye } from "lucide-react";

const wireframes = [
  {
    id: 1,
    pagina: "Home",
    descricao: "Página inicial com hero section, serviços e informações principais",
    baixaFidelidade: "/src/assets/wireframe-home-low.png",
    altaFidelidade: "/src/assets/wireframe-home-high.png"
  },
  {
    id: 2,
    pagina: "Conselho Tutelar",
    descricao: "Página institucional sobre o Conselho Tutelar",
    baixaFidelidade: "/src/assets/wireframe-conselho-low.png",
    altaFidelidade: "/src/assets/wireframe-conselho-high.png"
  },
  {
    id: 3,
    pagina: "ECA",
    descricao: "Página sobre o Estatuto da Criança e do Adolescente",
    baixaFidelidade: "/src/assets/wireframe-eca-low.png",
    altaFidelidade: "/src/assets/wireframe-eca-high.png"
  },
  {
    id: 4,
    pagina: "Como Denunciar",
    descricao: "Página com orientações sobre como fazer denúncias",
    baixaFidelidade: "/src/assets/wireframe-denunciar-low.png",
    altaFidelidade: "/src/assets/wireframe-denunciar-high.png"
  },
  {
    id: 5,
    pagina: "Materiais Educativos",
    descricao: "Página com materiais educativos e recursos",
    baixaFidelidade: "/src/assets/wireframe-materiais-low.png",
    altaFidelidade: "/src/assets/wireframe-materiais-high.png"
  },
  {
    id: 6,
    pagina: "Contato",
    descricao: "Página de contato com formulário e informações",
    baixaFidelidade: "/src/assets/wireframe-contato-low.png",
    altaFidelidade: "/src/assets/wireframe-contato-high.png"
  }
];

export default function WireframesPage() {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
  };

  const handleDownloadAll = () => {
    wireframes.forEach(wireframe => {
      setTimeout(() => {
        handleDownload(wireframe.baixaFidelidade, `wireframe-${wireframe.pagina.toLowerCase().replace(' ', '-')}-low.png`);
      }, 100);
      setTimeout(() => {
        handleDownload(wireframe.altaFidelidade, `wireframe-${wireframe.pagina.toLowerCase().replace(' ', '-')}-high.png`);
      }, 200);
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Wireframes do Projeto</h1>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Wireframes de baixa e alta fidelidade para todas as páginas do projeto 
              Conselho Tutelar de Petrópolis. Clique para visualizar ou fazer download.
            </p>
            <Button 
              onClick={handleDownloadAll}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Download className="h-5 w-5 mr-2" />
              Baixar Todos os Wireframes
            </Button>
          </div>
        </div>
      </section>

      {/* Wireframes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wireframes.map((wireframe) => (
              <Card key={wireframe.id} className="card-soft">
                <CardHeader>
                  <CardTitle className="text-xl">{wireframe.pagina}</CardTitle>
                  <CardDescription>{wireframe.descricao}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Baixa Fidelidade */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Baixa Fidelidade</h4>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(wireframe.baixaFidelidade, '_blank')}
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(
                          wireframe.baixaFidelidade, 
                          `wireframe-${wireframe.pagina.toLowerCase().replace(' ', '-')}-low.png`
                        )}
                        className="flex-1"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </div>

                  {/* Alta Fidelidade */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Alta Fidelidade</h4>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(wireframe.altaFidelidade, '_blank')}
                        className="flex-1"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Visualizar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(
                          wireframe.altaFidelidade, 
                          `wireframe-${wireframe.pagina.toLowerCase().replace(' ', '-')}-high.png`
                        )}
                        className="flex-1"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Como Usar os Wireframes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg">Baixa Fidelidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wireframes com estrutura básica, ideal para apresentações iniciais, 
                  validação de conceitos e discussões sobre arquitetura da informação.
                </p>
              </CardContent>
            </Card>
            <Card className="card-soft">
              <CardHeader>
                <CardTitle className="text-lg">Alta Fidelidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Wireframes detalhados com cores, tipografia e elementos visuais, 
                  ideais para validação final e apresentações para stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

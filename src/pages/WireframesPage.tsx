import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye } from "lucide-react";

// Import wireframe images
import wireframeHomeLow from "@/assets/wireframe-home-low.png";
import wireframeHomeHigh from "@/assets/wireframe-home-high.png";
import wireframeContactLow from "@/assets/wireframe-contact-low.png";
import wireframeContactHigh from "@/assets/wireframe-contact-high.png";
import wireframeMaterialsLow from "@/assets/wireframe-materials-low.png";
import wireframeMaterialsHigh from "@/assets/wireframe-materials-high.png";
import wireframeCoursesLow from "@/assets/wireframe-courses-low.png";
import wireframeCoursesHigh from "@/assets/wireframe-courses-high.png";

const wireframes = [
  {
    page: "Página Inicial",
    lowFidelity: wireframeHomeLow,
    highFidelity: wireframeHomeHigh,
    description: "Landing page com hero section, informações sobre o Conselho Tutelar, ECA e links rápidos"
  },
  {
    page: "Contato",
    lowFidelity: wireframeContactLow,
    highFidelity: wireframeContactHigh,
    description: "Página de contato com formulário, informações de contato e mapa"
  },
  {
    page: "Materiais Educativos",
    lowFidelity: wireframeMaterialsLow,
    highFidelity: wireframeMaterialsHigh,
    description: "Lista de materiais educativos com filtros e categorias"
  },
  {
    page: "Cursos",
    lowFidelity: wireframeCoursesLow,
    highFidelity: wireframeCoursesHigh,
    description: "Lista de cursos disponíveis com filtros e formulário de inscrição"
  }
];

export default function WireframesPage() {
  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = (imageUrl: string) => {
    window.open(imageUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Eye className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Wireframes do Projeto</h1>
            <p className="text-xl">
              Documentação visual das páginas principais - Baixa e Alta Fidelidade
            </p>
          </div>
        </div>
      </section>

      {/* Wireframes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {wireframes.map((wireframe, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{wireframe.page}</CardTitle>
                  <p className="text-muted-foreground text-center">{wireframe.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Low Fidelity */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Baixa Fidelidade</h3>
                      <div className="relative group">
                        <img 
                          src={wireframe.lowFidelity} 
                          alt={`${wireframe.page} - Baixa Fidelidade`}
                          className="w-full h-auto border rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer"
                          onClick={() => openInNewTab(wireframe.lowFidelity)}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="flex gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                openInNewTab(wireframe.lowFidelity);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Ver
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(wireframe.lowFidelity, `${wireframe.page.toLowerCase().replace(' ', '-')}-low-fidelity.png`);
                              }}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Baixar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* High Fidelity */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-center">Alta Fidelidade</h3>
                      <div className="relative group">
                        <img 
                          src={wireframe.highFidelity} 
                          alt={`${wireframe.page} - Alta Fidelidade`}
                          className="w-full h-auto border rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer"
                          onClick={() => openInNewTab(wireframe.highFidelity)}
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <div className="flex gap-2">
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                openInNewTab(wireframe.highFidelity);
                              }}
                            >
                              <Eye className="h-4 w-4 mr-2" />
                              Ver
                            </Button>
                            <Button
                              variant="secondary"
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDownload(wireframe.highFidelity, `${wireframe.page.toLowerCase().replace(' ', '-')}-high-fidelity.png`);
                              }}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Baixar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Download All Section */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8">
              <CardContent className="pt-0">
                <Download className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-4">Download Completo</h3>
                <p className="text-muted-foreground mb-6">
                  Baixe todos os wireframes de uma vez para ter acesso offline à documentação visual completa
                </p>
                <Button 
                  onClick={() => {
                    wireframes.forEach((wireframe, index) => {
                      setTimeout(() => {
                        handleDownload(wireframe.lowFidelity, `${index + 1}-${wireframe.page.toLowerCase().replace(' ', '-')}-low.png`);
                        handleDownload(wireframe.highFidelity, `${index + 1}-${wireframe.page.toLowerCase().replace(' ', '-')}-high.png`);
                      }, index * 1000);
                    });
                  }}
                  className="btn-primary"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Todos os Wireframes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Video, Image, Users, GraduationCap, Heart, Search } from "lucide-react";

const materiais = [
  {
    id: 1,
    titulo: "Cartilha do ECA para Crianças",
    tipo: "PDF",
    publico: "Crianças",
    descricao: "Material educativo com linguagem simples para explicar os direitos das crianças",
    icone: FileText,
    cor: "bg-blue-500"
  },
  {
    id: 2,
    titulo: "Guia para Pais e Responsáveis",
    tipo: "PDF",
    publico: "Pais",
    descricao: "Manual completo sobre como proteger e educar crianças e adolescentes",
    icone: FileText,
    cor: "bg-green-500"
  },
  {
    id: 3,
    titulo: "Vídeo: Sinais de Abuso Infantil",
    tipo: "Vídeo",
    publico: "Educadores",
    descricao: "Documentário educativo sobre como identificar sinais de abuso em crianças",
    icone: Video,
    cor: "bg-red-500"
  },
  {
    id: 4,
    titulo: "Infográfico: Direitos da Criança",
    tipo: "Infográfico",
    publico: "Profissionais",
    descricao: "Resumo visual dos principais direitos estabelecidos pelo ECA",
    icone: Image,
    cor: "bg-purple-500"
  },
  {
    id: 5,
    titulo: "Manual do Conselheiro Tutelar",
    tipo: "PDF",
    publico: "Profissionais",
    descricao: "Guia completo para atuação dos conselheiros tutelares",
    icone: FileText,
    cor: "bg-orange-500"
  },
  {
    id: 6,
    titulo: "Cartilha sobre Bullying",
    tipo: "PDF",
    publico: "Educadores",
    descricao: "Como identificar, prevenir e combater o bullying nas escolas",
    icone: FileText,
    cor: "bg-yellow-500"
  },
  {
    id: 7,
    titulo: "Vídeo: Prevenção ao Trabalho Infantil",
    tipo: "Vídeo",
    publico: "Pais",
    descricao: "Conscientização sobre os riscos do trabalho infantil",
    icone: Video,
    cor: "bg-indigo-500"
  },
  {
    id: 8,
    titulo: "Folder: Canais de Denúncia",
    tipo: "Infográfico",
    publico: "Todos",
    descricao: "Informações sobre como e onde denunciar violações de direitos",
    icone: Image,
    cor: "bg-pink-500"
  }
];

export default function MateriaisPage() {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroPublico, setFiltroPublico] = useState("");
  const [busca, setBusca] = useState("");

  const materiaisFiltrados = materiais.filter(material => {
    const matchTipo = filtroTipo === "" || material.tipo === filtroTipo;
    const matchPublico = filtroPublico === "" || material.publico === filtroPublico;
    const matchBusca = busca === "" || 
      material.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      material.descricao.toLowerCase().includes(busca.toLowerCase());
    
    return matchTipo && matchPublico && matchBusca;
  });

  const tipos = [...new Set(materiais.map(m => m.tipo))];
  const publicos = [...new Set(materiais.map(m => m.publico))];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Materiais Educativos</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Acesse cartilhas, vídeos, infográficos e outros materiais educativos sobre 
              os direitos de crianças e adolescentes.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar materiais..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={filtroTipo}
                onChange={(e) => setFiltroTipo(e.target.value)}
                className="px-4 py-2 border rounded-md bg-background"
              >
                <option value="">Todos os tipos</option>
                {tipos.map(tipo => (
                  <option key={tipo} value={tipo}>{tipo}</option>
                ))}
              </select>
              <select
                value={filtroPublico}
                onChange={(e) => setFiltroPublico(e.target.value)}
                className="px-4 py-2 border rounded-md bg-background"
              >
                <option value="">Todos os públicos</option>
                {publicos.map(publico => (
                  <option key={publico} value={publico}>{publico}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Materiais */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {materiaisFiltrados.map((material) => {
              const IconComponent = material.icone;
              return (
                <Card key={material.id} className="card-soft hover:scale-105 transition-transform">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-full ${material.cor}`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">{material.tipo}</Badge>
                    </div>
                    <CardTitle className="text-lg">{material.titulo}</CardTitle>
                    <CardDescription>{material.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{material.publico}</span>
                      </div>
                    </div>
                    <Button className="w-full btn-primary">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {materiaisFiltrados.length === 0 && (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">Nenhum material encontrado</h3>
              <p className="text-muted-foreground">
                Tente ajustar os filtros ou termos de busca
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categorias */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Materiais por Categoria
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-soft text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <CardTitle>Para Pais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Materiais para orientar pais e responsáveis sobre proteção e educação
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroPublico("Pais")}
                >
                  Ver Materiais
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft text-center">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <CardTitle>Para Educadores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Recursos para professores e profissionais da educação
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroPublico("Educadores")}
                >
                  Ver Materiais
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft text-center">
              <CardHeader>
                <Heart className="h-12 w-12 mx-auto mb-4 text-red-500" />
                <CardTitle>Para Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Manuais e guias para profissionais da área social e saúde
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroPublico("Profissionais")}
                >
                  Ver Materiais
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft text-center">
              <CardHeader>
                <FileText className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <CardTitle>Para Crianças</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Materiais adaptados para crianças e adolescentes
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroPublico("Crianças")}
                >
                  Ver Materiais
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Compartilhe o Conhecimento
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ajude a espalhar informações importantes sobre os direitos das crianças e adolescentes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              Compartilhar no WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Compartilhar no Facebook
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
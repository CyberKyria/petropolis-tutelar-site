import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GraduationCap, Clock, Users, Calendar, Star, User, Mail, Phone, MapPin } from "lucide-react";

const cursos = [
  {
    id: 1,
    titulo: "Formação Básica em Direitos da Criança",
    modalidade: "Online",
    duracao: "40 horas",
    valor: "Gratuito",
    descricao: "Curso introdutório sobre os direitos fundamentais estabelecidos pelo ECA",
    publico: "Comunidade em geral",
    certificado: true,
    avaliacao: 4.8,
    vagas: 50,
    categoria: "Básico"
  },
  {
    id: 2,
    titulo: "Capacitação para Conselheiros Tutelares",
    modalidade: "Presencial",
    duracao: "80 horas",
    valor: "R$ 150,00",
    descricao: "Formação completa para novos conselheiros tutelares",
    publico: "Candidatos a conselheiro",
    certificado: true,
    avaliacao: 4.9,
    vagas: 25,
    categoria: "Profissional"
  },
  {
    id: 3,
    titulo: "Prevenção da Violência Infantil",
    modalidade: "Híbrido",
    duracao: "30 horas",
    valor: "R$ 80,00",
    descricao: "Estratégias de prevenção e identificação da violência contra crianças",
    publico: "Educadores e profissionais",
    certificado: true,
    avaliacao: 4.7,
    vagas: 40,
    categoria: "Especialização"
  },
  {
    id: 4,
    titulo: "Mediação de Conflitos Familiares",
    modalidade: "Online",
    duracao: "25 horas",
    valor: "R$ 100,00",
    descricao: "Técnicas de mediação para resolver conflitos familiares",
    publico: "Profissionais da área social",
    certificado: true,
    avaliacao: 4.6,
    vagas: 30,
    categoria: "Especialização"
  },
  {
    id: 5,
    titulo: "Educação Infantil e Desenvolvimento",
    modalidade: "Presencial",
    duracao: "60 horas",
    valor: "R$ 200,00",
    descricao: "Aspectos do desenvolvimento infantil e práticas educativas",
    publico: "Professores e pedagogos",
    certificado: true,
    avaliacao: 4.8,
    vagas: 35,
    categoria: "Profissional"
  },
  {
    id: 6,
    titulo: "Primeiros Socorros para Crianças",
    modalidade: "Presencial",
    duracao: "12 horas",
    valor: "R$ 50,00",
    descricao: "Técnicas básicas de primeiros socorros específicas para crianças",
    publico: "Pais e cuidadores",
    certificado: true,
    avaliacao: 4.9,
    vagas: 20,
    categoria: "Básico"
  }
];

export default function CursosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroModalidade, setFiltroModalidade] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState<typeof cursos[0] | null>(null);

  const cursosFiltrados = cursos.filter(curso => {
    const matchCategoria = filtroCategoria === "" || curso.categoria === filtroCategoria;
    const matchModalidade = filtroModalidade === "" || curso.modalidade === filtroModalidade;
    return matchCategoria && matchModalidade;
  });

  const categorias = [...new Set(cursos.map(c => c.categoria))];
  const modalidades = [...new Set(cursos.map(c => c.modalidade))];

  const handleInscricao = (curso: typeof cursos[0]) => {
    setCursoSelecionado(curso);
    setMostrarFormulario(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <GraduationCap className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Cursos e Capacitações</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Aperfeiçoe seus conhecimentos sobre direitos da criança e adolescente 
              com nossos cursos especializados.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <select
              value={filtroCategoria}
              onChange={(e) => setFiltroCategoria(e.target.value)}
              className="px-4 py-2 border rounded-md bg-background"
            >
              <option value="">Todas as categorias</option>
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>
            <select
              value={filtroModalidade}
              onChange={(e) => setFiltroModalidade(e.target.value)}
              className="px-4 py-2 border rounded-md bg-background"
            >
              <option value="">Todas as modalidades</option>
              {modalidades.map(modalidade => (
                <option key={modalidade} value={modalidade}>{modalidade}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Lista de Cursos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursosFiltrados.map((curso) => (
              <Card key={curso.id} className="card-soft">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{curso.categoria}</Badge>
                    <Badge variant={curso.valor === "Gratuito" ? "default" : "outline"}>
                      {curso.valor}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{curso.titulo}</CardTitle>
                  <CardDescription>{curso.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{curso.duracao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{curso.modalidade}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{curso.vagas} vagas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">{curso.avaliacao} / 5.0</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full btn-primary"
                    onClick={() => handleInscricao(curso)}
                  >
                    Inscrever-se
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      {mostrarFormulario && cursoSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Inscrição no Curso</CardTitle>
              <CardDescription>{cursoSelecionado.titulo}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="nome">Nome Completo</Label>
                <Input id="nome" placeholder="Digite seu nome completo" />
              </div>
              
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <Label htmlFor="telefone">Telefone</Label>
                <Input id="telefone" placeholder="(xx) xxxxx-xxxx" />
              </div>
              
              <div>
                <Label htmlFor="profissao">Profissão/Área de Atuação</Label>
                <Input id="profissao" placeholder="Ex: Professor, Assistente Social" />
              </div>
              
              <div>
                <Label htmlFor="motivacao">Por que deseja fazer este curso?</Label>
                <Textarea 
                  id="motivacao" 
                  placeholder="Descreva sua motivação..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex gap-2">
                <Button 
                  className="btn-primary flex-1"
                  onClick={() => {
                    // Aqui seria o envio do formulário
                    alert("Inscrição realizada com sucesso!");
                    setMostrarFormulario(false);
                    setCursoSelecionado(null);
                  }}
                >
                  Confirmar Inscrição
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setMostrarFormulario(false);
                    setCursoSelecionado(null);
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Categorias */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Categorias de Cursos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-soft text-center">
              <CardHeader>
                <GraduationCap className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <CardTitle>Cursos Básicos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Introdução aos direitos da criança e adolescente para iniciantes
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroCategoria("Básico")}
                >
                  Ver Cursos
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto mb-4 text-green-500" />
                <CardTitle>Cursos Profissionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Capacitação para profissionais que atuam com crianças e adolescentes
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroCategoria("Profissional")}
                >
                  Ver Cursos
                </Button>
              </CardContent>
            </Card>

            <Card className="card-soft text-center">
              <CardHeader>
                <Star className="h-12 w-12 mx-auto mb-4 text-purple-500" />
                <CardTitle>Especializações</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cursos avançados em temas específicos da área
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFiltroCategoria("Especialização")}
                >
                  Ver Cursos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossos Parceiros
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Universidade Federal do Rio de Janeiro",
              "Secretaria Municipal de Educação",
              "Ministério Público do Estado do RJ",
              "Ordem dos Advogados do Brasil - RJ"
            ].map((parceiro, index) => (
              <Card key={index} className="card-soft text-center p-6">
                <div className="h-16 w-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-sm text-muted-foreground">{parceiro}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Invista na Proteção da Infância
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Capacite-se para fazer a diferença na vida de crianças e adolescentes
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Ver Todos os Cursos
          </Button>
        </div>
      </section>
    </div>
  );
}
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Send } from "lucide-react";

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
    setFormData({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Fale Conosco</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Entre em contato para esclarecimentos, sugestões ou denúncias. 
              Estamos aqui para ajudar a proteger nossas crianças e adolescentes.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário e Contato */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card className="card-soft">
              <CardHeader>
                <CardTitle>Envie sua mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input 
                      id="nome" 
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      placeholder="Digite seu nome completo" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="seu@email.com" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input 
                      id="telefone" 
                      value={formData.telefone}
                      onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                      placeholder="(xx) xxxxx-xxxx" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input 
                      id="assunto" 
                      required
                      value={formData.assunto}
                      onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                      placeholder="Qual o assunto da sua mensagem?" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="mensagem">Mensagem</Label>
                    <Textarea 
                      id="mensagem" 
                      required
                      value={formData.mensagem}
                      onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                      placeholder="Escreva sua mensagem aqui..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato */}
            <div className="space-y-6">
              <Card className="card-soft">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Telefones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>(24) 2233-0000 - Horário comercial</p>
                    <p>(24) 99999-0000 - Plantão 24h</p>
                    <p className="text-sm text-muted-foreground">
                      Para emergências: Disque 100
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <MapPin className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Endereço</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rua do Imperador, 350<br />
                    Centro - Petrópolis/RJ<br />
                    CEP: 25610-020
                  </p>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <Clock className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Horário de Funcionamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p>Segunda a Sexta: 8h às 17h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Plantão 24h para emergências</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Facebook className="h-4 w-4 mr-2" />
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-16 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Nossa Localização
          </h2>
          <div className="bg-gray-200 rounded-lg p-16 text-center">
            <MapPin className="h-24 w-24 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">
              Mapa interativo será carregado aqui
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Rua do Imperador, 350 - Centro, Petrópolis/RJ
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
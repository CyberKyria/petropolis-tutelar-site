import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Início", path: "/" },
  { name: "O que é o Conselho Tutelar", path: "/conselho-tutelar" },
  { name: "Conheça o ECA", path: "/eca" },
  { name: "Como Denunciar", path: "/como-denunciar" },
  { name: "Materiais Educativos", path: "/materiais" },
  { name: "Cursos e Capacitações", path: "/cursos" },
  { name: "Fale Conosco", path: "/contato" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">
              Conselho Tutelar Petrópolis
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Emergency Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              className="btn-danger"
              onClick={() => window.open("tel:100", "_self")}
            >
              <Phone className="h-4 w-4 mr-2" />
              DENUNCIAR AGORA
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Button 
                  className="btn-danger w-full"
                  onClick={() => {
                    window.open("tel:100", "_self");
                    setIsOpen(false);
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  DENUNCIAR AGORA
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
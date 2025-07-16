import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ConselhoTutelarPage from "./pages/ConselhoTutelarPage";
import EcaPage from "./pages/EcaPage";
import ComoDenunciarPage from "./pages/ComoDenunciarPage";
import MateriaisPage from "./pages/MateriaisPage";
import CursosPage from "./pages/CursosPage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/conselho-tutelar" element={<ConselhoTutelarPage />} />
            <Route path="/eca" element={<EcaPage />} />
            <Route path="/como-denunciar" element={<ComoDenunciarPage />} />
            <Route path="/materiais" element={<MateriaisPage />} />
            <Route path="/cursos" element={<CursosPage />} />
            <Route path="/contato" element={<ContatoPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

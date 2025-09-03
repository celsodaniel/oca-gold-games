import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Store from "./pages/Store";
import Category from "./pages/Category";
import GameDetail from "./pages/GameDetail";
import Promotions from "./pages/Promotions";
import News from "./pages/News";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { NewReleases } from "./pages/NewReleases";
import { BestSellers } from "./pages/BestSellers";
import { FreeGames } from "./pages/FreeGames";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import { Refunds } from "./pages/Refunds";
import { ServerStatus } from "./pages/ServerStatus";
import Careers from "./pages/Careers";
import { Press } from "./pages/Press";
import Privacy from "./pages/Privacy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/store" element={<Store />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/game/:id" element={<GameDetail />} />
          <Route path="/promotions" element={<Promotions />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/best-sellers" element={<BestSellers />} />
          <Route path="/free-games" element={<FreeGames />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/refunds" element={<Refunds />} />
          <Route path="/server-status" element={<ServerStatus />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Press />} />
          <Route path="/privacy" element={<Privacy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;

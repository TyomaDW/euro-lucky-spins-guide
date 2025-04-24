
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import CookiePolicy from "./pages/CookiePolicy";
import Disclosure from "./pages/Disclosure";
import Terms from "./pages/Terms";
import Casinogames from "./pages/Casinogames";
import Roulette from "./pages/Roulette";
import Slots from "./pages/Slots";
import Livecasino from "./pages/Livecasino";
import RankingMethodology from "./pages/Rankingmethodology";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/CookiePolicy" element={<CookiePolicy />} />
          <Route path="/Disclosure" element={<Disclosure />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/casino-games" element={<Casinogames />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/live-casino" element={<Livecasino />} />
          <Route path="/ranking-methodology" element={<RankingMethodology />} />
          <Route path="/news" element={<News />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

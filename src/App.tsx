
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeToggle } from "./components/ThemeToggle";
import TextToSpeech from "./components/TextToSpeech";
import { TranslationProvider } from "./context/TranslationContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <div className="fixed top-4 right-4 z-50 flex gap-2">
          <ThemeToggle />
        </div>
        <TextToSpeech />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;

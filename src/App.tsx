import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { forwardRef, lazy, Suspense } from "react";
import Index from "./pages/Index";

// Code-split secondary pages so the homepage doesn't pull in their assets
const StylePage = lazy(() => import("./pages/StylePage"));
const Team = lazy(() => import("./pages/Team"));
const PublicOffer = lazy(() => import("./pages/PublicOffer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const YandexConsent = lazy(() => import("./pages/YandexConsent"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = forwardRef(() => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/style/:styleId" element={<StylePage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/public-offer" element={<PublicOffer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/yandex-consent" element={<YandexConsent />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
));
App.displayName = "App";

export default App;
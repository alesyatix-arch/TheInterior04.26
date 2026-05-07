import { useEffect, forwardRef, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StylePicker from "@/components/StylePicker";

// Defer below-the-fold sections so Hero paints first
const ProjectExamples = lazy(() => import("@/components/ProjectExamples"));
const Services = lazy(() => import("@/components/Services"));
const WhyLower = lazy(() => import("@/components/WhyLower"));
const Calculator = lazy(() => import("@/components/Calculator"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const ConsultationCTA = lazy(() => import("@/components/ConsultationCTA"));
const ValueProposition = lazy(() => import("@/components/ValueProposition"));
const Contacts = lazy(() => import("@/components/Contacts"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[300px]" />;

const Index = forwardRef<HTMLDivElement>((_, ref) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Header />
      <Hero />
      <StylePicker />
      <Suspense fallback={<SectionFallback />}>
        <ProjectExamples />
        <Services />
        <Calculator />
        <TeamSection />
        <WhyLower />
        <ConsultationCTA />
        <ValueProposition />
        <Contacts />
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = "Index";

export default Index;

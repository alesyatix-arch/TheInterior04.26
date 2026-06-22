import { useEffect, forwardRef, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
<<<<<<< HEAD
import StyleStrip from "@/components/StyleStrip";
import CashbackSection from "@/components/CashbackSection";
import Calculator from "@/components/Calculator";
import SEO from "@/components/SEO";
import { faqs } from "@/components/FAQ";

// Defer below-the-fold sections
const WhyLower = lazy(() => import("@/components/WhyLower"));
const Services = lazy(() => import("@/components/Services"));
const ComparisonTable = lazy(() => import("@/components/ComparisonTable"));
const StylePicker = lazy(() => import("@/components/StylePicker"));
const ProjectExamples = lazy(() => import("@/components/ProjectExamples"));
const Quiz = lazy(() => import("@/components/Quiz"));
const ProjectOutcome = lazy(() => import("@/components/ProjectOutcome"));
const FounderWord = lazy(() => import("@/components/FounderWord"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const FAQ = lazy(() => import("@/components/FAQ"));
const ConsultationCTA = lazy(() => import("@/components/ConsultationCTA"));
=======
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
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
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

<<<<<<< HEAD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <SEO
        title="Твой Интерьер — авторский дизайн-проект квартиры под ключ"
        description="Авторский дизайн-проект квартиры за фиксированную стоимость. В 2 раза дешевле и в 3 раза быстрее обычного: всё продумано заранее, вам осталось лишь сделать выбор."
        path="/"
        jsonLd={faqJsonLd}
      />
      <Header />
      <Hero />
      <CashbackSection />
      <Calculator />
      <StyleStrip />
      <Suspense fallback={<SectionFallback />}>
        <WhyLower />
        <Services />
        <ComparisonTable />
        <StylePicker />
        <ProjectExamples />
        <Quiz />
        <ProjectOutcome />
        <FounderWord />
        <TeamSection />
        <FAQ />
        <ConsultationCTA />
=======
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
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
        <Footer />
      </Suspense>
    </div>
  );
});

Index.displayName = "Index";

export default Index;

<<<<<<< HEAD
import { useEffect, useState } from "react";
import { blurPlaceholders } from "@/lib/blurPlaceholders";

const slides = [
  { src: "/hero-slide-1.webp", blur: blurPlaceholders.heroSlide1 },
  { src: "/hero-slide-2.webp", blur: blurPlaceholders.heroSlide2 },
  { src: "/hero-slide-3.webp", blur: blurPlaceholders.heroSlide3 },
  { src: "/hero-slide-4.webp", blur: blurPlaceholders.heroSlide4 },
];

const badges = [
  { label: "Срок проекта", value: "от 7 до 21 дня" },
  { label: "Стоимость", value: "от 900 ₽/м²" },
  { label: "Кэш-бек", value: "до 100% на проект" },
  { label: "Ведомость", value: "готовая комплектация" },
];

const bullets = [
  "от 900 ₽/м²",
  "срок от 7 до 21 дня",
  "3 формата проекта",
  "готовые интерьерные решения",
  "комплектация материалов, мебели и света",
  "переход к реализации с сопровождением",
  "до 100% кэш-бек на дизайн-проект",
];

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));
=======
import { useEffect, useRef, useState } from "react";
import designerImg from "@/assets/hero-designer-girl.webp";
import slide1 from "@/assets/hero-slide-1.webp";
import slide2 from "@/assets/hero-slide-2.webp";
import slide3 from "@/assets/hero-slide-3.webp";
import slide4 from "@/assets/hero-slide-4.webp";
import { blurPlaceholders } from "@/lib/blurPlaceholders";
import { mountBitrixForm } from "@/lib/bitrixForm";

const slides = [
  { src: slide1, blur: blurPlaceholders.heroSlide1 },
  { src: slide2, blur: blurPlaceholders.heroSlide2 },
  { src: slide3, blur: blurPlaceholders.heroSlide3 },
  { src: slide4, blur: blurPlaceholders.heroSlide4 },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map(() => false));
  const [designerLoaded, setDesignerLoaded] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
<<<<<<< HEAD
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-background pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12 2xl:px-16 max-w-[1600px]">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left column — content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[3px] w-10 bg-primary" />
              <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-[0.22em] text-primary">
                Дизайн-проект квартиры
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] 2xl:text-[96px] leading-[1.03] tracking-tight text-foreground">
              Дизайн-проект квартиры для ремонта в <span className="text-primary">2 раза</span> выгоднее и в <span className="text-primary">3 раза</span> быстрее
            </h1>

            {/* Subhead */}
            <p className="font-body text-lg sm:text-xl lg:text-2xl text-foreground/75 leading-relaxed max-w-2xl">
              Вы получаете планировку, визуализации или полный дизайн-проект на основе авторских решений, адаптированных под вашу квартиру.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => scrollTo("#calculator")}
                className="bg-primary text-primary-foreground font-body font-bold text-base lg:text-lg px-9 lg:px-10 py-5 shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all"
              >
                Рассчитать стоимость проекта
              </button>
            </div>

            {/* Bullets */}
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-xl pt-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 font-body text-sm font-medium text-foreground/80"
                >
                  <span className="h-1.5 w-1.5 bg-primary shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — image carousel */}
          <div className="relative lg:mt-14 xl:mt-16">
            <div className="relative w-full aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-foreground/5 shadow-2xl">


              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                    i === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundImage: `url(${slide.blur})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={slide.src}
                    alt=""
                    aria-hidden="true"
                    width="1200"
                    height="1500"
                    onLoad={() =>
                      setLoaded((prev) => {
                        if (prev[i]) return prev;
                        const next = [...prev];
                        next[i] = true;
                        return next;
                      })
                    }
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      loaded[i] ? "opacity-100" : "opacity-0"
                    }`}
                    fetchPriority={i === 0 ? "high" : "low"}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              ))}

              {/* Slide indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Слайд ${i + 1}`}
                    className={`h-1 transition-all ${
                      i === activeIndex ? "w-8 bg-background" : "w-4 bg-background/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating badge — rotates with slides */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-background shadow-xl border border-border px-7 py-5 min-w-[220px] max-w-[260px] overflow-hidden">
              {badges.map((b, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-700 ${
                    i === activeIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0 px-7 py-5"
                  }`}
                >
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/65 mb-1">
                    {b.label}
                  </p>
                  <p className={`font-heading text-foreground leading-tight ${i <= 1 ? "text-2xl" : "text-base"}`}>
                    {b.value}
                  </p>
                </div>
              ))}
=======
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  // Embed Bitrix24 form inline within the hero
  useEffect(() => {
    if (!formRef.current) return;
    return mountBitrixForm(formRef.current);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      {/* Background Carousel with blur placeholders */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[4500ms] ease-in-out ${
              i === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.blur})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={slide.src}
              alt=""
              aria-hidden="true"
              onLoad={() =>
                setLoaded((prev) => {
                  if (prev[i]) return prev;
                  const next = [...prev];
                  next[i] = true;
                  return next;
                })
              }
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                loaded[i] ? "opacity-100" : "opacity-0"
              }`}
              fetchPriority={i === 0 ? "high" : "low"}
              loading="eager"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/80" />

      {/* Top offer headline — full width */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-20">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-extrabold uppercase leading-[1.15] tracking-tight text-background text-center max-w-6xl mx-auto mb-12 lg:mb-16 [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
          <span className="block">Дизайн-проект квартиры</span>
          <span className="block">для ремонта</span>
          <span className="block">в <span className="underline decoration-2 underline-offset-[6px]">2</span> раза дешевле и в <span className="underline decoration-2 underline-offset-[6px]">3</span> раза быстрее</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          {/* Left: designer photo ABOVE, captions BELOW */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div
              className="w-full max-w-md lg:max-w-xl mb-4 lg:mb-6 relative"
              style={{
                backgroundImage: `url(${blurPlaceholders.heroDesignerGirl})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <img
                src={designerImg}
                alt="Дизайнер интерьера"
                onLoad={() => setDesignerLoaded(true)}
                className={`w-full object-contain drop-shadow-2xl transition-opacity duration-700 ${
                  designerLoaded ? "opacity-100" : "opacity-0"
                }`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="space-y-2 text-center">
              <p className="whitespace-nowrap text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-background leading-none tracking-tight">
                от <span className="text-primary">900 ₽</span> /м²
              </p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-background/95 leading-tight">
                Готовый проект от 7 дней
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="lg:col-span-5">
            <div className="bg-background rounded-sm p-5 lg:p-6 shadow-2xl">
              <h2 className="text-lg lg:text-xl font-heading font-bold text-foreground mb-1 text-center">
                Рассчитайте стоимость дизайн-проекта
              </h2>
              <p className="text-sm font-body text-primary font-semibold text-center mb-4">
                БЕСПЛАТНО
              </p>
              <div ref={formRef} className="min-h-[380px]" />
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

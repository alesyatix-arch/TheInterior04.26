import { useEffect, useState } from "react";
import { blurPlaceholders } from "@/lib/blurPlaceholders";

const BASE = import.meta.env.BASE_URL;

const slides = [
  { src: `${BASE}hero-slide-1.webp`, blur: blurPlaceholders.heroSlide1 },
  { src: `${BASE}hero-slide-2.webp`, blur: blurPlaceholders.heroSlide2 },
  { src: `${BASE}hero-slide-3.webp`, blur: blurPlaceholders.heroSlide3 },
  { src: `${BASE}hero-slide-4.webp`, blur: blurPlaceholders.heroSlide4 },
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
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

            {/* Floating badge */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
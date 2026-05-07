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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

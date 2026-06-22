import { useEffect, useRef } from "react";
<<<<<<< HEAD
import designerAsset from "@/assets/consultation-man-full.png.asset.json";
const designerImg = designerAsset.url;
=======
import designerImg from "@/assets/consultation-man.webp";
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
import { useInView } from "@/hooks/useInView";
import { mountBitrixForm } from "@/lib/bitrixForm";

const ConsultationCTA = () => {
  const [sectionRef, inView] = useInView<HTMLElement>("400px");
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !formRef.current) return;
    return mountBitrixForm(formRef.current);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      id="consultation"
      className="relative py-20 lg:py-28 bg-secondary/40 overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              Консультация
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground leading-tight">
              Получить консультацию
            </h2>
            <p className="mt-4 text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Оставьте номер — перезвоним и подскажем,
              как лучше реализовать ваш проект
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Designer image */}
            <div className="hidden md:flex justify-center">
              <img
                src={designerImg}
                alt="Дизайнер интерьера"
                className="w-full max-w-md object-contain drop-shadow-2xl"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Form card */}
            <div className="bg-background rounded-2xl shadow-xl shadow-foreground/5 border border-border/60 p-6 sm:p-8 lg:p-10">
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-foreground text-center mb-2">
                Оставьте заявку
              </h3>
              <p className="text-sm font-body text-primary font-semibold text-center mb-6">
                Перезвоним в течение 15 минут
              </p>
              <div ref={formRef} className="min-h-[360px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;

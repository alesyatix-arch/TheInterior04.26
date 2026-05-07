import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { mountBitrixForm } from "@/lib/bitrixForm";

const RequestForm = () => {
  const [sectionRef, inView] = useInView<HTMLElement>("400px");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView || !containerRef.current) return;
    return mountBitrixForm(containerRef.current);
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative bg-foreground overflow-hidden" id="request">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
          {/* Left — messaging */}
          <div className="flex flex-col justify-center py-20 lg:py-28 lg:pr-16">
            <span className="text-xs font-body font-medium uppercase tracking-[0.25em] text-primary mb-6">
              Оставьте заявку
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-background leading-tight mb-6">
              Начнём ваш
              <br />
              проект сегодня
            </h2>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <p className="text-lg font-body text-background/50 max-w-md leading-relaxed">
              Получите расчёт стоимости и бесплатную консультацию от нас
            </p>
          </div>

          {/* Right — Bitrix24 embedded form */}
          <div className="flex items-center py-12 lg:py-28">
            <div ref={containerRef} className="w-full min-h-[500px]" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </section>
  );
};

export default RequestForm;

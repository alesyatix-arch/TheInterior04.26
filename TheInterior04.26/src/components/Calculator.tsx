<<<<<<< HEAD
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

const formats = [
  { id: "planning", label: "Планировочное решение", price: 900 },
  { id: "concept", label: "Эскизный дизайн-проект", price: 1900 },
  { id: "full", label: "Полный дизайн-проект", price: 2900 },
] as const;

const formatPrice = (n: number) =>
  new Intl.NumberFormat("ru-RU").format(n) + " ₽";

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Calculator = () => {
  const [area, setArea] = useState<number>(60);
  const [formatId, setFormatId] = useState<typeof formats[number]["id"]>("concept");

  const total = useMemo(() => {
    const f = formats.find((x) => x.id === formatId)!;
    return Math.max(0, Math.round(area)) * f.price;
  }, [area, formatId]);

  const areaPct = ((area - 20) / (300 - 20)) * 100;

  return (
    <section className="py-20 lg:py-28 bg-background" id="calculator">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative accent corners */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-primary pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-primary pointer-events-none" />

          <div className="bg-background border border-foreground/10 p-8 sm:p-12 lg:p-16 text-foreground relative overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
            {/* Animated red glow */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center space-y-4 mb-12 lg:mb-14 relative">
              <span className="inline-flex items-center gap-3 text-xs font-body font-bold uppercase tracking-[0.22em] text-primary">
                <span className="h-[2px] w-8 bg-primary" />
                Калькулятор
                <span className="h-[2px] w-8 bg-primary" />
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
                Рассчитайте стоимость <span className="text-primary">за&nbsp;30&nbsp;секунд</span>
              </h2>
            </div>

            <div className="space-y-10 lg:space-y-12 relative">
              {/* Area */}
              <div className="space-y-5">
                <div className="flex items-end justify-between">
                  <label htmlFor="area" className="font-body text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
                    Площадь квартиры
                  </label>
                  <span className="font-heading text-3xl lg:text-4xl text-foreground">
                    {Math.round(area)} <span className="text-lg font-medium text-foreground/70">м²</span>
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="area"
                    type="range"
                    min={20}
                    max={300}
                    step={1}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer relative z-10"
                  />
                  {/* Custom track fill indicator */}
                  <div
                    className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary/20 w-full"
                    aria-hidden
                  >
                    <div
                      className="h-full bg-primary transition-all duration-150"
                      style={{ width: `${areaPct}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-foreground/65">
                  <span>20 м²</span>
                  <span>300 м²</span>
                </div>
              </div>

              {/* Format */}
              <div className="grid sm:grid-cols-3 gap-3 lg:gap-4">
                {formats.map((f) => {
                  const active = f.id === formatId;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFormatId(f.id)}
                      className={`group relative text-left p-5 lg:p-6 border-2 transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/30 -translate-y-0.5"
                          : "border-foreground/15 bg-background text-foreground hover:border-primary hover:-translate-y-0.5 hover:shadow-md"
                      }`}
                    >
                      <div className={`font-heading text-sm lg:text-base leading-snug mb-1.5 ${active ? "text-primary-foreground" : "text-foreground"}`}>
                        {f.label}
                      </div>
                      <div className={`font-body text-xs font-medium ${active ? "text-primary-foreground/80" : "text-foreground/70 group-hover:text-primary"}`}>
                        {f.price} ₽/м²
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Result */}
              <div className="flex flex-col md:flex-row items-center md:items-end md:justify-between gap-6 pt-8 lg:pt-10 border-t border-foreground/10">
                <div className="text-center md:text-left">
                  <div className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/70 mb-2">
                    Итоговая стоимость
                  </div>
                  <div
                    key={total}
                    className="font-heading text-4xl lg:text-5xl text-primary animate-in fade-in slide-in-from-bottom-2 duration-300"
                  >
                    {formatPrice(total)}
                  </div>
                </div>
                <button
                  onClick={() => scrollTo("#consultation")}
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-bold text-base lg:text-lg px-9 lg:px-10 py-5 hover:bg-foreground transition-colors shadow-xl shadow-primary/25"
                >
                  Получить расчет
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
            <p className="text-center font-body text-xs text-foreground/70 mt-8 lg:mt-10 relative">
              При переходе к реализации вы можете получить до 100% стоимости проекта кэш-беком.
            </p>
=======
import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

const MARQUIZ_ID = "69f209a64d59b50019b79644";

const Calculator = () => {
  const [sectionRef, inView] = useInView<HTMLDivElement>("400px");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inView) return;
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const iframe = document.createElement("iframe");
    iframe.src = `https://quiz.marquiz.ru/${MARQUIZ_ID}?inline=true&disableSession=true&disableCookie=true&disableScroll=true&t=${Date.now()}`;
    iframe.title = "Квиз — подбор интерьера";
    iframe.loading = "lazy";
    iframe.allow = "clipboard-write; geolocation; microphone; camera";
    iframe.style.cssText = "width:100%;border:0;display:block;min-height:720px;";
    iframe.setAttribute("scrolling", "no");
    container.appendChild(iframe);

    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "object" || !e.data) return;
      const data = e.data as { type?: string; height?: number };
      if (data.type === "marquiz:height" && typeof data.height === "number") {
        iframe.style.height = `${Math.max(600, data.height)}px`;
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-secondary/50 relative overflow-hidden"
      id="calculator"
    >
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background border border-border shadow-xl shadow-foreground/5 overflow-hidden">
            <div ref={containerRef} className="w-full" style={{ minHeight: 720 }} />
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;

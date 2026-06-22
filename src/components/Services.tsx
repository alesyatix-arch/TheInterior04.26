import { Check, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgFull from "@/assets/package-full.webp";
import imgPlanningAsset from "@/assets/package-planning-floorplan.png.asset.json";
import imgConceptAsset from "@/assets/package-concept-user.png.asset.json";

const imgPlanning = imgPlanningAsset.url;
const imgConcept = imgConceptAsset.url;

const packages: Array<{
  number: string;
  name: string;
  image: string;
  price: string;
  timeline: string;
  features: string[];
  recommended?: boolean;
  fit?: "contain" | "cover";
}> = [
  {
    number: "01",
    name: "Планировка",
    image: imgPlanning,
    fit: "contain",
    price: "900",
    timeline: "от 7 рабочих дней",
    features: [
      "Обмерный план",
      "Индивидуальное планировочное решение в 2-х вариантах + итоговое с учётом правок",
    ],
  },
  {
    number: "02",
    name: "Эскизный проект",
    image: imgConcept,
    fit: "cover",
    price: "1 900",
    timeline: "от 12 рабочих дней",
    features: [
      "Всё из формата «Планировка»",
      "Адаптация выбранного стиля для вашего объекта (3D-визуализация)",
      "Ведомость материалов и закупок",
    ],
    recommended: true,
  },
  {
    number: "03",
    name: "Полный проект",
    image: imgFull,
    price: "2 900",
    timeline: "от 19 рабочих дней",
    features: [
      "Всё из формата «Эскизный проект»",
      "Строительные планы, включая развёртки",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="services">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-primary mb-6">
            Форматы проекта
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground">
            Выберите формат проекта под вашу задачу
          </h2>
        </div>

        {/* Packages Grid — equal height, single line */}
        <div className="grid md:grid-cols-3 max-w-6xl mx-auto">
          {packages.map((pkg, index) => {
            const isDark = pkg.recommended;
            const isFirst = index === 0;
            const isLast = index === packages.length - 1;
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col ${
                  isDark
                    ? "bg-foreground text-background z-10"
                    : `bg-background border border-border ${isFirst ? "md:border-r-0" : ""} ${isLast ? "md:border-l-0" : ""}`
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1.5 text-xs font-body font-semibold uppercase tracking-[0.15em] whitespace-nowrap z-10">
                    Рекомендуем
                  </div>
                )}

                {/* Top image */}
                <div className={`aspect-[4/3] overflow-hidden flex items-center justify-center ${isDark ? "bg-background" : "bg-muted"}`}>
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full ${pkg.fit === "contain" ? "object-contain" : "object-cover"}`}
                  />
                </div>

                <div className="flex flex-col flex-1 px-8 lg:px-10 py-10 lg:py-12">
                {/* Number + Name */}
                <div className="mb-8">
                  <span
                    className={`text-xs font-body tracking-[0.2em] uppercase mb-3 block ${
                      isDark ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    Формат {pkg.number}
                  </span>
                  <h3
                    className={`text-3xl lg:text-4xl font-heading font-semibold ${
                      isDark ? "text-background" : "text-foreground"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                </div>

                {/* Price */}
                <div className={`flex items-baseline gap-1.5 mb-10 pb-10 border-b border-dashed ${isDark ? "border-background/20" : "border-border"}`}>
                  <span
                    className={`text-5xl lg:text-6xl font-heading font-bold tracking-tight ${
                      isDark ? "text-background" : "text-foreground"
                    }`}
                  >
                    {pkg.price}
                  </span>
                  <span
                    className={`text-lg font-body ${
                      isDark ? "text-background/75" : "text-muted-foreground"
                    }`}
                  >
                    ₽/м²
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-5 mb-10 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span
                        className={`text-base lg:text-lg font-body leading-relaxed ${
                          isDark ? "text-background/90" : "text-foreground/70"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Timeline */}
                <div
                  className={`mb-8 text-base font-body ${
                    isDark ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{pkg.timeline}</span>
                  </div>
                  <div className={`text-sm mt-1 ${isDark ? "text-primary" : "text-primary"}`}>
                    в зависимости от площади
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant={isDark ? "hero" : "heroOutline"}
                  className="w-full group text-base"
                  asChild
                >
                  <a href="#consultation">
                    {pkg.price} ₽/м²
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

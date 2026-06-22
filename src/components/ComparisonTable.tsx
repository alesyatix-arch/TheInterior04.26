import { Check, X } from "lucide-react";

type Row = {
  name: string;
  planning: string | boolean;
  concept: string | boolean;
  full: string | boolean;
};

const rows: Row[] = [
  { name: "До 2 вариантов планировки", planning: true, concept: true, full: true },
  { name: "Итоговый план квартиры", planning: true, concept: true, full: true },
  { name: "Выбор стиля из каталога", planning: false, concept: true, full: true },
  { name: "Адаптация стиля под квартиру", planning: false, concept: true, full: true },
  { name: "Альбом изображений жилых помещений", planning: false, concept: true, full: true },
  { name: "Ведомость материалов, мебели и света", planning: false, concept: true, full: true },
  { name: "Количество материалов и позиций", planning: false, concept: "Частично", full: true },
  { name: "Рабочие чертежи для ремонта", planning: false, concept: false, full: true },
  { name: "Подходит для передачи строителям", planning: "Частично", concept: "Частично", full: true },
  { name: "Возможен кэш-бек", planning: "По условиям программы", concept: "По условиям программы", full: "По условиям программы" },
];

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const renderValue = (value: string | boolean, dark = false) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className={`w-5 h-5 mx-auto stroke-[2.5] ${dark ? "text-background" : "text-primary"}`} />
    ) : (
      <X className={`w-5 h-5 mx-auto ${dark ? "text-background/30" : "text-foreground/70"}`} />
    );
  }
  return (
    <span className={`font-body text-xs sm:text-sm leading-snug ${dark ? "text-background/90" : "text-foreground/80"}`}>
      {value}
    </span>
  );
};

const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.25em] text-primary mb-5">
            Сравнение
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
            Чем отличаются форматы проекта
          </h2>

        </div>

        <div className="max-w-5xl mx-auto border border-border overflow-x-auto">
          <table className="w-full min-w-[640px] bg-background">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="text-left p-3 sm:p-4 lg:p-5 font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-base">
                  Что входит
                </th>
                <th className="p-3 sm:p-4 lg:p-5 font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-base">
                  <div>Планировка</div>
                  <div className="font-body font-normal text-[10px] sm:text-xs text-foreground/75 mt-1">900 ₽/м²</div>
                </th>
                <th className="p-3 sm:p-4 lg:p-5 font-heading font-semibold text-foreground text-xs sm:text-sm lg:text-base">
                  <div>Эскизный проект</div>
                  <div className="font-body font-normal text-[10px] sm:text-xs text-foreground/75 mt-1">1 900 ₽/м²</div>
                </th>
                <th className="p-3 sm:p-4 lg:p-5 font-heading font-semibold text-primary-foreground text-xs sm:text-sm lg:text-base bg-primary">
                  <div>Полный проект</div>
                  <div className="font-body font-normal text-[10px] sm:text-xs text-primary-foreground/80 mt-1">2 900 ₽/м²</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.name} className="border-b border-border last:border-b-0">
                  <td className="p-3 sm:p-4 lg:p-5 font-body text-xs sm:text-sm lg:text-base text-foreground">
                    {r.name}
                  </td>
                  <td className="p-3 sm:p-4 lg:p-5 text-center">
                    {renderValue(r.planning)}
                  </td>
                  <td className="p-3 sm:p-4 lg:p-5 text-center">
                    {renderValue(r.concept)}
                  </td>
                  <td className="p-3 sm:p-4 lg:p-5 text-center bg-primary/10">
                    {renderValue(r.full)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="text-center mt-10 lg:mt-12">
          <button
            onClick={() => scrollTo("#consultation")}
            className="bg-foreground text-background font-body font-semibold text-sm sm:text-base px-7 py-4 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Не знаете, что выбрать? Получите консультацию
          </button>

        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

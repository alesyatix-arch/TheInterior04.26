import { useMemo, useState } from "react";
import { Check, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type FeatureItem = string | { label: string; sub: string[] };

type FeatureGroup = {
  category: string;
  items: FeatureItem[];
};

const baseGroups: FeatureGroup[] = [
  {
    category: "Отделка",
    items: [
      "Напольное покрытие — кварц-винил (ламинат)",
      "Санузел микс: плитка + влагостойкая покраска",
      "Натяжной потолок с теневым примыканием с накладным карнизом для штор",
    ],
  },
  {
    category: "Сантехника и климат",
    items: [
      "Сантехника: полный комплект оптимальный по стоимости",
      "1 кондиционер",
      "Радиаторы — биметалл",
    ],
  },
  {
    category: "Кухня и техника",
    items: [
      "Техника: полный комплект оптимальный по стоимости",
      "Стиральная машина",
      "Кухня не в потолок, открытые полки, готовые шкафы",
    ],
  },
  {
    category: "Двери, мебель, электрика",
    items: [
      "Двери 2100 см",
      {
        label: "Мебель в комнаты и санузел — комплект 1, дизайнерская",
        sub: [
          "Кровать",
          "Диван",
          "Прикроватные тумбочки",
          "Кофейный столик",
          "Шкафы",
          "Пуфик",
          "Обеденная группа",
          "Тумба с раковиной в санузел",
        ],
      },
      "Розетки стандартные",
    ],
  },
];

type Option = {
  id: string;
  category: string;
  title: string;
  description?: string;
};

const optionalCatalog: Option[] = [
  // Отделка
  { id: "floor-engineered", category: "Отделка", title: "Инженерная доска", description: "Вместо кварц-винила" },
  { id: "ceiling-shadow", category: "Отделка", title: "Ниша для карниза", description: "Вместо накладного карниза" },
  { id: "wc-fully-tiled", category: "Отделка", title: "Санузел полностью в плитке" },
  { id: "niches-lighting", category: "Отделка", title: "Подсветка в нишах для штор и потолка в санузле и ванной" },

  // Сантехника и климат
  { id: "santech-premium", category: "Сантехника и климат", title: "Сантехника премиум", description: "Аналоги премиум брендов" },
  { id: "ac-extra", category: "Сантехника и климат", title: "Дополнительный кондиционер" },
  { id: "warm-floor", category: "Сантехника и климат", title: "Тёплый пол" },
  { id: "hygiene-shower", category: "Сантехника и климат", title: "Гигиенический душ" },
  { id: "water-heater", category: "Сантехника и климат", title: "Проточный водонагреватель" },
  { id: "radiators-tube", category: "Сантехника и климат", title: "Радиаторы трубчатые" },

  // Кухня и техника
  { id: "tech-samsung", category: "Кухня и техника", title: "Техника премиум", description: "Аналоги премиум брендов" },
  { id: "washer-dryer", category: "Кухня и техника", title: "Стиральная машина + сушилка 2 в 1" },
  { id: "kitchen-custom", category: "Кухня и техника", title: "Кухня в потолок, индивидуально", description: "С акриловой / каменной столешницей" },

  // Мебель и декор
  { id: "furniture-premium", category: "Мебель и декор", title: "Мебель — комплект 2, премиум", description: "Диван, обеденная группа, кровать, зеркало с подсветкой и тумба с раковиной в санузле" },
  { id: "doors-2300", category: "Мебель и декор", title: "Двери 2300 см" },
  { id: "sockets-premium", category: "Мебель и декор", title: "Розетки премиум с тонкой рамкой" },
  { id: "staging", category: "Мебель и декор", title: "Декорирование", description: "Постеры, текстиль, ковры, шторы" },
];

const Packages = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const groupedOptions = useMemo(() => {
    const map = new Map<string, Option[]>();
    optionalCatalog.forEach((o) => {
      if (!map.has(o.category)) map.set(o.category, []);
      map.get(o.category)!.push(o);
    });
    return Array.from(map.entries());
  }, []);

  const selectedCount = selected.size;

  const handleSubmit = () => {
    const chosen = optionalCatalog.filter((o) => selected.has(o.id)).map((o) => o.title);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("selectedOptions", JSON.stringify(chosen));
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-secondary/30" id="packages">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-primary mb-6">
            Комплектация
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground mb-4">
            Соберите свой проект
          </h2>
          <p className="text-lg lg:text-xl font-body text-muted-foreground">
            Базовое наполнение уже включено. Отметьте дополнительные опции, которые хотите добавить.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* LEFT — Базовое наполнение */}
          <div className="bg-background border border-border p-8 lg:p-10">
            <div className="flex items-start justify-between mb-2 gap-4">
              <div>
                <span className="inline-block text-xs font-body uppercase tracking-[0.2em] text-primary mb-3">
                  Включено в проект
                </span>
                <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground">
                  Универсальная
                </h3>
              </div>
              <span className="text-xs font-body text-muted-foreground border border-border px-2.5 py-1 shrink-0">
                01
              </span>
            </div>
            <p className="text-base font-body text-muted-foreground mb-8">
              Доступный, сбалансированный, стильный набор материалов и техники.
            </p>

            <div className="space-y-7">
              {baseGroups.map((group) => (
                <div key={group.category}>
                  <div className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-foreground/50 mb-3">
                    {group.category}
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => {
                      if (typeof item === "string") {
                        return (
                          <li key={item} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="text-base font-body text-foreground/85 leading-snug">
                              {item}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={item.label} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 stroke-[2.5]" />
                          <div className="flex-1">
                            <span className="text-base font-body text-foreground/85 leading-snug block mb-2">
                              {item.label}
                            </span>
                            <ul className="space-y-1 pl-1 border-l-2 border-primary/30">
                              {item.sub.map((s) => (
                                <li
                                  key={s}
                                  className="text-sm font-body text-foreground/70 leading-snug pl-3"
                                >
                                  {s}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — Доп. опции (выбор) */}
          <div className="bg-foreground text-background p-8 lg:p-10 relative">
            <div className="absolute -top-3 right-8 bg-primary text-primary-foreground px-4 py-1.5 text-xs font-body font-semibold uppercase tracking-[0.15em]">
              На выбор
            </div>

            <div className="flex items-start justify-between mb-2 gap-4">
              <div>
                <span className="inline-block text-xs font-body uppercase tracking-[0.2em] text-primary mb-3">
                  Дополнительно
                </span>
                <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-background">
                  Дополнительные опции
                </h3>
              </div>
              <span className="text-xs font-body text-background/50 border border-background/20 px-2.5 py-1 shrink-0">
                02
              </span>
            </div>
            <p className="text-base font-body text-background/60 mb-8">
              Отметьте, что хотите добавить — мы учтём это при расчёте.
            </p>

            <div className="space-y-7 mb-8">
              {groupedOptions.map(([category, items]) => (
                <div key={category}>
                  <div className="text-xs font-body font-semibold uppercase tracking-[0.15em] text-background/50 mb-3">
                    {category}
                  </div>
                  <ul className="space-y-1">
                    {items.map((opt) => {
                      const isChecked = selected.has(opt.id);
                      return (
                        <li key={opt.id}>
                          <label
                            htmlFor={opt.id}
                            className={`flex items-start gap-3 p-3 -mx-3 cursor-pointer transition-colors ${
                              isChecked ? "bg-background/10" : "hover:bg-background/5"
                            }`}
                          >
                            <Checkbox
                              id={opt.id}
                              checked={isChecked}
                              onCheckedChange={() => toggle(opt.id)}
                              className="mt-1 border-background/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary data-[state=checked]:text-primary-foreground"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="text-base font-body font-medium text-background leading-snug">
                                {opt.title}
                              </div>
                              {opt.description && (
                                <div className="text-sm font-body text-background/55 mt-0.5 leading-snug">
                                  {opt.description}
                                </div>
                              )}
                            </div>
                          </label>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer with counter + CTA */}
            <div className="border-t border-background/15 pt-6">
              <div className="flex items-center justify-between mb-4 text-sm font-body">
                <span className="text-background/60">Выбрано опций</span>
                <span className="text-background font-semibold flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-primary" />
                  {selectedCount}
                </span>
              </div>
              <Button variant="hero" className="w-full group" asChild>
                <a href="/#consultation" onClick={handleSubmit}>
                  Оставить заявку
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

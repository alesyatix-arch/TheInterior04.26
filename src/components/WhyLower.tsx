import { Ruler, LayoutGrid, Palette, FileText, ClipboardList, Hammer, PackageOpen, ShieldCheck, Home } from "lucide-react";

const chain = [
  { icon: Ruler, title: "Замер" },
  { icon: LayoutGrid, title: "Разработка планировки" },
  { icon: Palette, title: "Адаптация стиля под квартиру" },
  { icon: FileText, title: "Рабочие планы" },
  { icon: ClipboardList, title: "Ведомость" },
  { icon: Hammer, title: "Реализация" },
  { icon: PackageOpen, title: "Комплектация" },
  { icon: ShieldCheck, title: "Авторское сопровождение" },
  { icon: Home, title: "Готовый объект" },
];

const WhyLower = () => {
  return (
    <section id="why-lower" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-14">
          <span className="inline-block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.25em] text-primary mb-5">
            Как устроен формат
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
            Почему вы получаете проект быстрее и доступнее
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-7 font-body text-base lg:text-lg text-foreground/75 leading-relaxed text-center">
          <p>
            Классический дизайн-проект создается с нуля: отдельно разрабатываются стиль, планировка, материалы, мебель, освещение, визуальные решения и техническая часть.
          </p>
          <p>
            В этом формате основа уже подготовлена заранее. Вы выбираете готовое авторское интерьерное решение, а дальше оно адаптируется под вашу квартиру, планировку, площадь, состав семьи и бюджет.
          </p>
          <p>
            За счет этого вы получаете профессиональный проект быстрее, с понятной стоимостью и без долгих согласований с нуля.
          </p>
        </div>

        {/* Этапы — карточки */}
        <div className="mt-14 lg:mt-16 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {chain.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="group relative bg-background border border-border p-7 lg:p-8 flex items-start gap-5 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="absolute top-0 left-0 h-[3px] w-10 bg-primary/0 group-hover:bg-primary transition-colors" />
                <div className="shrink-0 w-12 h-12 bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/65 mb-1.5">
                    Этап {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-base lg:text-lg font-semibold text-foreground leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Важная формулировка */}
        <div className="mt-14 lg:mt-16 max-w-3xl mx-auto">
          <div className="border-l-2 border-primary pl-6 py-2">
            <p className="font-heading text-lg lg:text-xl text-foreground leading-relaxed">
              Это не шаблонный дизайн, а профессиональная интерьерная концепция, адаптированная под вашу квартиру.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLower;

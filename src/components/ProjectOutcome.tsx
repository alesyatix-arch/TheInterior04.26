import { LayoutGrid, Image as ImageIcon, ListChecks, Ruler, Wrench, ShieldCheck, Home } from "lucide-react";

const cards = [
  {
    icon: LayoutGrid,
    title: "Планировка",
    text: "Понимание зон, мебели, хранения и логики пространства.",
  },
  {
    icon: ImageIcon,
    title: "Визуализации",
    text: "Понимание будущего интерьера до начала ремонта.",
  },
  {
    icon: ListChecks,
    title: "Ведомость",
    text: "Материалы, мебель, свет и сантехника, которые можно использовать в реализации.",
  },
  {
    icon: Ruler,
    title: "Рабочие планы",
    text: "Документация для строителей в полном дизайн-проекте.",
  },
  {
    icon: Wrench,
    title: "Реализация",
    text: "Проект можно передать строительной команде для оценки и реализации.",
  },
  {
    icon: ShieldCheck,
    title: "Авторское сопровождение",
    text: "Контроль соответствия проекту на этапе ремонта.",
  },
  {
    icon: Home,
    title: "Готовый ремонт",
    text: "Завершённое пространство, соответствующее утверждённому проекту.",
  },
];

const ProjectOutcome = () => {
  return (
    <section id="outcome" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-14 lg:mb-16">
          <span className="inline-block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.25em] text-primary mb-5">
            Результат
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
            На выходе вы получаете не идею, а понятный проект для дальнейших действий
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="bg-background border border-border p-7 lg:p-8 flex flex-col"
              >
                <Icon className="w-7 h-7 text-primary mb-5" strokeWidth={1.5} />
                <h3 className="font-heading text-lg lg:text-xl font-semibold text-foreground mb-2">
                  {c.title}
                </h3>
                <p className="font-body text-sm lg:text-base text-foreground/70 leading-relaxed">
                  {c.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectOutcome;

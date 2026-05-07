import { Palette, Package, ClipboardList, Ruler, LayoutGrid, Sparkles, FileCheck } from "lucide-react";

const reasons = [
  {
    number: "01",
    title: "Выберите стиль",
    description: "Подберите подходящий стиль интерьера из нашей коллекции",
    icon: Palette,
  },
  {
    number: "02",
    title: "Выберите пакет",
    description: "Определитесь с пакетом услуг под ваши задачи и бюджет",
    icon: Package,
  },
  {
    number: "03",
    title: "Опросный лист",
    description: "Заполните опросный лист совместно с дизайнером",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Замер квартиры",
    description: "Произведём точный замер вашей квартиры",
    icon: Ruler,
  },
  {
    number: "05",
    title: "Индивидуальная планировка",
    description: "Разрабатываем индивидуальную планировку под ваш образ жизни",
    icon: LayoutGrid,
  },
  {
    number: "06",
    title: "Адаптация проекта",
    description: "Адаптируем дизайн-проект под особенности вашей квартиры",
    icon: Sparkles,
  },
  {
    number: "07",
    title: "Готовый проект",
    description: "Передаём готовый проект, с которым удобно реализовать ремонт",
    icon: FileCheck,
  },
];

const WhyLower = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Soft decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      
      
      <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              Этапы работы
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground leading-tight">
              Как мы работаем
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {reasons.map((reason) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={reason.number}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="bg-background p-8 lg:p-10 h-full rounded-2xl border border-border/60 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                    {/* Number Badge */}
                    <span className="absolute -top-4 left-8 bg-primary text-primary-foreground text-sm font-body font-semibold px-4 py-1.5 rounded-full">
                      {reason.number}
                    </span>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-secondary rounded-2xl mb-6 group-hover:bg-primary/10 transition-colors">
                      <IconComponent className="w-7 h-7 lg:w-8 lg:h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-lg lg:text-xl font-body text-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyLower;

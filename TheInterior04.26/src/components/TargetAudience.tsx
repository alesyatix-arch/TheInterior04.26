import { Building, Clock, MapPin, TrendingUp } from "lucide-react";

const audiences = [
  {
    icon: Building,
    title: "Покупатели новостроек",
    description: "Для тех, кому важны скорость и прогнозируемый бюджет"
  },
  {
    icon: Clock,
    title: "Предприниматели",
    description: "Для тех, кому важно передать все процессы профессионалам"
  },
  {
    icon: MapPin,
    title: "Иногородние заказчики",
    description: "Кто не может присутствовать на объекте, но хочет качественный результат"
  },
  {
    icon: TrendingUp,
    title: "Инвесторы",
    description: "Для тех, кому нужны фиксированный бюджет, точные сроки и делегирование"
  }
];

const TargetAudience = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-5">
            <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              Для кого
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
              ТВОЙ ИНТЕРЬЕР создан для вас
            </h2>
            <p className="text-lg lg:text-xl font-body text-muted-foreground leading-relaxed mb-8">
              Новый формат для тех, кому важнее скорость и предсказуемость результата
            </p>
            
            {/* Features list */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-primary flex-shrink-0" />
                <span className="text-sm lg:text-base font-body text-muted-foreground">
                  <strong className="font-semibold text-foreground">Фиксированная цена</strong> — без доплат в процессе
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-primary flex-shrink-0" />
                <span className="text-sm lg:text-base font-body text-muted-foreground">
                  <strong className="font-semibold text-foreground">Готовый бюджет проекта</strong> — комплектация уже рассчитана
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-0.5 bg-primary flex-shrink-0" />
                <span className="text-sm lg:text-base font-body text-muted-foreground">
                  <strong className="font-semibold text-foreground">Полная ведомость</strong> мебели, материалов и света
                </span>
              </li>
            </ul>
          </div>

          {/* Right Column - Cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {audiences.map((audience, index) => (
                <div 
                  key={audience.title}
                  className="group p-6 lg:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10">
                      <audience.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-body text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-heading font-semibold text-foreground mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

// Dark-themed cashback section for visual separation

const steps = [
  {
    n: "01",
    title: "Вы выбираете формат проекта",
    text: "Планировка, эскизный проект или полный дизайн-проект.",
  },
  {
    n: "02",
    title: "Вы получаете готовое решение",
    text: "Проект адаптируется под вашу квартиру, задачи и бюджет.",
  },
  {
    n: "03",
    title: "Вы переходите к реализации",
    text: "При дальнейшей реализации доступен кэш-бек до 100% стоимости проекта.",
  },
];

const scrollTo = (hash: string) => {
  const el = document.querySelector(hash);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const CashbackSection = () => {
  return (
    <section id="cashback" className="py-20 lg:py-28 bg-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-block text-xs font-body font-bold uppercase tracking-[0.22em] text-primary">
              Программа кэш-бека
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-background leading-tight">
              До 100% кэш-бек на проект
            </h2>
            <p className="font-body text-base lg:text-lg text-background/85 leading-relaxed">
              При переходе к реализации вы можете вернуть полную стоимость дизайн-проекта по условиям нашей программы.
            </p>
          </div>

          {/* Схема 1-2-3 */}
          <div className="mt-14 lg:mt-16 grid md:grid-cols-3 gap-5 lg:gap-6 text-left">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative p-8 lg:p-10 bg-background/10 border border-background/20 hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <span className="absolute top-0 left-0 h-[3px] w-12 bg-primary" />
                <span className="block font-heading text-5xl lg:text-6xl text-primary mb-6 group-hover:text-primary transition-colors">
                  {s.n}
                </span>
                <h3 className="font-heading text-xl text-background mb-3">
                  {s.title}
                </h3>
                <p className="font-body text-sm lg:text-base text-background/80 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 lg:mt-14 flex flex-col items-center gap-5 text-center">
            <button
              onClick={() => scrollTo("#consultation")}
              className="border-2 border-background text-background font-body font-bold text-base px-9 py-4 hover:bg-background hover:text-foreground transition-colors"
            >
              Узнать условия кэш-бека
            </button>
            <p className="font-body text-xs lg:text-sm text-background/75 max-w-2xl">
              Размер кэш-бека зависит от выбранного формата проекта и условий реализации. Подробности уточняются на бесплатной консультации.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackSection;

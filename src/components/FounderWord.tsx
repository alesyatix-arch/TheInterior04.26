import founderArtemAsset from "@/assets/founder-artem.png.asset.json";
const teamArtem = founderArtemAsset.url;

const FounderWord = () => {
  return (
    <section id="founder" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Photo */}
          <div className="lg:col-span-5">
            <div className="aspect-[3/4] bg-foreground/5 border border-border overflow-hidden">
              <img
                src={teamArtem}
                alt="Артём Кулагин — основатель студии"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-5">
              <p className="font-heading text-lg lg:text-xl text-foreground font-semibold">
                Артём Кулагин
              </p>
              <p className="font-body text-sm text-foreground/75 mt-1">
                Основатель студии «Твой Интерьер»
              </p>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.25em] text-primary mb-5">
              Слово основателя
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-7 lg:mb-8">
              Почему мы создали этот формат
            </h2>
            <div className="space-y-5 font-body text-base lg:text-lg text-foreground/75 leading-relaxed">
              <p>
                Классический дизайн-проект подходит не всем: он требует больше времени, бюджета и вовлеченности.
              </p>
              <p>
                Поэтому мы создали формат готовых авторских решений. Вы не начинаете с пустого листа — вы выбираете продуманную основу, а команда адаптирует ее под вашу квартиру, задачи и бюджет.
              </p>
              <p>
                В результате вы получаете профессиональный проект быстрее, понятнее и доступнее.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderWord;

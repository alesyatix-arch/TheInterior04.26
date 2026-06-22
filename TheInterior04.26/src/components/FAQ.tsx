import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqs = [
  {
    q: "Почему проект стоит доступнее классического дизайна?",
    a: "Потому что интерьер не разрабатывается с нуля. Вы выбираете готовое авторское решение, а затем оно адаптируется под вашу квартиру, планировку, задачи и бюджет. За счет этого проект занимает меньше времени и стоит доступнее классического индивидуального дизайна.",
  },
  {
    q: "Это шаблонный проект?",
    a: "Нет. Шаблон предполагает прямое копирование. Здесь вы получаете адаптацию профессиональной интерьерной концепции под конкретную квартиру: с учетом планировки, площади, состава помещений, мебели, хранения, бюджета и задач семьи.",
  },
  {
    q: "Чем отличается эскизный проект от полного?",
    a: "Эскизный проект помогает увидеть будущий интерьер и понять состав материалов, мебели и света. Полный дизайн-проект дополнительно включает рабочие чертежи и более подробную ведомость, поэтому его можно передать строителям для ремонта.",
  },
  {
    q: "Что выбрать, если я планирую ремонт?",
    a: "Для ремонта лучше выбрать полный дизайн-проект. Он включает визуализации, ведомость и рабочие чертежи, которые нужны строительной команде для реализации.",
  },
  {
    q: "Как работает кэш-бек?",
    a: "Если после проекта вы переходите к реализации, часть стоимости дизайн-проекта может быть возвращена кэш-беком. Размер кэш-бека зависит от выбранного формата проекта и условий реализации. Подробности специалист объяснит на консультации.",
  },
  {
    q: "Можно ли заказать только планировку?",
    a: "Да. Вы можете заказать только планировочное решение за 900 ₽/м², если пока нужно понять потенциал квартиры, зонирование и расстановку мебели.",
  },
  {
    q: "Можно ли заказать проект без ремонта?",
    a: "Да. Реализация через строительных партнеров и сопровождение — это дополнительная возможность, а не обязательное условие.",
  },
  {
    q: "Что нужно для старта?",
    a: "Для старта нужен план квартиры, площадь, пожелания по стилю, ориентир по бюджету и понимание состава семьи.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-14">
          <span className="inline-block text-xs sm:text-sm font-body font-medium uppercase tracking-[0.25em] text-primary mb-5">
            FAQ
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground leading-tight">
            Ответы на частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-heading text-base lg:text-lg font-semibold text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm lg:text-base text-foreground/75 leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

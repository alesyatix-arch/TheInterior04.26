import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Mascot from "@/components/Mascot";
import BackButton from "@/components/BackButton";
import teamArtem from "@/assets/team-artem.webp";
import teamAnastasia from "@/assets/team-anastasia.webp";
import teamAlesyaT from "@/assets/team-alesya-t.webp";
import teamInga from "@/assets/team-inga.webp";
import teamSofia from "@/assets/team-sofia.webp";
import teamAlesyaP from "@/assets/team-alesya-p.webp";
import teamNikolay from "@/assets/team-nikolay.webp";
import teamKonstantin from "@/assets/team-konstantin.webp";

type Member = {
  role: string;
  name: string;
  description: string;
  photo?: string;
};

const team: Member[] = [
  {
    role: "Руководитель студии",
    name: "Артём Кулагин",
    description:
      "Определяет стратегию студии, отвечает за качество каждого проекта и сопровождает ключевых клиентов от первой встречи до сдачи объекта.",
    photo: teamArtem,
  },
  {
    role: "Руководитель отдела заботы",
    name: "Константин Джапаридзе",
    description:
      "Сопровождает клиента до старта проекта: отвечает на вопросы, помогает выбрать пакет и условия. Руководит отделом продаж и следит, чтобы каждый клиент чувствовал внимание с первой минуты.",
    photo: teamKonstantin,
  },
  {
    role: "Шеф-дизайнер",
    name: "Анастасия Родионова",
    description:
      "Задаёт визуальный стандарт студии, ведёт авторские концепции и контролирует качество каждого дизайн-проекта на всех этапах.",
    photo: teamAnastasia,
  },
  {
    role: "Руководитель направления",
    name: "Алеся Тихомирова",
    description:
      "Управляет дизайн-направлением: формирует команду под задачу, контролирует сроки, согласования и соответствие концепции бренду «Твой Интерьер».",
    photo: teamAlesyaT,
  },
  {
    role: "Менеджер проектов",
    name: "Инга Ильинская",
    description:
      "Ваш главный контакт на всех этапах. Ведёт сметы, графики, коммуникацию с подрядчиками и держит проект в рамках бюджета.",
    photo: teamInga,
  },
  {
    role: "Дизайнер",
    name: "София Прохорова",
    description:
      "Разрабатывает планировочные решения, 3D-визуализации и подбирает материалы. Превращает ваши пожелания в готовый проект.",
    photo: teamSofia,
  },
  {
    role: "Комплектация",
    name: "Алеся Протасюк",
    description:
      "Заказывает мебель, свет и декор по спецификации проекта, отслеживает поставки и приёмку — чтобы всё приехало вовремя и без сюрпризов.",
    photo: teamAlesyaP,
  },
  {
    role: "Технадзор",
    name: "Николай",
    description:
      "Контролирует ремонт на объекте, координирует бригады и проверяет качество работ на каждом этапе — от чернового до финиша.",
    photo: teamNikolay,
  },
];

const Team = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          <BackButton />

          {/* Hero */}
          <section className="text-center max-w-4xl mx-auto mt-8 mb-20 lg:mb-28">
            <p className="text-sm font-body uppercase tracking-[0.3em] text-primary mb-6">
              Наша команда
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-medium text-foreground leading-tight mb-8">
              Люди, которые создают Твой Интерьер
            </h1>
            <p className="text-lg lg:text-xl font-body text-foreground/70 leading-relaxed">
              За каждым проектом стоит команда: дизайнеры, менеджеры, технадзор и комплектатор.
              Мы работаем вместе, чтобы вы получили продуманный интерьер без лишних забот.
            </p>
          </section>

          {/* Team grid */}
          <section className="mb-24 lg:mb-32">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {team.map((member, i) => (
                <article key={i} className="flex flex-col">
                  <div className="aspect-[4/5] bg-foreground/5 border border-foreground/10 mb-6 overflow-hidden">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-foreground/30 font-body text-xs uppercase tracking-wider">
                          Фото
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-xs font-body uppercase tracking-[0.2em] text-primary mb-2">
                    {member.role}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-heading font-medium text-foreground mb-3">
                    {member.name}
                  </h3>
                  <p className="text-base font-body text-foreground/70 leading-relaxed">
                    {member.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Blog block about the team */}
          <section className="bg-foreground text-background py-16 lg:py-24 px-6 lg:px-16 max-w-5xl mx-auto">
            <p className="text-xs font-body uppercase tracking-[0.3em] text-primary mb-6">
              Блог · О команде
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-medium leading-tight mb-8">
              Почему с нами спокойно
            </h2>
            <div className="space-y-5 text-lg font-body text-background/80 leading-relaxed">
              <p>
                Твой Интерьер — это авторская студия с системным подходом. Мы заранее продумали
                дизайн-концепции, подобрали материалы, мебель и декор в двух бюджетах, чтобы
                сэкономить ваше время и деньги без потери качества.
              </p>
              <p>
                У каждого специалиста — своя зона ответственности: дизайнеры отвечают за визуал
                и эргономику, менеджер ведёт проект по срокам, технадзор контролирует стройку,
                комплектатор закрывает поставки. Вам не нужно держать всё в голове — мы держим за вас.
              </p>
              <p>
                Мы делаем так, чтобы ремонт перестал быть стрессом. Прозрачная смета, понятные
                этапы и команда, которая выходит на связь — вот за что нас выбирают.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <Mascot />
    </div>
  );
};

export default Team;

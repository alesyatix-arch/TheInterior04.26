import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamArtem from "@/assets/team-artem.webp";
import teamKonstantin from "@/assets/team-konstantin.webp";
import teamAnastasia from "@/assets/team-anastasia.webp";
import teamAlesyaT from "@/assets/team-alesya-t.webp";
import teamInga from "@/assets/team-inga.webp";
import teamSofia from "@/assets/team-sofia.webp";
import teamAlesyaP from "@/assets/team-alesya-p.webp";
import teamNikolay from "@/assets/team-nikolay.webp";

const team = [
  { role: "Руководитель студии", name: "Артём Кулагин", photo: teamArtem },
  { role: "Руководитель отдела заботы", name: "Константин Джапаридзе", photo: teamKonstantin },
  { role: "Шеф-дизайнер", name: "Анастасия Родионова", photo: teamAnastasia },
  { role: "Руководитель направления", name: "Алеся Тихомирова", photo: teamAlesyaT },
  { role: "Менеджер проектов", name: "Инга Ильинская", photo: teamInga },
  { role: "Дизайнер", name: "София Прохорова", photo: teamSofia },
  { role: "Комплектация", name: "Алеся Протасюк", photo: teamAlesyaP },
  { role: "Технадзор", name: "Николай", photo: teamNikolay },
];

const TeamSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="team">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-primary mb-6">
            Команда
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-7 max-w-6xl mx-auto">
          {team.map((m) => (
            <article key={m.name} className="flex flex-col">
              <div className="aspect-[3/4] bg-foreground/5 border border-foreground/10 mb-4 overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] sm:text-xs font-body uppercase tracking-[0.2em] text-primary mb-1.5">
                {m.role}
              </p>
              <h3 className="text-base lg:text-lg font-heading font-medium text-foreground leading-tight">
                {m.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/team"
            className="inline-flex items-center gap-2 text-sm font-body font-medium uppercase tracking-wider text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1"
          >
            Узнать больше о команде
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

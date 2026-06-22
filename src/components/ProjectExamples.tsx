import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import scandi1 from "@/assets/scandi-project-1.webp";
import scandi2 from "@/assets/scandi-project-2.webp";
import scandi3 from "@/assets/scandi-project-3.webp";
import elegance1 from "@/assets/elegance-project-1.webp";
import elegance2 from "@/assets/elegance-project-2.webp";
import elegance3 from "@/assets/elegance-project-3.webp";
import gentleman1 from "@/assets/gentleman-project1-1.webp";
import gentleman2 from "@/assets/gentleman-project1-2.webp";
import gentleman3 from "@/assets/gentleman-project1-3.webp";

const projects = [
  {
    style: "Сканди",
    rooms: "2-комнатная квартира",
    complex: "Измайловское шоссе, вторичка, дом 1980 года",
    description:
      "Лаконичный интерьер в светлых тонах с натуральным деревом и мягким текстилем. Простор, свет и уют в каждой детали.",
    images: [scandi1, scandi2, scandi3],
  },
  {
    style: "Элегант",
    rooms: "3-комнатная квартира",
    complex: "ул. Тараса Шевченко, вторичка, дом 1955 года",
    description:
      "Современная классика в нейтральной палитре. Сдержанная роскошь, благородные материалы и продуманная геометрия пространства.",
    images: [elegance1, elegance2, elegance3],
  },
  {
    style: "Баланс",
    rooms: "Евро-двухкомнатная квартира",
    complex: "ЖК Symphony",
    description:
      "Аристократичный интерьер с глубокими оттенками, дорогими породами дерева и статусным декором. Атмосфера солидности и спокойствия.",
    images: [gentleman1, gentleman2, gentleman3],
  },
];

const ProjectCard = ({ project, reversed }: { project: (typeof projects)[number]; reversed: boolean }) => {
  const [index, setIndex] = useState(0);
  const total = project.images.length;
  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <article className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Description */}
      <div className={`${reversed ? "lg:order-2" : ""}`}>
        <span className="inline-block text-xs font-body font-medium uppercase tracking-[0.2em] text-primary mb-4">
          {project.style}
        </span>
        <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-3">
          {project.rooms}
        </h3>
        <p className="text-base lg:text-lg font-body text-muted-foreground mb-6">
          {project.complex}
        </p>
        <p className="text-base lg:text-lg font-body text-foreground/80 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Gallery */}
      <div className={`relative aspect-[4/3] overflow-hidden bg-muted ${reversed ? "lg:order-1" : ""}`}>
        {project.images.map((src, i) => {
          // Only render active + adjacent images to avoid downloading all 9 at once
          const shouldRender = Math.abs(i - index) <= 1 || (index === 0 && i === total - 1) || (index === total - 1 && i === 0);
          return (
            <img
              key={i}
              src={shouldRender ? src : undefined}
              alt={`${project.style} — фото ${i + 1}`}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          );
        })}

        <button
          onClick={prev}
          aria-label="Предыдущее фото"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background text-foreground transition-colors rounded-full shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Следующее фото"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-background/90 hover:bg-background text-foreground transition-colors rounded-full shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {project.images.map((_, i) => (
            <button
              key={i}
              aria-label={`Перейти к фото ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-primary" : "w-1.5 bg-background/70"
              }`}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

const ProjectExamples = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="examples">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="max-w-3xl mx-auto mb-16 lg:mb-20 text-center">
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-primary mb-6">
            Примеры наших работ
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground">
            Реализованные проекты в 2026 году
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.style} project={p} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectExamples;

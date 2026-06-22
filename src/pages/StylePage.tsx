import { useState, useEffect, forwardRef } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getStyleById } from "@/data/stylesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import ImageLightbox from "@/components/ImageLightbox";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const StylePage = forwardRef<HTMLDivElement>((_, ref) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { styleId } = useParams<{ styleId: string }>();
  const style = styleId ? getStyleById(styleId) : undefined;
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({});

  const toggleProjectExpanded = (idx: number) => {
    setExpandedProjects((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  if (!style) {
    return <Navigate to="/" replace />;
  }

  // Gallery images first, then project images
  const mainGalleryImages = [
    style.galleryImages.living,
    style.galleryImages.bedroom,
    style.galleryImages.bathroom,
  ];
  
  const projects: string[][] = style.projects ?? (style.projectImages ? [style.projectImages] : []);
  const flatProjectImages = projects.flat();
  const allImages = [...mainGalleryImages, ...flatProjectImages];

  // Compute starting index in allImages for each project
  const projectStartIndices: number[] = [];
  {
    let acc = mainGalleryImages.length;
    for (const p of projects) {
      projectStartIndices.push(acc);
      acc += p.length;
    }
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const openProjectImageLightbox = (projectIdx: number, imgIdx: number) => {
    setLightboxIndex(projectStartIndices[projectIdx] + imgIdx);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${style.name} — стиль интерьера | Твой Интерьер`}
        description={style.description}
        path={`/style/${style.id}`}
      />
      <Header />

      {/* Hero Section - Split Layout */}
      <section className="pt-28 lg:pt-36 pb-8 lg:pb-12 bg-background">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <div className="lg:col-span-4 py-8 lg:py-16">
              {/* Back Link with accent */}
              <Link
                to="/#styles"
                className="inline-flex items-center gap-2 text-xs lg:text-sm font-body font-medium uppercase tracking-[0.15em] lg:tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors mb-6 lg:mb-10 group"
              >
                <span className="w-6 lg:w-8 h-px bg-primary group-hover:w-12 transition-all" />
                Стиль интерьера
              </Link>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-semibold text-foreground mb-3 lg:mb-4 leading-[0.9]">
                {style.name}
              </h1>
              
              <p className="text-base lg:text-xl font-body text-primary mb-4 lg:mb-6">
                {style.subtitle}
              </p>
              
              <p className="text-base lg:text-lg font-body text-muted-foreground leading-relaxed mb-10">
                {style.fullDescription}
              </p>

              <a 
                href="#gallery"
                className="inline-flex items-center gap-3 text-base lg:text-lg font-body font-medium text-foreground hover:text-primary transition-colors group"
              >
                Смотреть галерею
                <span className="w-8 h-px bg-foreground group-hover:bg-primary group-hover:w-12 transition-all" />
              </a>
            </div>

            {/* Right - Hero Image */}
            <div className="lg:col-span-8 relative">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                   src={style.image}
                   alt={style.name}
                   loading="eager"
                   className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-primary hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Premium Asymmetric Grid */}
      <section id="gallery" className="py-12 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          {/* Gallery Header */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Галерея
            </span>
            <span className="flex-1 h-px bg-border" />
          </div>

          <div className="grid lg:grid-cols-12 gap-3 lg:gap-4">
            {/* Large Image - Left */}
            <button 
              onClick={() => openLightbox(0)}
              className="lg:col-span-7 lg:row-span-2 relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[3/4] lg:aspect-auto lg:h-full">
                <img
                  src={style.galleryImages.living}
                   alt={`${style.name} - Кухня-гостиная`}
                   loading="lazy"
                  decoding="async"
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {!style.hideGalleryLabels && (
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-primary" />
                    <span className="text-sm font-body font-medium uppercase tracking-wider text-background">{style.galleryLabelLiving || "Кухня-гостиная"}</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </button>

            {/* Right Column - 2x2 Grid */}
            <button 
              onClick={() => openLightbox(1)}
              className="lg:col-span-5 relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={style.galleryImages.bedroom}
                   alt={`${style.name} - Спальня`}
                   loading="lazy"
                  decoding="async"
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {!style.hideGalleryLabels && (
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-primary" />
                    <span className="text-xs font-body font-medium uppercase tracking-wider text-background">Спальня</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </button>

            <button 
              onClick={() => openLightbox(2)}
              className="lg:col-span-5 relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={style.galleryImages.bathroom}
                   alt={`${style.name} - Санузел`}
                   loading="lazy"
                  decoding="async"
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {!style.hideGalleryLabels && (
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-primary" />
                    <span className="text-xs font-body font-medium uppercase tracking-wider text-background">Санузел</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </button>
          </div>
        </div>
      </section>

      {/* Divider with quote */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-12 xl:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block w-16 h-1 bg-primary mb-8" />
            <p className="text-2xl lg:text-3xl xl:text-4xl font-heading font-medium text-background leading-relaxed">
              «{style.fullDescription}»
            </p>
          </div>
        </div>
      </section>

      {/* Packages — комплектация и сравнение */}
      <Packages />

      {/* Project Examples Section - Editorial layout, one block per project */}
      {projects.length > 0 && (
        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-4 lg:px-12 xl:px-16">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
              <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-primary mb-4">
                Портфолио
              </span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-foreground">
                Примеры проектов в этом стиле
              </h2>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {projects.map((projectImgs, projectIdx) => {
                const img1 = projectImgs[0];
                const previewRest = projectImgs.slice(1, 3);
                const hiddenRest = projectImgs.slice(3);
                const isExpanded = !!expandedProjects[projectIdx];
                const visibleRest = isExpanded ? projectImgs.slice(1) : previewRest;
                const projectNumber = String(projectIdx + 1).padStart(3, "0");

                return (
                  <div key={projectIdx} className="space-y-3 lg:space-y-4">
                    {/* Top row: text + first big image */}
                    <div className="grid grid-cols-12 gap-3 lg:gap-4 items-stretch">
                      {/* Text block */}
                      <div className="col-span-12 md:col-span-4 flex flex-col justify-center py-6 md:py-0 md:pr-6">
                        <span className="text-xs font-body font-medium uppercase tracking-[0.2em] text-muted-foreground mb-3">
                          проект <span className="text-primary">{style.name.toUpperCase()}#{projectNumber}</span>
                        </span>
                        <h3 className="text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-foreground mb-3 leading-tight">
                          Проект №{projectIdx + 1}
                        </h3>
                        <p className="text-sm lg:text-base font-body text-muted-foreground mb-6">
                          В стиле «{style.name}»
                        </p>
                        {hiddenRest.length > 0 && (
                          <button
                            onClick={() => toggleProjectExpanded(projectIdx)}
                            className="inline-flex items-center gap-2 text-sm lg:text-base font-body font-medium text-primary hover:gap-3 transition-all w-fit"
                          >
                            {isExpanded ? "Свернуть" : "Подробнее"} <span>{isExpanded ? "↑" : "→"}</span>
                          </button>
                        )}
                      </div>

                      {/* First (wide) image */}
                      {img1 && (
                        <button
                          onClick={() => openProjectImageLightbox(projectIdx, 0)}
                          className="col-span-12 md:col-span-8 relative overflow-hidden group cursor-pointer"
                        >
                          <div className="aspect-[16/10]">
                            <img
                              src={img1}
                              alt={`${style.name} - Проект ${projectIdx + 1}, фото 1`}
                              loading="lazy"
                  decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          </div>
                          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                        </button>
                      )}
                    </div>

                    {/* Remaining images: 2-column grid */}
                    {visibleRest.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        {visibleRest.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => openProjectImageLightbox(projectIdx, i + 1)}
                            className="relative overflow-hidden group cursor-pointer"
                          >
                            <div className="aspect-[4/3]">
                              <img
                                src={img}
                                alt={`${style.name} - Проект ${projectIdx + 1}, фото ${i + 2}`}
                                loading="lazy"
                  decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/30 -skew-x-12 translate-x-1/4 hidden lg:block" />
        
        <div className="container mx-auto px-4 lg:px-12 xl:px-16 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              Следующий шаг
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground mb-6 leading-tight">
              Создайте интерьер<br />в стиле {style.name}
            </h2>
            <p className="text-lg lg:text-xl font-body text-muted-foreground mb-10 max-w-xl">
              Свяжитесь с нами для консультации и расчёта стоимости вашего проекта
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/#contacts">Связаться с нами</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/#calculator">Собрать пакет</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
});

StylePage.displayName = "StylePage";

export default StylePage;

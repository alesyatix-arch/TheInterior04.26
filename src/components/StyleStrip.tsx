import { Link } from "react-router-dom";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import eleganceImg from "@/assets/elegance-project3-1.jpg";
import casualImgAsset from "@/assets/casual-new-living.jpg.asset.json";
import scandiImgAsset from "@/assets/scandi-new-living.jpg.asset.json";
import smartImg from "@/assets/smart-new-living.jpg.asset.json";
import gentlemanImgAsset from "@/assets/gentleman-new-living.jpg.asset.json";
import eleganceExtra from "@/assets/elegance-project3-3.jpg";
import casualExtraAsset from "@/assets/casual-new-kitchen.jpg.asset.json";
import scandiExtraAsset from "@/assets/scandi-new-entry.jpg.asset.json";
import smartExtra from "@/assets/smart-new-bedroom.jpg.asset.json";
import gentlemanExtraAsset from "@/assets/gentleman-new-kitchen.jpg.asset.json";

const stripImages = [
  { src: eleganceImg, label: "Элегант", href: "/style/elegance" },
  { src: casualImgAsset.url, label: "Комфорт", href: "/style/casual" },
  { src: scandiImgAsset.url, label: "Сканди", href: "/style/scandi" },
  { src: smartImg.url, label: "Рациональ", href: "/style/smart" },
  { src: gentlemanImgAsset.url, label: "Баланс", href: "/style/gentleman" },
  { src: eleganceExtra, label: "Элегант", href: "/style/elegance" },
  { src: casualExtraAsset.url, label: "Комфорт", href: "/style/casual" },
  { src: scandiExtraAsset.url, label: "Сканди", href: "/style/scandi" },
  { src: smartExtra.url, label: "Рациональ", href: "/style/smart" },
  { src: gentlemanExtraAsset.url, label: "Баланс", href: "/style/gentleman" },
];

const StyleStrip = () => {
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full bg-background py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {stripImages.map((item, i) => (
              <CarouselItem
                key={i}
                className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
              >
                <Link to={item.href} className="relative block group">
                  <div className="relative w-full overflow-hidden h-[50vh] sm:h-[55vh] lg:h-[66vh]">
                    <img
                      src={item.src}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute bottom-5 left-5 font-heading text-lg lg:text-2xl text-white tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex left-4 bg-background/80 hover:bg-background" />
          <CarouselNext className="hidden md:flex right-4 bg-background/80 hover:bg-background" />
        </Carousel>
      </div>
    </section>
  );
};

export default StyleStrip;

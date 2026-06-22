import { Link } from "react-router-dom";
<<<<<<< HEAD
import eleganceProject3_1 from "@/assets/elegance-project3-1.jpg";
import casualNewLivingAsset from "@/assets/casual-new-living.jpg.asset.json";
const casualNewLiving = casualNewLivingAsset.url;
import scandiNewLivingHeroAsset from "@/assets/scandi-new-living.jpg.asset.json";
const scandiProject2_1 = scandiNewLivingHeroAsset.url;
import smartBedroomAsset from "@/assets/smart-new-bedroom.jpg.asset.json";
const smartBedroom = smartBedroomAsset.url;
import gentlemanLivingAsset from "@/assets/gentleman-new-living.jpg.asset.json";
const gentlemanLiving = gentlemanLivingAsset.url;
=======
import eleganceLiving from "@/assets/elegance-living.webp";
import casualBathroom from "@/assets/casual-bathroom.webp";
import scandiBedroom from "@/assets/scandi-bedroom.webp";
import smartBedroom from "@/assets/smart-bedroom-4.webp";
import gentlemanLiving from "@/assets/gentleman-living.webp";
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
import BlurImage from "@/components/BlurImage";
import { blurPlaceholders } from "@/lib/blurPlaceholders";

const styles = [
<<<<<<< HEAD
  { id: "elegance", name: "Элегант", image: eleganceProject3_1, blur: blurPlaceholders.eleganceLiving },
  { id: "casual", name: "Комфорт", image: casualNewLiving, blur: blurPlaceholders.casualBathroom },
  { id: "scandi", name: "Сканди", image: scandiProject2_1, blur: blurPlaceholders.scandiBedroom },
=======
  { id: "elegance", name: "Элегант", image: eleganceLiving, blur: blurPlaceholders.eleganceLiving },
  { id: "casual", name: "Комфорт", image: casualBathroom, blur: blurPlaceholders.casualBathroom },
  { id: "scandi", name: "Сканди", image: scandiBedroom, blur: blurPlaceholders.scandiBedroom },
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
  { id: "smart", name: "Рациональ", image: smartBedroom, blur: blurPlaceholders.smartBedroom },
  { id: "gentleman", name: "Баланс", image: gentlemanLiving, blur: blurPlaceholders.gentlemanLiving },
];

const StylePicker = () => {
  return (
    <section id="styles" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
<<<<<<< HEAD
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-foreground/70 border-l-2 border-primary pl-3 mb-6">
=======
          <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-foreground/50 border-l-2 border-primary pl-3 mb-6">
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
            Коллекция
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground">
            Выбери свой стиль
          </h2>
        </div>

        {/* Grid - asymmetric editorial layout */}
        {/* Desktop: left large + right 2x2 grid */}
        <div className="hidden lg:flex gap-4">
          {/* Left - Elegance */}
          <Link
            to="/style/elegance"
            className="w-[42%] flex-shrink-0 group relative overflow-hidden"
          >
            <BlurImage
              src={styles[0].image}
              blurDataURL={styles[0].blur}
              alt={styles[0].name}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <h3 className="text-3xl font-heading font-semibold text-white mb-1">
                {styles[0].name}
              </h3>
              <span className="text-sm font-body text-white/70 group-hover:text-primary transition-colors duration-300">
                Смотреть →
              </span>
            </div>
          </Link>

          {/* Right - 2x2 grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {styles.slice(1).map((style) => (
              <Link
                key={style.id}
                to={`/style/${style.id}`}
                className="group relative aspect-square overflow-hidden"
              >
                <BlurImage
                  src={style.image}
                  blurDataURL={style.blur}
                  alt={style.name}
                  wrapperClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                <div className="absolute bottom-0 left-0 p-6 z-10">
                  <h3 className="text-2xl font-heading font-semibold text-white mb-1">
                    {style.name}
                  </h3>
                  <span className="text-sm font-body text-white/70 group-hover:text-primary transition-colors duration-300">
                    Смотреть →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: simple 2-col grid with all 5 cards */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {styles.map((style, i) => (
            <Link
              key={style.id}
              to={`/style/${style.id}`}
              className={`group relative overflow-hidden ${i === 0 ? "col-span-2 aspect-[4/3]" : "aspect-square"}`}
            >
              <BlurImage
                src={style.image}
                blurDataURL={style.blur}
                alt={style.name}
                wrapperClassName="w-full h-full"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 p-5 z-10">
                <h3 className="text-xl font-heading font-semibold text-white mb-1">
                  {style.name}
                </h3>
                <span className="text-sm font-body text-white/70 group-hover:text-primary transition-colors duration-300">
                  Смотреть →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylePicker;

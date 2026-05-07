// Данные для страниц стилей интерьера

import styleElegance from "@/assets/style-elegance.jpg";
import styleCasual from "@/assets/style-casual.jpg";
import styleScandi from "@/assets/style-scandi.jpg";
import styleSmart from "@/assets/style-smart.jpg";
import styleGentleman from "@/assets/style-gentleman.jpg";

// Gallery images for Elegance
import eleganceLiving from "@/assets/elegance-living.jpg";
import eleganceBedroom from "@/assets/elegance-bedroom.jpg";
import eleganceBathroom from "@/assets/elegance-bathroom.jpg";

// Project images for Elegance
import eleganceProject1 from "@/assets/elegance-project-1.webp";
import eleganceProject2 from "@/assets/elegance-project-2.webp";
import eleganceProject3 from "@/assets/elegance-project-3.webp";
import eleganceProject4 from "@/assets/elegance-project-4.webp";
import eleganceProject5 from "@/assets/elegance-project-5.webp";
import eleganceProject6 from "@/assets/elegance-project-6.webp";
import eleganceProject7 from "@/assets/elegance-project-7.webp";
import eleganceFloorplan from "@/assets/elegance-floorplan.jpg";
import eleganceFloorplan2 from "@/assets/elegance-floorplan-2.jpg";
import eleganceExtra1 from "@/assets/elegance-extra-1.jpg";
import eleganceExtra2 from "@/assets/elegance-extra-2.jpg";
import eleganceExtra3 from "@/assets/elegance-extra-3.jpg";
import scandiExtra1 from "@/assets/scandi-extra-1.jpg";
import smartExtra1 from "@/assets/smart-extra-1.jpg";
import smartExtra2 from "@/assets/smart-extra-2.jpg";
import smartExtra3 from "@/assets/smart-extra-3.jpg";
import gentlemanExtra1 from "@/assets/gentleman-extra-1.webp";
import gentlemanExtra2 from "@/assets/gentleman-extra-2.webp";
import gentlemanProject1Floorplan from "@/assets/gentleman-project1-floorplan.jpg";
import gentlemanProject1_1 from "@/assets/gentleman-project1-1.webp";
import gentlemanProject1_2 from "@/assets/gentleman-project1-2.webp";
import gentlemanProject1_3 from "@/assets/gentleman-project1-3.webp";
import gentlemanProject1_4 from "@/assets/gentleman-project1-4.jpg";
import gentlemanProject1_5 from "@/assets/gentleman-project1-5.jpg";
import gentlemanProject1_6 from "@/assets/gentleman-project1-6.jpg";
import eleganceProject2Floorplan from "@/assets/elegance-project2-floorplan.jpg";
import eleganceProject2_1 from "@/assets/elegance-project2-1.jpg";
import eleganceProject2_2 from "@/assets/elegance-project2-2.jpg";
import eleganceProject2_3 from "@/assets/elegance-project2-3.jpg";
import eleganceProject2_4 from "@/assets/elegance-project2-4.jpg";
import eleganceProject2_5 from "@/assets/elegance-project2-5.jpg";
import eleganceProject3_1 from "@/assets/elegance-project3-1.jpg";
import eleganceProject3_2 from "@/assets/elegance-project3-2.jpg";
import eleganceProject3_3 from "@/assets/elegance-project3-3.jpg";
import eleganceProject3_4 from "@/assets/elegance-project3-4.jpg";

// Gallery images for Casual
import casualLiving from "@/assets/casual-living.jpg";
import casualBedroom from "@/assets/casual-bedroom.jpg";
import casualBathroom from "@/assets/casual-bathroom.jpg";
import casualProject1_1 from "@/assets/casual-project1-1.jpg";
import casualProject1_2 from "@/assets/casual-project1-2.jpg";
import casualProject1_3 from "@/assets/casual-project1-3.jpg";

// Gallery images for Scandi
import scandiLiving from "@/assets/scandi-living.jpg";
import scandiBedroom from "@/assets/scandi-bedroom.jpg";
import scandiBathroom from "@/assets/scandi-bathroom.jpg";

// Project images for Scandi
import scandiProject1 from "@/assets/scandi-project-1.webp";
import scandiProject2 from "@/assets/scandi-project-2.webp";
import scandiProject3 from "@/assets/scandi-project-3.webp";
import scandiProject4 from "@/assets/scandi-project-4.jpg";
import scandiProject5 from "@/assets/scandi-project-5.jpg";
import scandiProject6 from "@/assets/scandi-project-6.jpg";
import scandiProject7 from "@/assets/scandi-project-7.jpg";
import scandiProject8 from "@/assets/scandi-project-8.jpg";
import scandiProject2_1 from "@/assets/scandi-project2-1.jpg";
import scandiProject2_2 from "@/assets/scandi-project2-2.jpg";
import scandiProject2_3 from "@/assets/scandi-project2-3.jpg";
import scandiProject2_4 from "@/assets/scandi-project2-4.jpg";
import scandiProject2_5 from "@/assets/scandi-project2-5.jpg";
import scandiProject2_6 from "@/assets/scandi-project2-6.jpg";
import scandiProject2_7 from "@/assets/scandi-project2-7.jpg";
import scandiFloorplan from "@/assets/scandi-floorplan.jpg";

// Gallery images for Smart
import smartBedroom from "@/assets/smart-bedroom.jpg";
import smartBedroom2 from "@/assets/smart-bedroom-2.jpg";
import smartBedroom3 from "@/assets/smart-bedroom-3.jpg";

// Gallery images for Gentleman
import gentlemanLiving from "@/assets/gentleman-living.jpg";
import gentlemanBedroom from "@/assets/gentleman-bedroom.jpg";
import gentlemanBathroom from "@/assets/gentleman-bathroom.jpg";

export interface StyleData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  hideGalleryLabels?: boolean;
  galleryImages: {
    living: string;
    bedroom: string;
    bathroom: string;
  };
  projectImages?: string[];
  projects?: string[][];
}

export const stylesData: StyleData[] = [
  {
    id: "elegance",
    name: "Элегант",
    subtitle: "Изысканный, элегантный, премиальный",
    description: "Утончённый дизайн с премиальными материалами и благородными оттенками",
    fullDescription: "Стиль «Элегант» — это воплощение утончённой роскоши и безупречного вкуса. Благородные оттенки, премиальные материалы и внимание к деталям создают атмосферу изысканного комфорта.",
    image: styleElegance,
    galleryImages: {
      living: eleganceLiving,
      bedroom: eleganceBedroom,
      bathroom: eleganceBathroom,
    },
    projects: [
      [
        eleganceFloorplan,
        eleganceProject3,
        eleganceProject2,
        eleganceProject1,
        eleganceProject4,
        eleganceProject5,
        eleganceProject6,
        eleganceProject7,
        eleganceExtra3,
      ],
      [
        eleganceProject2Floorplan,
        eleganceProject2_1,
        eleganceProject2_2,
        eleganceProject2_3,
        eleganceProject2_4,
        eleganceProject2_5,
      ],
      [
        eleganceProject3_1,
        eleganceProject3_3,
        eleganceProject3_4,
        eleganceExtra1,
        eleganceExtra2,
      ],
    ],
  },
  {
    id: "casual",
    name: "Комфорт",
    subtitle: "Тёплый, комфортный, современный",
    description: "Современный комфортный интерьер с тёплой цветовой палитрой и функциональными решениями",
    fullDescription: "Стиль «Комфорт» — это гармония тепла и современности. Уютные материалы, функциональные решения и тёплая цветовая палитра создают пространство для комфортной жизни.",
    image: styleCasual,
    galleryImages: {
      living: casualLiving,
      bedroom: casualBedroom,
      bathroom: casualBathroom,
    },
    projects: [
      [
        casualProject1_1,
        casualProject1_2,
        casualProject1_3,
      ],
    ],
  },
  {
    id: "scandi",
    name: "Сканди",
    subtitle: "Светлый, лёгкий, уютный",
    description: "Минималистичный скандинавский стиль с акцентом на натуральные материалы и светлые тона",
    fullDescription: "Скандинавский стиль — это гармония света, природных материалов и функциональности. Светлые тона, натуральное дерево и уютный текстиль создают атмосферу спокойствия.",
    image: styleScandi,
    galleryImages: {
      living: scandiLiving,
      bedroom: scandiBedroom,
      bathroom: scandiBathroom,
    },
    projects: [
      [
        scandiFloorplan,
        scandiProject7,
        scandiProject4,
        scandiProject8,
        scandiProject3,
        scandiProject6,
        scandiProject1,
        scandiProject2,
        scandiProject5,
      ],
      [
        scandiProject2_1,
        scandiProject2_2,
        scandiProject2_3,
        scandiProject2_4,
        scandiProject2_5,
        scandiProject2_6,
        scandiProject2_7,
      ],
    ],
  },
  {
    id: "smart",
    name: "Рациональ",
    subtitle: "Функциональный, практичный, современный",
    description: "Умный дизайн с продуманной эргономикой, нейтральной палитрой и акцентами натурального дерева",
    fullDescription: "Стиль «Рациональ» — это продуманность каждой детали. Эргономичные решения, нейтральная палитра и акценты натурального дерева создают современное пространство для активной жизни.",
    image: styleSmart,
    hideGalleryLabels: true,
    galleryImages: {
      living: smartBedroom,
      bedroom: smartBedroom2,
      bathroom: smartBedroom3,
    },
    projectImages: [
      smartExtra1,
      smartExtra2,
      smartExtra3,
    ],
  },
  {
    id: "gentleman",
    name: "Баланс",
    subtitle: "Сдержанный, благородный, строгий",
    description: "Элегантный интерьер с глубокими оттенками, кожаными акцентами и современным дизайнерским освещением",
    fullDescription: "Стиль «Баланс» — это сдержанная элегантность и благородство. Глубокие оттенки, кожаные акценты и дизайнерское освещение создают атмосферу изысканного комфорта.",
    image: styleGentleman,
    galleryImages: {
      living: gentlemanLiving,
      bedroom: gentlemanBedroom,
      bathroom: gentlemanBathroom,
    },
    projects: [
      [
        gentlemanProject1Floorplan,
        gentlemanProject1_1,
        gentlemanProject1_2,
        gentlemanProject1_3,
        gentlemanProject1_4,
        gentlemanProject1_5,
        gentlemanProject1_6,
      ],
      [
        gentlemanExtra1,
        gentlemanExtra2,
      ],
    ],
  },
];

export const getStyleById = (id: string): StyleData | undefined => {
  return stylesData.find((style) => style.id === id);
};

import { Phone, Mail } from "lucide-react";
import contactImage from "@/assets/enhanced-office.jpg";

const Contacts = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="contacts">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-body font-medium uppercase tracking-[0.2em] text-muted-foreground border-l-2 border-primary pl-3 mb-6">
              Контакты
            </span>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-heading font-semibold text-foreground leading-tight mb-6">
              Свяжитесь с нами
            </h2>
            <p className="text-lg lg:text-xl font-body text-muted-foreground leading-relaxed">
              Получите бесплатную консультацию и расчёт стоимости вашего проекта
            </p>
          </div>

          {/* Image */}
          <div className="mb-12">
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={contactImage} 
                alt="Интерьер от Твой Интерьер" 
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Scroll anchor between image and details */}
          <div id="contacts-anchor" className="h-0" />

          {/* Contact Details */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-secondary/50">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <span className="block text-base font-body text-muted-foreground mb-2">
                Телефон
              </span>
              <a 
                href="tel:+79779429040" 
                className="text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                +7 977 942 9040
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-secondary/50">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-4">
                <svg className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <span className="block text-base font-body text-muted-foreground mb-2">
                Telegram
              </span>
              <a 
                href="https://t.me/Studio_Coolagin" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                @Studio_Coolagin
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-secondary/50">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-4">
                <span className="text-2xl font-heading font-extrabold text-primary leading-none">M</span>
              </div>
              <span className="block text-base font-body text-muted-foreground mb-2">
                MAX
              </span>
              <a 
                href="https://max.ru/+79779429040" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                +7 977 942 9040
              </a>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-secondary/50">
              <div className="w-14 h-14 flex items-center justify-center bg-primary/10 mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <span className="block text-base font-body text-muted-foreground mb-2">
                Email
              </span>
              <a 
                href="mailto:info@coolagin.design" 
                className="text-xl font-heading font-semibold text-foreground hover:text-primary transition-colors"
              >
                info@coolagin.design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

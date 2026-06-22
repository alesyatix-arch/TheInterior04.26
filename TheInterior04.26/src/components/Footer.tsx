import { Link, useLocation, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { Phone, Mail } from "lucide-react";
=======
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
import Logo from "@/components/Logo";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    e.preventDefault();
    if (isRoute) {
      navigate(href);
      return;
    }
    if (isHome) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const navLinks: { href: string; label: string; isRoute?: boolean }[] = [
    { href: "/team", label: "О нас", isRoute: true },
    { href: "#styles", label: "Стили" },
<<<<<<< HEAD
    { href: "#services", label: "Форматы" },
    { href: "#calculator", label: "Калькулятор" },
    { href: "#faq", label: "FAQ" },
    { href: "#consultation", label: "Консультация" },
  ];

  return (
    <footer id="contacts" className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        {/* Контакты */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12 lg:mb-14">
          <div className="flex items-center sm:items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-background/10 shrink-0">
              <Phone className="w-5 h-5 text-background" />
            </div>
            <div>
              <span className="block text-xs font-body uppercase tracking-[0.2em] text-background/75 mb-1">
                Телефон
              </span>
              <a
                href="tel:+79779429040"
                className="text-base lg:text-lg font-heading font-semibold text-background hover:text-primary transition-colors"
              >
                +7 977 942 9040
              </a>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-background/10 shrink-0">
              <svg className="w-5 h-5 text-background" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <div>
              <span className="block text-xs font-body uppercase tracking-[0.2em] text-background/75 mb-1">
                Telegram
              </span>
              <a
                href="https://t.me/Studio_Coolagin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg font-heading font-semibold text-background hover:text-primary transition-colors"
              >
                @Studio_Coolagin
              </a>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-background/10 shrink-0">
              <span className="text-lg font-heading font-extrabold text-background leading-none">M</span>
            </div>
            <div>
              <span className="block text-xs font-body uppercase tracking-[0.2em] text-background/75 mb-1">
                MAX
              </span>
              <a
                href="https://max.ru/+79779429040"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base lg:text-lg font-heading font-semibold text-background hover:text-primary transition-colors"
              >
                +7 977 942 9040
              </a>
            </div>
          </div>

          <div className="flex items-center sm:items-start gap-4">
            <div className="w-11 h-11 flex items-center justify-center bg-background/10 shrink-0">
              <Mail className="w-5 h-5 text-background" />
            </div>
            <div>
              <span className="block text-xs font-body uppercase tracking-[0.2em] text-background/75 mb-1">
                Email
              </span>
              <a
                href="mailto:info@coolagin.design"
                className="text-base lg:text-lg font-heading font-semibold text-background hover:text-primary transition-colors"
              >
                info@coolagin.design
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <Logo className="h-20 w-20 text-base" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                className="text-sm lg:text-base font-body text-background/80 hover:text-background transition-colors"
=======
    { href: "#services", label: "Услуги" },
    
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-12 xl:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center">
            <Logo className="h-24 w-24 text-lg" />
          </a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                className="text-base font-body text-background/60 hover:text-background transition-colors"
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
              >
                {link.label}
              </a>
            ))}
          </nav>

<<<<<<< HEAD
          <p className="text-sm font-body text-background/85">
=======
          {/* Copyright */}
          <p className="text-base font-body text-background/40">
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
            © 2026 Твой Интерьер by Coolagin.Design
          </p>
        </div>

        {/* Legal links */}
        <div className="flex flex-col items-center gap-3 mt-10 pt-8 border-t border-background/10">
<<<<<<< HEAD
          <Link to="/public-offer" className="text-sm font-body text-background/75 hover:text-background transition-colors underline">
            Публичная оферта
          </Link>
          <Link to="/privacy-policy" className="text-sm font-body text-background/75 hover:text-background transition-colors underline">
            Политика конфиденциальности
          </Link>
          <Link to="/yandex-consent" className="text-sm font-body text-background/75 hover:text-background transition-colors underline">
=======
          <Link to="/public-offer" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
            Публичная оферта
          </Link>
          <Link to="/privacy-policy" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
            Политика конфиденциальности
          </Link>
          <Link to="/yandex-consent" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
            Согласие на обработку данных Яндекс Метрика
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10">
<<<<<<< HEAD
          <p className="text-xs font-body text-background/80 text-center leading-relaxed">
=======
          <p className="text-xs font-body text-background/30 text-center leading-relaxed">
>>>>>>> 2470cdd4f31f8e8c76332f301c8d7a8d6bc8c4f5
            © Твой Интерьер, 2026 г. Все права защищены. Копирование любых материалов с данного сайта запрещено, в том числе с активной гиперссылкой на данный сайт, и преследуется по закону. ИП Кулагин А.С., ИНН 772155337685, ОГРНИП 316774600431298, в АО «Тинькофф Банк» с 40802810400000033298.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

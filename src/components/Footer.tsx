import { Link, useLocation, useNavigate } from "react-router-dom";
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
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-base font-body text-background/40">
            © 2026 Твой Интерьер by Coolagin.Design
          </p>
        </div>

        {/* Legal links */}
        <div className="flex flex-col items-center gap-3 mt-10 pt-8 border-t border-background/10">
          <Link to="/public-offer" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
            Публичная оферта
          </Link>
          <Link to="/privacy-policy" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
            Политика конфиденциальности
          </Link>
          <Link to="/yandex-consent" className="text-sm font-body text-background/50 hover:text-background transition-colors underline">
            Согласие на обработку данных Яндекс Метрика
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-background/10">
          <p className="text-xs font-body text-background/30 text-center leading-relaxed">
            © Твой Интерьер, 2026 г. Все права защищены. Копирование любых материалов с данного сайта запрещено, в том числе с активной гиперссылкой на данный сайт, и преследуется по закону. ИП Кулагин А.С., ИНН 772155337685, ОГРНИП 316774600431298, в АО «Тинькофф Банк» с 40802810400000033298.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

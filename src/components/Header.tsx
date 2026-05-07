import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/team", label: "О нас", isRoute: true },
    { href: "#styles", label: "Стили" },
    { href: "#services", label: "Услуги" },
    
    { href: "#contacts", label: "Контакты" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isRoute?: boolean) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm py-2" 
          : isHome
            ? "bg-foreground/20 backdrop-blur-[6px] py-2"
            : "bg-transparent py-2"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex items-center shrink-0">
            <img
              src={logoHorizontal}
              alt="Твой Интерьер"
              className="h-7 lg:h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                className={`text-base font-body font-medium transition-colors tracking-wide ${
                  isHome && !isScrolled && !isMobileMenuOpen
                    ? "text-background/85 hover:text-background"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop contacts + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:+79779429040"
              className={`flex items-center gap-2 text-sm font-body font-medium transition-colors tracking-wide ${
                isHome && !isScrolled && !isMobileMenuOpen
                  ? "text-background/85 hover:text-background"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              <Phone className="w-4 h-4" />
              +7 977 942 9040
            </a>
            <a
              href="https://t.me/Studio_Coolagin"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-body font-medium transition-colors tracking-wide ${
                isHome && !isScrolled && !isMobileMenuOpen
                  ? "text-background/85 hover:text-background"
                  : "text-foreground/80 hover:text-primary"
              }`}
              aria-label="Telegram"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram
            </a>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                if (isHome) {
                  document.querySelector("#contacts-anchor")?.scrollIntoView({ behavior: "smooth", block: "center" });
                } else {
                  navigate("/#contacts");
                }
              }}
              className="inline-flex items-center justify-center h-7 lg:h-8 px-4 bg-primary text-primary-foreground text-xs font-body font-medium uppercase tracking-wide hover:bg-primary/90 transition-colors"
            >
              Заказать
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden flex items-center justify-center w-12 h-12 ${
              isHome && !isScrolled && !isMobileMenuOpen ? "text-background" : "text-foreground"
            }`}
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden pt-6 pb-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.isRoute)}
                  className="text-lg font-body font-medium text-foreground py-3 px-2 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#calculator"
                onClick={(e) => handleNavClick(e, "#calculator")}
                className="mt-4 inline-flex items-center justify-center h-12 px-6 bg-primary text-primary-foreground text-base font-body font-medium tracking-wide hover:bg-primary/90 transition-colors"
              >
                Рассчитать стоимость
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

import { cn } from "@/lib/utils";
import logoImage from "@/assets/logo-tvoy-interier.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <img
      src={logoImage}
      alt="Твой интерьер"
      className={cn("aspect-square object-contain", className)}
    />
  );
};

export default Logo;

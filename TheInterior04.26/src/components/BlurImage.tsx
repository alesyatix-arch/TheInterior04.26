import { useState, ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  blurDataURL: string;
  alt: string;
  wrapperClassName?: string;
}

/**
 * Image with a blur-up placeholder (LQIP).
 * The tiny base64 placeholder shows instantly as a blurred background,
 * then fades to the full image once loaded.
 */
const BlurImage = ({
  src,
  blurDataURL,
  alt,
  className,
  wrapperClassName,
  onLoad,
  ...rest
}: BlurImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn("relative overflow-hidden", wrapperClassName)}
      style={{
        backgroundImage: `url(${blurDataURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurred backdrop layer for a softer effect */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 transition-opacity duration-700",
          loaded ? "opacity-0" : "opacity-100",
        )}
        style={{
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px)",
          transform: "scale(1.1)",
        }}
      />
      <img
        src={src}
        alt={alt}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={cn(
          "relative transition-opacity duration-700",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
        {...rest}
      />
    </div>
  );
};

export default BlurImage;

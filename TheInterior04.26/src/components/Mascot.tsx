import { useEffect, useRef, useState } from "react";
import mascotImg from "@/assets/mascot.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Mascot = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [flip, setFlip] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      setFlip(e.clientX < cx);

      const dx = (e.clientX - cx) / window.innerWidth;
      const dy = (e.clientY - cy) / window.innerHeight;
      setTilt({ x: dx * 8, y: dy * -5 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={ref}
        onClick={() => setShowDiscount(true)}
        className="fixed bottom-6 right-6 z-50 w-24 h-24 md:w-32 md:h-32 transition-transform duration-300 ease-out cursor-pointer hover:scale-110"
        style={{
          transform: `scaleX(${flip ? -1 : 1}) rotate(${tilt.x}deg) translateY(${tilt.y}px)`,
        }}
      >
        <img
          src={mascotImg}
          alt="Талисман Твой Интерьер"
          className="w-full h-full object-contain animate-[bounce_3s_ease-in-out_infinite]"
          draggable={false}
        />
      </div>

      <Dialog open={showDiscount} onOpenChange={setShowDiscount}>
        <DialogContent className="max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-3xl font-heading text-primary">
              🎉 Скидка 5%
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground mt-2">
              Нажмите на маскота — получите скидку! Назовите промокод{" "}
              <span className="font-semibold text-foreground">INTERIOR5</span>{" "}
              при заказе и получите скидку 5% на любой пакет услуг.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Mascot;

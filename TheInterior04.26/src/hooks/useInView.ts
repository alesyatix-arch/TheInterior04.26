import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, inView] — sets inView=true the first time the element
 * enters (or is about to enter) the viewport. Stays true after that so
 * heavy widgets initialize once and don't tear down on scroll.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  rootMargin = "300px"
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (inView) return;
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [inView, rootMargin]);

  return [ref, inView];
}

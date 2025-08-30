import { useEffect } from "react";

export default function useInView(ref, onEnter, options = { threshold: 0.2 }) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let triggered = false;

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            onEnter?.(entry);
            obs.disconnect();
          }
        });
      }, options);

      obs.observe(node);
      return () => obs.disconnect();
    } else {
      // Fallback for very old browsers
      onEnter?.({ target: node });
    }
  }, [ref, onEnter, options.threshold]);
}

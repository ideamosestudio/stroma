"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return children;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.5,
        easing: easeOutExpo,
        smoothWheel: true,
        syncTouch: false,
        anchors: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

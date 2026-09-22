"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

const easeOutExpo = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export default function SmoothScrollProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return children;

  return (
    <ReactLenis
      root
      options={{
        // `lerp` controls the continuous mouse-wheel damping (lower = more
        // trailing/slower); `duration`+`easing` only apply to the
        // programmatic scrollTo() used for anchor-link clicks below.
        lerp: 0.065,
        duration: 1.6,
        easing: easeOutExpo,
        smoothWheel: true,
        wheelMultiplier: 0.85,
        syncTouch: false,
        anchors: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}

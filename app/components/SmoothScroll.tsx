"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,     // suavidad del desplazamiento
      duration: 1.2,  // tiempo total del movimiento
      smoothWheel: true,
    });

    // Guardar en window para control externo
    (window as any).lenis = lenis;

    let frame: number;

    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    // Limpieza al desmontar
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}

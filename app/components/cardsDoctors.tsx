"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Card = {
  title: string;
  subtitle: string;
  description?: string;
  src: string;
};

function DoctorsCards({ cards }: { cards: Card[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(id);
  }, [cards.length, paused]);

  return (
    <div
      className="hidden xl:flex relative w-[300px] h-[300px] 2xl:w-[550px] 2xl:h-[550px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {cards.map((card, i) => {
        const isActive = activeIndex === i;

        // Control de profundidad visual
        const zIndex = isActive
          ? "z-20"
          : i === (activeIndex + 1) % cards.length
          ? "z-10"
          : "z-0";

        const offsetClass =
          i === 0
            ? "left-0 top-0"
            : i === 1
            ? "left-10 top-6"
            : "left-20 top-12";

        return (
          <div
            key={i}
            className={`
              absolute ${offsetClass} ${zIndex}
              w-[250px] h-[300px] 2xl:w-[400px] 2xl:h-[500px] rounded-2xl overflow-hidden shadow-lg
              transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]
              ${
                isActive
                  ? "scale-105 -translate-y-2 shadow-2xl"
                  : "scale-100 translate-y-0"
              }
            `}
            style={{
              filter: isActive
                ? "brightness(1)"
                : "brightness(0.85) blur(0.5px)",
              transition:
                "all 1s cubic-bezier(0.25, 0.1, 0.25, 1), filter 0.8s ease",
            }}
          >
            <div className="relative w-full h-full">
              {/* Imagen principal */}
              <Image
                src={card.src}
                alt={card.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />

              {/* Degradado inferior para mejor contraste */}
              <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/50 to-transparent z-40" />

              {/* Overlay inferior con nombre y especialidad */}
              <div
                className={`
                  absolute bottom-4 left-4 right-4
                  z-50 text-white
                  bg-black/70 backdrop-blur-sm rounded-xl
                  px-4 py-3
                  transition-all duration-500
                  ${
                    isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }
                `}
              >
                <h3 className="text-lg font-semibold leading-tight text-blue-500">
                  {card.title}
                </h3>
                <p className="text-sm text-zinc-100 font-medium drop-shadow-sm">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DoctorsCards;

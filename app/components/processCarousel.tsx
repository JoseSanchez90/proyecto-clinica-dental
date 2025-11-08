"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";

const Process = [
  {
    number: "1",
    title: "Examen Inicial",
    description:
      "Evaluamos tu boca para detectar cualquier signo de caries, gingivitis u otros problemas dentales.",
  },
  {
    number: "2",
    title: "Eliminación de Placa",
    description:
      "Con herramientas especializadas, removemos cuidadosamente la placa y el sarro acumulados.",
  },
  {
    number: "3",
    title: "Pulido Dental",
    description:
      "Pulimos tus dientes con una pasta profiláctica para alisar la superficie y eliminar manchas superficiales.",
  },
  {
    number: "4",
    title: "Aplicación de Flúor",
    description:
      "Finalizamos con un tratamiento de flúor para fortalecer el esmalte y prevenir futuras caries.",
  },
];

export default function ProcessCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList().map((_, i) => i));
    emblaApi.on("select", () => onSelect(emblaApi));
    onSelect(emblaApi);

    const handleResize = () => emblaApi.reInit();
    window.addEventListener("resize", handleResize);
    return () => {
      emblaApi.off("select", () => onSelect(emblaApi));
      window.removeEventListener("resize", handleResize);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi && emblaApi.scrollTo(index);

  return (
    <div className="block lg:hidden w-full pl-6 mt-10">
      {/* Carrusel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {Process.map((item, i) => (
            <div
              key={i}
              className="flex-[0_0_85%] h-80 min-w-0 relative flex flex-col gap-4 bg-blue-600 p-6 rounded-xl mx-4"
            >
              {/* Sombras curvas */}
              <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
              <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>

              <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center mx-auto">
                <p className="text-blue-600 text-base font-bold">{item.number}</p>
              </div>
              <p className="text-white text-center font-semibold text-base">{item.title}</p>
              <p className="text-white text-center text-sm font-medium">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores inferiores */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Ir al paso ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-blue-600 w-10" : "bg-gray-300 w-6"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

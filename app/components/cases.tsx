"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    title: "Un futuro más brillante: el tratamiento de blanqueamiento de Sarah",
    year: "2024",
    tags: ["Blanqueamiento", "Cuidado Dental"],
    image: "/images/case1.webp",
  },
  {
    title: "Una transformación hermosa: la ortodoncia de Olivia",
    year: "2024",
    tags: ["Ortodoncia", "Cuidado Dental"],
    image: "/images/case2.webp",
  },
  {
    title: "Recuperando la confianza: el implante dental de Marcos",
    year: "2024",
    tags: ["Implante Dental", "Rehabilitación Oral"],
    image: "/images/case3.webp",
  },
  {
    title: "Una sonrisa renovada: la restauración estética de Laura",
    year: "2024",
    tags: ["Estética Dental", "Cuidado Dental"],
    image: "/images/case4.webp",
  },
];

function Cases() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 bg-[#0B1537]">
      <div className="w-full max-w-7xl flex flex-col gap-10 2xl:gap-16 justify-center items-start pt-10 2xl:pt-0">
        {/* ===== Título principal ===== */}
        <div className="flex flex-col gap-2 2xl:gap-6">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-zinc-100">
            Nuestros <span className="text-blue-600">Casos</span>
          </h2>
          <div className="text-2xl lg:text-3xl 2xl:text-5xl font-bold">
            <h3 className="text-blue-600">Historias de pacientes hacia</h3>
            <h4 className="text-zinc-100">sonrisas sanas y felices</h4>
          </div>
        </div>

        {/* ===== Carousel ===== */}
        <div className="w-full flex flex-col items-center">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex gap-8">
              {cases.map((item, i) => (
                <div
                  key={i}
                  className="flex-[0_0_85%] md:flex-[0_0_46%] lg:flex-[0_0_31%] xl:flex-[0_0_31%] 2xl:flex-[0_0_31%] relative rounded-3xl overflow-hidden shadow-xl group"
                >
                  {/* Imagen */}
                  <div className="relative w-full h-[350px] md:h-[500px] lg:h-80 xl:h-[250px] 2xl:h-[380px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>
                  </div>

                  {/* Contenido */}
                  <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-4">
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="border border-white/40 text-xs px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      {item.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="border border-white/40 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Controles e indicador abajo ===== */}
          <div className="mt-5 2xl:mt-10 flex items-center justify-center gap-6">
            {/* Botón anterior */}
            <button
              onClick={scrollPrev}
              className="bg-blue-500 text-white rounded-full p-3 shadow-md transition-all duration-300 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Indicador */}
            <div className="flex items-center gap-3 text-white text-sm">
              <span className="font-medium text-blue-500">
                {selectedIndex + 1}
              </span>
              <div className="w-24 h-[3px] bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{
                    width: `${
                      ((selectedIndex + 1) / scrollSnaps.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="opacity-70">{scrollSnaps.length}</span>
            </div>

            {/* Botón siguiente */}
            <button
              onClick={scrollNext}
              className="bg-blue-500 text-white rounded-full p-3 shadow-md transition-all duration-300 cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;

"use client";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import DoctorsCards from "./cardsDoctors";
import CurvedLoop from "@/components/CurvedLoop";

const cards = [
  {
    title: "Dra. Yuliana Villanueva",
    subtitle: "Especialista en Rehabilitación Oral",
    src: "/images/doctora-1.webp",
  },
  {
    title: "Dr. Ricardo Vega",
    subtitle: "Especialista en Ortodoncia y Estética Facial",
    src: "/images/doctor-3.webp",
  },
  {
    title: "Dra. Mariana Torres",
    subtitle: "Odontóloga Estética y Preventiva",
    src: "/images/doctora-2.webp",
  },
];

const advantages = [
  {
    icon: <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />,
    description: "Cuidado dental personalizado basado en la confianza.",
  },
  {
    icon: <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />,
    description:
      "Profesionales con experiencia y reconocidos por su excelencia.",
  },
  {
    icon: <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />,
    description: "Especialistas apasionados por crear sonrisas auténticas.",
  },
  {
    icon: <FaCheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />,
    description: "Innovación y tecnología para resultados duraderos.",
  },
];

function About() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);

  return (
    <div className="w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto min-h-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 lg:gap-6 xl:gap-0 2xl:gap-20 pt-20 lg:pt-20 xl:pt-30 2xl:pt-40">
        {/* ==== LEFT SIDE (IMÁGENES DOCTORES) ==== */}
        <div className="relative flex justify-center items-center">
          {/* ==== DESKTOP VERSION ==== */}
          <DoctorsCards cards={cards} />

          {/* ==== MOBILE VERSION (CAROUSEL) ==== */}
          <div className="xl:hidden w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex-[0_0_80%] lg:flex-[0_0_30%] mx-auto relative min-w-0 p-4"
                >
                  <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-md">
                    <Image
                      src={card.src}
                      alt={card.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-blue-600">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-500">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==== RIGHT SIDE (TEXTO Y DETALLES) ==== */}
        <div className="flex flex-col gap-6 2xl:gap-10 px-6 lg:px-0">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-2xl 2xl:text-4xl font-semibold text-zinc-700 text-start">
              Sobre <span className="text-blue-600">Nosotros</span>
            </h2>
            <h3 className="text-2xl lg:text-3xl 2xl:text-5xl font-bold text-blue-600 text-start">
              10 Años de Experiencia{" "}
              <span className="text-zinc-700">en Cuidado Dental</span>
            </h3>
            <p className="text-zinc-700 text-base 2xl:text-lg font-medium text-start">
              Contamos con un equipo de profesionales apasionados por la
              odontología, en constante formación para ofrecerte los
              tratamientos más innovadores y efectivos. Tu bienestar es nuestra
              prioridad.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-5">
            {advantages.map((items, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="mt-0.5 md:mt-0">{items.icon}</div>
                <p className="text-base 2xl:text-lg font-medium text-zinc-700 leading-5">
                  {items.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative top-10 2xl:top-20 bg-blue-700">
        <CurvedLoop
          marqueeText="Ortodoncia  ✦  Blanqueamiento  ✦  Implante dental  ✦  Brackets  ✦  Cirugía dental  ✦ "
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={false}
          className="custom-text-style"
        />
      </div>
    </div>
  );
}

export default About;

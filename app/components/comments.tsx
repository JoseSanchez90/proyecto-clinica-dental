"use client";

import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import Star from "@/public/images/star.svg";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const comments = [
  {
    name: "María López",
    role: "Paciente de Ortodoncia",
    text: "El trato fue excepcional desde el primer día. El equipo es muy profesional y cercano. ¡Mi nueva sonrisa me ha devuelto la confianza!",
  },
  {
    name: "Juan Rodríguez",
    role: "Paciente de Implantes",
    text: "Tenía mucho miedo al dentista, pero aquí me hicieron sentir muy cómodo. La tecnología que usan es increíble y no sentí nada de dolor.",
  },
  {
    name: "Sofía García",
    role: "Paciente de Estética Dental",
    text: "¡Resultados fantásticos con el blanqueamiento dental! Recomiendo la clínica a todos mis amigos y familiares. Un servicio de 10.",
  },
];

function Comments() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-10 lg:gap-16 xl:gap-10 pt-50 pb-20 lg:pt-0 lg:pb-0 lg:py-16 2xl:gap-20 xl:py-40 2xl:py-50">
        <div className="max-w-xs lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col justify-center items-center gap-2 lg:gap-4 xl:gap-8">
          <h2 className="text-zinc-700 text-2xl lg:text-[40px] 2xl:text-[70px] text-center font-semibold xl:leading-2 2xl:leading-10">
            Lo que dicen{" "}
            <span className="text-blue-600">nuestros pacientes</span>
          </h2>
          <p className="text-zinc-500 text-base lg:text-lg xl:text-xl 2xl:text-3xl text-center font-medium">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa
          </p>
        </div>

        <div className="max-w-xs lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto hidden lg:grid grid-cols-3 lg:gap-8 xl:gap-16 2xl:gap-20 z-10">
          <div className="relative flex flex-col justify-between gap-4 xl:gap-4 2xl:gap-8 p-4 xl:p-6 2xl:p-8 bg-white border border-gray-400 rounded-lg">
            {/* Sombras curvas */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
              </div>
              <p className="font-medium text-xs lg:text-sm xl:text-base">
                "El trato fue excepcional desde el primer día. El equipo es muy
                profesional y cercano. ¡Mi nueva sonrisa me ha devuelto la
                confianza!"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-12 h-12 text-zinc-500" />
              <div className="flex flex-col">
                <p className="text-sm lg:text-base xl:text-lg font-bold">
                  María López
                </p>
                <p className="text-xs lg:text-sm xl:text-base font-medium">
                  Paciente de Ortodoncia
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-4 xl:gap-4 2xl:gap-8 p-4 xl:p-6 2xl:p-8 bg-white border border-gray-400 rounded-lg">
            {/* Sombras curvas */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
              </div>
              <p className="font-medium text-xs lg:text-sm xl:text-base">
                "Tenía mucho miedo al dentista, pero aquí me hicieron sentir muy
                cómodo. La tecnología que usan es increíble y no sentí nada de
                dolor."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-12 h-12 text-zinc-500" />
              <div className="flex flex-col">
                <p className="text-sm lg:text-base xl:text-lg font-bold">
                  Juan Rodríguez
                </p>
                <p className="text-xs lg:text-sm xl:text-base font-medium">
                  Paciente de Implantes
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between gap-4 xl:gap-4 2xl:gap-8 p-4 xl:p-6 2xl:p-8 bg-white border border-gray-400 rounded-lg">
            {/* Sombras curvas */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
                <Image src={Star} alt="Star-Icon" className="w-6 h-6" />
              </div>
              <p className="font-medium text-xs lg:text-sm xl:text-base">
                "¡Resultados fantásticos con el blanqueamiento dental!
                Recomiendo la clínica a todos mis amigos y familiares. Un
                servicio de 10."
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaUserCircle className="w-12 h-12 text-zinc-500" />
              <div className="flex flex-col">
                <p className="text-sm lg:text-base xl:text-lg font-bold">
                  Sofía García
                </p>
                <p className="text-xs lg:text-sm xl:text-base font-medium">
                  Paciente de Estética Dental
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="max-w-sm mx-auto flex flex-col lg:hidden relative w-full overflow-hidden z-10">
          {/* Embla viewport */}
          <div className="py-2" ref={emblaRef}>
            <div className="flex">
              {comments.map((c, i) => (
                <motion.div
                  key={i}
                  className="flex-[0_0_90%] mx-[5%]" // deja márgenes a los lados
                  initial={{ opacity: 0.9, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative flex flex-col justify-between gap-4 p-8 bg-white border border-gray-300 rounded-lg shadow-md">
                    {/* Sombras curvas */}
                    <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
                    <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>

                    {/* Estrellas */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Image
                          key={j}
                          src={Star}
                          alt="Star-Icon"
                          className="w-5 h-5"
                        />
                      ))}
                    </div>

                    {/* Texto */}
                    <p className="font-medium text-sm text-zinc-700">
                      “{c.text}”
                    </p>

                    {/* Usuario */}
                    <div className="flex items-center gap-4 mt-4">
                      <FaUserCircle className="w-12 h-12 text-zinc-400" />
                      <div className="flex flex-col">
                        <p className="text-sm font-bold">{c.name}</p>
                        <p className="text-xs font-medium text-zinc-500">
                          {c.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {comments.map((_, i) => (
              <motion.div
                key={i}
                layout
                className={`h-1.5 rounded-full transition-all ${
                  selectedIndex === i ? "w-8 bg-blue-600" : "w-4 bg-zinc-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;

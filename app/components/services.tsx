"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";
import { FaTooth, FaTeeth, FaSmile, FaUserMd } from "react-icons/fa";
import CurvedLoop from "@/components/CurvedLoop";

const services = [
  {
    title: "Odontología General",
    description:
      "Atención completa para mantener la salud bucal, desde limpiezas hasta tratamientos preventivos.",
    image: "/images/odontologia.webp",
    icon: <FaTooth className="text-white w-6 h-6" />,
  },
  {
    title: "Implantes Dentales",
    description:
      "Reemplazamos piezas dentales con implantes seguros y estéticos, para una sonrisa natural y funcional.",
    image: "/images/implantes.webp",
    icon: <FaUserMd className="text-white w-6 h-6" />,
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Tratamientos de blanqueamiento profesional que devuelven el brillo y la confianza a tu sonrisa.",
    image: "/images/blanqueamiento.webp",
    icon: <FaSmile className="text-white w-6 h-6" />,
  },
  {
    title: "Ortodoncia",
    description:
      "Corrección de la posición dental con brackets y alineadores modernos para una sonrisa perfecta.",
    image: "/images/ortodoncia.webp",
    icon: <FaTeeth className="text-white w-6 h-6" />,
  },
];

function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, // desactivamos loop para que no sea infinito
    align: "start", // evita el desplazamiento fuera del viewport
  });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="w-full lg:max-w-5xl xl:max-w-7xl flex flex-col gap-8 2xl:gap-12 justify-center items-start xl:pt-8 2xl:pt-0">
        {/* ===== TÍTULOS ===== */}
        <div className="flex flex-col gap-2 2xl:gap-4 w-full text-start sm:text-left px-6">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-zinc-700">
            Nuestros <span className="text-blue-600">Servicios</span>
          </h2>
          <div className="flex flex-col xl:flex-row 2xl:flex-col text-2xl lg:text-3xl 2xl:text-5xl font-bold leading-tight">
            <h3 className="text-blue-600">Cuidando tu sonrisa</h3>
            <h4 className="text-zinc-700">con precisión y esmero</h4>
          </div>
        </div>

        {/* ====== CARDS DESKTOP ====== */}
        <div className="hidden xl:grid grid-cols-4 gap-6 w-full">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-zinc-100 border border-gray-200 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative w-full h-32 2xl:h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute -bottom-6 left-6 bg-blue-700 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-col gap-2 2xl:gap-4 p-6 pt-8 2xl:pt-10">
                <h3 className="text-lg font-semibold text-zinc-800">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ====== CARDS MOBILE (EMBLA CAROUSEL) ====== */}
        <div
          className="xl:hidden w-full overflow-hidden"
          ref={emblaRef}
        >
          <div className="flex gap-6 px-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_35%] xl:flex-[0_0_80%] bg-zinc-100 rounded-3xl shadow-md hover:shadow-lg transition-all duration-500 cursor-pointer"
              >
                {/* Imagen */}
                <div className="relative w-full h-52 md:h-80 lg:h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-t-3xl"
                  />
                  <div className="absolute -bottom-6 left-6 bg-blue-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Contenido */}
                <div className="flex flex-col gap-3 p-6 pt-10">
                  <h3 className="text-lg font-semibold text-zinc-800">
                    {service.title}
                  </h3>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CURVED LOOP ===== */}
      <div className="relative top-8 2xl:top-15 bg-blue-600">
        <CurvedLoop
          marqueeText=" Ortodoncia  ✦  Blanqueamiento  ✦  Implante dental  ✦  Brackets  ✦  Cirugía dental  ✦ "
          speed={1}
          curveAmount={0}
          direction="right"
          interactive={false}
          className="custom-text-style"
        />
      </div>
    </section>
  );
}

export default Services;

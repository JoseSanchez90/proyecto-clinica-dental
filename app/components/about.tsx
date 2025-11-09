import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";
import Doctor from "@/public/images/doctor.webp";
import Doctora from "@/public/images/doctora.webp";
import Doctorm from "@/public/images/doctorm.webp";
import Doctoram from "@/public/images/doctoram.webp";

const cards = [
  {
    title: "Dr. Alejandro Rivas",
    subtitle: "Especialista en Rehabilitación Oral",
    description:
      "Con más de 10 años de experiencia, enfocado en devolver la funcionalidad y estética dental mediante tratamientos personalizados y de alta precisión.",
    src: "/images/doctor.webp",
  },
  {
    title: "Dra. Mariana Torres",
    subtitle: "Odontóloga Estética y Preventiva",
    description:
      "Apasionada por el diseño de sonrisas y la salud bucal, combina tecnología avanzada con un trato humano y cercano.",
    src: "/images/doctora.webp",
  },
];

function About() {
  return (
    <div className="w-full max-w-xs lg:max-w-4xl xl:max-w-7xl mx-auto min-h-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-10 lg:gap-16 xl:gap-10 2xl:gap-20 pt-20 lg:pt-40 xl:pt-30 2xl:pt-40">
        <div className="flex flex-col gap-2 lg:gap-4 xl:gap-8">
          <h2 className="text-2xl lg:text-[40px] 2xl:text-[70px] font-semibold text-zinc-700 xl:leading-2 2xl:leading-10 text-center">
            Conoce a{" "}
            <span className="text-blue-600 font-extrabold">nuestro equipo</span>
          </h2>
          <p className="text-zinc-500 text-base lg:text-lg xl:text-xl 2xl:text-3xl font-medium text-center">
            Contamos con un equipo de profesionales apasionados por la
            odontología, en constante formación para ofrecerte los tratamientos
            más innovadores y efectivos. Tu bienestar es nuestra prioridad.
          </p>
        </div>
        <div className="gap-10 lg:gap-14 xl:gap-4 2xl:gap-10">
          <div className="hidden xl:flex">
            <FocusCards cards={cards} />
          </div>
          <div className="xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 px-4 md:px-0">
            <div className="relative z-10 flex">
              <div className="w-full h-full flex flex-col lg:flex-row bg-blue-600 rounded-3xl">
                {/* Primera sombra curva */}
                <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 lg:rotate-[4deg] origin-bottom"></div>
                {/* Segunda sombra más curva */}
                <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 lg:rotate-[8deg] origin-bottom"></div>

                <Image
                  src={Doctor}
                  alt="Doctor"
                  className="hidden lg:flex w-50 h-full rounded-l-3xl"
                />
                <Image
                  src={Doctorm}
                  alt="Doctor"
                  className="flex lg:hidden w-full h-60 rounded-t-3xl"
                />
                <div className="p-4 space-y-2 text-white">
                  <h2 className="text-base font-semibold">
                    Dr. Alejandro Rivas
                  </h2>
                  <p className="text-sm italic font-medium">
                    Especialista en Rehabilitación Oral
                  </p>
                  <p className="text-xs md:text-sm">
                    Con más de 10 años de experiencia, enfocado en devolver la
                    funcionalidad y estética dental mediante tratamientos
                    personalizados y de alta precisión.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex">
              <div className="w-full h-full flex flex-col lg:flex-row bg-blue-600 rounded-3xl">
                {/* Primera sombra curva */}
                <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 lg:rotate-[4deg] origin-bottom"></div>
                {/* Segunda sombra más curva */}
                <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 lg:rotate-[8deg] origin-bottom"></div>

                <Image
                  src={Doctora}
                  alt="Doctor"
                  className="hidden lg:flex w-50 h-full rounded-l-3xl"
                />
                <Image
                  src={Doctoram}
                  alt="Doctor"
                  className="flex lg:hidden w-full h-60 rounded-t-3xl"
                />
                <div className="p-4 space-y-2 text-white">
                  <h2 className="text-base font-semibold">
                    Dra. Mariana Torres
                  </h2>
                  <p className="text-sm italic font-medium">
                    Odontóloga Estética y Preventiva
                  </p>
                  <p className="text-xs md:text-sm">
                    Apasionada por el diseño de sonrisas y la salud bucal,
                    combina tecnología avanzada con un trato humano y cercano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

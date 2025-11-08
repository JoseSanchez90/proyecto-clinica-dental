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
    <div className="w-full max-w-xs lg:max-w-4xl xl:max-w-7xl 2xl:max-w-380 mx-auto min-h-full flex justify-center items-center">
      <div className="w-full flex flex-col gap-6 lg:gap-6 xl:gap-16 2xl:gap-30 pt-20 lg:pt-24 xl:pt-26 2xl:pt-40">
        <h2 className="text-2xl lg:text-[40px] 2xl:text-[70px] font-semibold text-zinc-700 xl:leading-2 2xl:leading-10 text-center">
          Conoce a{" "}
          <span className="text-blue-600 font-extrabold">nuestro equipo</span>
        </h2>
        <div className="grid xl:grid-cols-6 2xl:grid-cols-5 gap-10 lg:gap-14 xl:gap-4 2xl:gap-10">
          <div className="xl:col-span-2 2xl:col-span-2 flex flex-col gap-4 justify-center items-start">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-blue-600">
                Nuestra Filosofía
              </h3>
              <p className="text-sm lg:text-base xl:text-base 2xl:text-xl font-medium">
                En Clínica Dental Sonrisa, creemos que una sonrisa saludable es
                la base de una vida feliz. Nuestra filosofía se centra en
                ofrecer un cuidado dental excepcional, personalizado y humano.
                Combinamos tecnología de vanguardia con un trato cercano para
                que te sientas cómodo y seguro en cada visita.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-blue-600">
                Equipo de Expertos
              </h3>
              <p className="text-sm lg:text-base xl:text-base 2xl:text-xl font-medium">
                Contamos con un equipo de profesionales apasionados por la
                odontología, en constante formación para ofrecerte los
                tratamientos más innovadores y efectivos. Tu bienestar es
                nuestra prioridad.
              </p>
            </div>
          </div>
          <div className="hidden xl:flex xl:col-span-4 2xl:col-span-3">
            <FocusCards cards={cards} />
          </div>
          <div className="xl:hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div className="relative z-10 flex">
              <div className="w-full h-full flex flex-col lg:flex-row bg-blue-600 rounded-3xl">
                {/* Primera sombra curva */}
                <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 lg:rotate-[4deg] origin-bottom"></div>
                {/* Segunda sombra más curva */}
                <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 lg:rotate-[8deg] origin-bottom"></div>

                <Image
                  src={Doctor}
                  alt="Doctor"
                  className="hidden lg:flex w-50 h-60 rounded-l-3xl"
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
                  <p className="text-base italic font-medium">
                    Especialista en Rehabilitación Oral
                  </p>
                  <p className="text-xs font-medium">
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
                <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
                {/* Segunda sombra más curva */}
                <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>

                <Image
                  src={Doctora}
                  alt="Doctor"
                  className="hidden lg:flex w-50 h-60 rounded-l-3xl"
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
                  <p className="text-base italic font-medium">
                    Odontóloga Estética y Preventiva
                  </p>
                  <p className="text-xs font-medium">
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

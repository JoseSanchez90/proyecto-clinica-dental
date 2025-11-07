import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Odontologia from "@/public/images/odontologia.svg";
import Estetica from "@/public/images/estetica.svg";
import Ortodoncia from "@/public/images/ortodoncia.svg";
import Implantes from "@/public/images/implantes.svg";
import { Highlighter } from "@/components/ui/highlighter";

const TypeServices = [
  {
    tittle: "Odontología General",
    descripcion:
      "Cuida tu salud bucal con revisiones y limpiezas profesionales.",
    icon: (
      <Image src={Odontologia} alt="Odontologia-imagen" className="xl:w-8 2xl:w-12 xl:h-8 2xl:h-12" />
    ),
  },
  {
    tittle: "Estética Dental",
    descripcion:
      "Consigue una sonrisa radiante con blanqueamientos y carillas.",
    icon: <Image src={Estetica} alt="Estetica-imagen" className="xl:w-8 2xl:w-12 xl:h-8 2xl:h-12" />,
  },
  {
    tittle: "Ortodoncia",
    descripcion: "Alinea tu sonrisa con brackets o alineadores invisibles.",
    icon: (
      <Image src={Ortodoncia} alt="Ortodoncia-imagen" className="xl:w-8 2xl:w-12 xl:h-8 2xl:h-12" />
    ),
  },
  {
    tittle: "Implantes Dentales",
    descripcion:
      "Recupera la funcionalidad y estética de tus dientes perdidos.",
    icon: (
      <Image src={Implantes} alt="Implantes-imagen" className="w-12 h-12" />
    ),
  },
];

function Services() {
  return (
    <div className="w-full max-w-360 mx-auto h-screen flex flex-col xl:gap-5 2xl:gap-10 justify-center items-start xl:pt-14 2xl:pt-10">
      <div className="leading-20 text-center mx-auto">
        <p className="xl:text-[40px] 2xl:text-[70px] font-semibold text-zinc-700 xl:leading-2 2xl:leading-10">
          CUIDANDO TU{" "}
          <span className="text-blue-600 font-extrabold">SONRISA</span> CON
        </p>
        <p className="xl:text-[40px] 2xl:text-[70px] font-semibold text-zinc-700">
          PRESICION Y{" "}
          <span className="text-blue-600 font-extrabold">ESMERO</span>
        </p>
      </div>
      <div className="w-full justify-center flex items-center xl:gap-20 2xl:gap-40">
        <div className="flex flex-col justify-start items-start content-start place-content-start justify-items-start text-zinc-700">
          <p className="xl:text-3xl 2xl:text-4xl font-semibold">Nuestros</p>
          <p className="xl:text-3xl 2xl:text-4xl font-semibold">Servicios</p>
          <div className="mt-4">
            <Highlighter action="highlight" color="#079C2A">
              <Highlighter action="highlight" color="#09C836">
                <div className="flex gap-4 items-center xl:text-lg 2xl:text-xl font-medium text-white px-6 py-2">
                  Expertos en
                  <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
                    <ArrowRight className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </Highlighter>
            </Highlighter>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 2xl:gap-10 xl:max-w-xl 2xl:max-w-2xl z-10">
          {TypeServices.map((items, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-2 items-center justify-center rounded-xl xl:px-4 2xl:px-6 xl:py-4 2xl:py-10 bg-blue-600 text-white"
            >
                          {/* Primera sombra curva */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-[4deg] origin-bottom"></div>
            {/* Segunda sombra más curva */}
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-[8deg] origin-bottom"></div>
              <p>{items.icon}</p>
              <p className="font-semibold xl:text-base 2xl:text-lg">
                {items.tittle}
              </p>
              <p className="text-center font-medium xl:text-xs 2xl:text-sm">
                {items.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

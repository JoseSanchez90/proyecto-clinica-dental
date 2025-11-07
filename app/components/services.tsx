import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Odontologia from "@/public/images/odontologia.svg";
import Estetica from "@/public/images/estetica.svg";
import Ortodoncia from "@/public/images/ortodoncia.svg";
import Implantes from "@/public/images/implantes.svg";

const TypeServices = [
  {
    tittle: "Odontología General",
    descripcion:
      "Cuida tu salud bucal con revisiones y limpiezas profesionales.",
    icon: (
      <Image src={Odontologia} alt="Odontologia-imagen" className="w-12 h-12" />
    ),
  },
  {
    tittle: "Estética Dental",
    descripcion:
      "Consigue una sonrisa radiante con blanqueamientos y carillas.",
    icon: <Image src={Estetica} alt="Estetica-imagen" className="w-12 h-12" />,
  },
  {
    tittle: "Ortodoncia",
    descripcion: "Alinea tu sonrisa con brackets o alineadores invisibles.",
    icon: (
      <Image src={Ortodoncia} alt="Ortodoncia-imagen" className="w-12 h-12" />
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
    <div className="w-full max-w-360 mx-auto h-screen flex flex-col gap-20 justify-center items-start">
      <div className="">
        <p className="text-[90px] font-semibold leading-20 text-zinc-700">
          CUIDANDO TU{" "}
          <span className="text-blue-600 font-extrabold">SONRISA</span> CON
        </p>
        <p className="text-[90px] font-semibold text-zinc-700">
          PRESICION Y{" "}
          <span className="text-blue-600 font-extrabold">ESMERO</span>
        </p>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-col text-zinc-700">
          <p className="text-4xl font-semibold">Nuestros</p>
          <p className="text-4xl font-semibold">Servicios</p>
          <p className="flex gap-2 items-center text-xl font-medium text-blue-700 mt-4">
            Expertos en
            <ArrowRight className="w-7 h-7" />
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {TypeServices.map((items, i) => (
            <div key={i} className="flex flex-col gap-2 items-center justify-center border-2 border-gray-300 bg-white rounded-4xl p-6">
              <p>{items.icon}</p>
              <p className="font-semibold text-xl text-zinc-700">{items.tittle}</p>
              <p className="text-center font-medium text-zinc-600">{items.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

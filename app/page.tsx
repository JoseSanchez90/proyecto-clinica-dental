import Image from "next/image";
import Dental from "@/public/images/dental.png";
import Logo from "@/public/images/logo.webp";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { SpinningText } from "@/components/ui/spinning-text";
import Services from "./components/services";
import { ButtonDesktop, ButtonMobile } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-100">
      {/* Sección de inicio */}
      <section
        id="inicio"
        className="relative flex items-center justify-center w-full h-screen text-center overflow-hidden"
      >
        {/* Fondo con las palabras grandes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-400 select-none pointer-events-none">
          <h1 className="text-[15rem] font-bold leading-none tracking-tight opacity-10">
            SEGURIDAD
          </h1>
          <h1 className="text-[15rem] font-bold leading-none tracking-tight opacity-10">
            CONFIANZA
          </h1>
          <h1 className="text-[15rem] font-bold leading-none tracking-tight opacity-10">
            SONRISA
          </h1>
        </div>

        {/* Contenido principal encima */}
        <div className="relative z-10">
          <div className="w-full flex flex-col">
            <div className="flex">
              <div className="relative top-50 left-10 max-w-2xl space-y-6">
                <div className="flex items-center">
                  <div className="text-start -tracking-widest text-blue-600">
                    <p className="text-7xl font-extrabold">CLINICA DENTAL</p>
                    <p className="text-7xl font-extrabold">SMILE</p>
                  </div>
                </div>
                <p className="text-start text-3xl md:text-5xl font-semibold text-zinc-700">
                  Realizamos la mejor versión de tu sonrisa
                </p>
                <div className="flex gap-8">
                  <a href="https://wa.me/51999888777" target="_blank" rel="noopener noreferrer">
                    <ButtonDesktop
                      label="Hablemos"
                      icon={<FaWhatsapp className="w-5 h-5" />}
                    />
                  </a>
                  <Link href="#nosotros" scroll={false}>
                    <ButtonDesktop label="Conócenos" />
                  </Link>
                </div>
              </div>
              <div className="relative top-10">
                <Image src={Dental} alt="Dental-image" className="w-150" />
                <div className="relative bottom-10 left-100">
                  <div className="relative bottom-30 left-10 w-28 h-28 bg-blue-700 rounded-full flex items-center justify-center text-white">
                    <SpinningText
                      radius={5}
                      duration={15}
                      className="left-4 text-sm"
                    >
                      Realiza tu consulta gratis •
                    </SpinningText>
                    <FaTooth className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto ">
              <p className="text-zinc-700 font-medium text-lg">
                "El cuidado dental no es solo un servicio, es un espacio de
                tranquilidad donde tu salud oral es guiada con dedicación y
                experiencia."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="w-full h-screen">
        <div className="">
          <Services />
        </div>
      </section>
    </main>
  );
}

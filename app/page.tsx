import Image from "next/image";
import Dental from "@/public/images/dental.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { SpinningText } from "@/components/ui/spinning-text";
import Services from "./components/services";
import { ButtonDesktop, ButtonDesktopSecondary } from "@/components/button";
import { Highlighter } from "@/components/ui/highlighter";
import About from "./components/about";
import Cleaning from "./components/cleaning";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      {/* Sección de inicio */}
      <section
        id="inicio"
        className="relative flex items-center justify-center w-full h-screen text-center overflow-hidden"
      >
        {/* Fondo con las palabras grandes */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-blue-400 select-none pointer-events-none lg:pt-0 xl:pt-16 lg:px-10 xl:px-60 2xl:px-70">
          <h1 className="lg:text-[10rem] xl:text-[10rem] 2xl:text-[15rem] font-bold leading-none tracking-tight opacity-10">
            SEGURIDAD
          </h1>
          <h1 className="lg:text-[10rem] xl:text-[10rem] 2xl:text-[15rem] font-bold leading-none tracking-tight opacity-10">
            CONFIANZA
          </h1>
          <h1 className="lg:text-[10rem] xl:text-[10rem] 2xl:text-[15rem] font-bold leading-none tracking-tight opacity-10">
            SONRISA
          </h1>
        </div>

        {/* Contenido principal encima */}
        <div className="relative z-10">
          <div className="w-full flex flex-col">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-30 xl:gap-20 2xl:gap-10">
              <div className="relative top-20 lg:top-50 xl:top-45 2xl:top-50 lg:left-30 2xl:left-10 w-full mx-auto max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-2xl space-y-2 lg:space-y-2 xl:space-y-4 2xl:space-y-6">
                <div className="flex items-center">
                  <div className="text-start -tracking-widest text-blue-600">
                    <p className="text-4xl lg:text-5xl xl:text-4xl 2xL:text-7xl font-extrabold">
                      CLINICA DENTAL
                    </p>
                    <p className="text-4xl lg:text-5xl xl:text-4xl 2xl:text-7xl font-extrabold">
                      SMILE
                    </p>
                  </div>
                </div>
                <p className="text-start text-2xl lg:text-3xl xl:text-2xl 2xl:text-5xl font-semibold text-zinc-700">
                  Realizamos la mejor versión de tu sonrisa
                </p>
                <div className="flex gap-8">
                  <a
                    href="https://wa.me/51999888777"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ButtonDesktop
                      label="Hablemos"
                      icon={<FaWhatsapp className="w-5 h-5" />}
                    />
                  </a>
                  <a href="#nosotros">
                    <ButtonDesktopSecondary label="Conócenos" />
                  </a>
                </div>
              </div>
              <div className="relative right-2 top-5 lg:top-0 xl:top-10 2xl:top-10">
                <Image
                  src={Dental}
                  alt="Dental-image"
                  className="lg:w-120 xl:w-110 2xl:w-150"
                />
                <div className="relative lg:bottom-0 xl:bottom-0 2xl:bottom-10 left-50 lg:left-60 xl:left-70 2xl:left-100">
                  <div className="relative bottom-30 left-10 w-28 h-28 bg-blue-700 rounded-full flex items-center justify-center text-white">
                    <SpinningText
                      radius={5}
                      duration={15}
                      className="left-4 text-sm"
                    >
                      Solicita tu consulta gratis •
                    </SpinningText>
                    <FaTooth className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-xs lg:max-w-lg xl:max-w-xl 2xl:max-w-3xl mx-auto relative bottom-15 lg:bottom-20 xl:bottom-20 2xl:bottom-10">
              <p className="text-zinc-700 font-medium text-xs lg:text-sm 2xl:text-lg space-y-1 md:space-y-0">
                El{" "}
                <Highlighter action="underline" color="#38A169">
                  cuidado dental
                </Highlighter> no es solo un servicio, es un espacio de tranquilidad es un donde tu salud oral
                <Highlighter action="highlight" color="#FDE047">
                  es importante
                </Highlighter>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="w-full h-screen">
        <Services />
      </section>

      <section id="limpieza" className="w-full h-screen">
        <Cleaning />
      </section>

      <section id="nosotros" className="w-full h-screen">
        <About />
      </section>
    </div>
  );
}

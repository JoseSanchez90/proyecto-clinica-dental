import Image from "next/image";
import Dental from "@/public/images/dental.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FaTooth } from "react-icons/fa";
import { SpinningText } from "@/components/ui/spinning-text";
import Services from "./components/services";
import {
  ButtonDesktop,
  ButtonDesktopSecondary,
  ButtonMobile,
  ButtonMobileSecondary,
} from "@/components/button";
import { Highlighter } from "@/components/ui/highlighter";
import About from "./components/about";
import Cleaning from "./components/cleaning";
import Comments from "./components/comments";
import Faqs from "./components/faqs";
import Appointment from "./components/appointment";

export default function Home() {
  return (
    <div className="bg-zinc-100">
      {/* Sección de inicio */}
      <section
        id="inicio"
        className="relative flex items-center justify-center w-full min-h-dvh text-center overflow-hidden"
      >
        {/* Fondo con las palabras grandes */}
        <div className="absolute inset-0 flex flex-col items-center lg:items-start justify-center text-blue-400 select-none pointer-events-none text-center lg:text-left lg:pl-20 xl:pl-40">
          <h1 className="text-[clamp(4rem,8vw,15rem)] font-bold leading-50 lg:leading-50 xl:leading-40 2xl:leading-60 tracking-wide opacity-10">
            SEGURIDAD
          </h1>
          <h1 className="text-[clamp(4rem,8vw,15rem)] font-bold leading-50 lg:leading-50 xl:leading-40 2xl:leading-60 tracking-wide opacity-10">
            CONFIANZA
          </h1>
          <h1 className="text-[clamp(4rem,8vw,15rem)] font-bold leading-50 lg:leading-50 xl:leading-40 2xl:leading-60 tracking-wide opacity-10">
            SONRISA
          </h1>
        </div>

        {/* Contenido principal encima */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-6 lg:gap-14">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 xl:gap-24 2xl:gap-28 w-full px-4 sm:px-6 md:px-10">
            {/* Bloque de texto */}
            <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-2xl text-start space-y-3 md:space-y-4 xl:space-y-6 translate-y-8 sm:translate-y-10 lg:translate-y-0">
              <div className="text-blue-600 -tracking-widest">
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
                  CLÍNICA DENTAL
                </p>
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold">
                  SMILE
                </p>
              </div>

              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl 2xl:text-5xl font-semibold text-zinc-700">
                Realizamos la mejor versión de tu sonrisa
              </p>

              <div className="flex gap-6 sm:gap-8">
                <a
                  href="https://wa.me/51999888777"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ButtonDesktop
                    label="Hablemos"
                    icon={<FaWhatsapp className="w-5 h-5" />}
                  />
                  <ButtonMobile
                    label="Hablemos"
                    icon={<FaWhatsapp className="w-5 h-5" />}
                  />
                </a>
                <a href="#nosotros">
                  <ButtonDesktopSecondary label="Conócenos" />
                  <ButtonMobileSecondary label="Conócenos" />
                </a>
              </div>
            </div>

            {/* Imagen y círculo giratorio */}
            <div className="relative flex justify-center items-center">
              <Image
                src={Dental}
                alt="Dental-image"
                className="w-64 sm:w-80 md:w-96 lg:w-md xl:w-md 2xl:w-152 object-contain"
              />
              <div className="absolute bottom-[0%] right-[10%] sm:right-[8%] lg:right-[12%] 2xl:right-[14%]">
                <div className="w-24 lg:w-28 2xl:w-32 h-24 lg:h-28 2xl:h-32 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-lg">
                  <SpinningText
                    radius={5}
                    duration={15}
                    className="relative left-3 lg:left-4 text-xs lg:text-sm 2xl:text-base font-medium"
                  >
                    Solicita tu consulta gratis •
                  </SpinningText>
                  <FaTooth className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Texto inferior */}
          <div className="max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto px-2">
            <p className="text-zinc-700 font-medium text-sm sm:text-base lg:text-lg 2xl:text-xl text-balance">
              El{" "}
              <Highlighter action="underline" color="#38A169">
              cuidado dental
              </Highlighter>{" "}
              no es solo un servicio, es un espacio de tranquilidad donde tu
              salud oral{" "}
              <Highlighter action="highlight" color="#FDE047">
              es importante
              </Highlighter>
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="w-full h-screen">
        <Services />
      </section>

      <section className="w-full h-screen">
        <Cleaning />
      </section>

      <section id="nosotros" className="w-full min-h-screen">
        <About />
      </section>

      <section className="w-full h-full">
        <Comments />
      </section>

      <section className="w-full h-full">
        <Faqs />
      </section>

      <section id="cita" className="w-full min-h-screen">
        <Appointment />
      </section>
    </div>
  );
}

"use client";

import CurvedLoop from "@/components/CurvedLoop";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { FaCheckCircle, FaPlay } from "react-icons/fa";
import { X } from "lucide-react";

function Choose() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Simplificamos handlePlay: solo cambia el estado.
  const handlePlay = () => {
    console.log("handlePlay click"); // <-- comprobación en consola
    setIsPlaying(true);
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      // opcional: restablecer mute si lo pusimos por fallback
      videoRef.current.muted = false;
    }
    setIsPlaying(false);
  };

  // Cuando isPlaying cambia a true intentamos reproducir el video
  useEffect(() => {
    if (!isPlaying) return;

    const v = videoRef.current;
    if (!v) {
      // aún no montado, esperar un poco hasta que se monte (no usar setTimeout en handler)
      const t = setTimeout(() => {
        const v2 = videoRef.current;
        if (v2) {
          attemptPlay(v2);
        }
      }, 50);
      return () => clearTimeout(t);
    }

    attemptPlay(v);

    async function attemptPlay(videoEl: HTMLVideoElement) {
      try {
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          await playPromise;
          console.log("Reproducción iniciada sin mutear");
        }
      } catch (err) {
        console.warn("Play bloqueado, intentando con mute...", err);
        // Intento de fallback: mutear y reproducir
        try {
          videoEl.muted = true;
          const playPromise2 = videoEl.play();
          if (playPromise2 !== undefined) {
            await playPromise2;
            console.log("Reproducción iniciada con mute (fallback)");
          }
        } catch (err2) {
          console.error("No se pudo reproducir el video:", err2);
        }
      }
    }
  }, [isPlaying]);

  return (
    <section className="w-full min-h-screen max-w-7xl mx-auto flex flex-col items-center justify-center px-6">
      <div className="flex flex-col gap-4 lg:gap-8 2xl:gap-16 py-16 xl:py-0">
        {/* ===== TÍTULO Y SUBTÍTULO ===== */}
        <div className="flex flex-col items-start gap-2 2xl:gap-4">
          <h2 className="text-2xl lg:text-2xl 2xl:text-4xl font-semibold text-zinc-700">
            ¿Por qué <span className="text-blue-600">elegirnos?</span>
          </h2>
          <div className="flex flex-col xl:flex-row 2xl:flex-col text-2xl lg:text-2xl 2xl:text-4xl font-bold gap-x-2">
            <h3 className="text-blue-600">
              Beneficios de nuestros servicios dentales:
            </h3>
            <h4 className="text-zinc-700">
              Tu camino hacia una sonrisa saludable
            </h4>
          </div>
        </div>

        {/* ===== CONTENIDO PRINCIPAL ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-12 2xl:gap-20 items-center w-full">
          {/* ==== COLUMNA IZQUIERDA (IMAGEN / VIDEO) ==== */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-60 h-60 lg:w-80 lg:h-80 xl:w-68 xl:h-68 2xl:w-96 2xl:h-96 rounded-full overflow-hidden shadow-xl group">
              {isPlaying ? (
                <>
                  <video
                    ref={videoRef}
                    src="/video/patient.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    playsInline
                    controls={false}
                    onEnded={handleClose}
                    // NO forzamos muted aquí; el effect hace fallback si es necesario
                  />
                  {/* Botón de cerrar */}
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 bg-white/70 hover:bg-white/90 text-blue-600 rounded-full w-8 h-8 flex justify-center items-center shadow-md transition-all duration-300 z-20"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </>
              ) : (
                <>
                  {/* Imagen previa */}
                  {/* Hacemos que la imagen no capture clicks (pointer-events-none)
                      y elevamos el botón con z-index para asegurarnos que reciba el click */}
                  <Image
                    src="/images/patient.webp"
                    alt="Paciente feliz en la clínica dental"
                    fill
                    className="object-cover pointer-events-none"
                  />
                  {/* Botón de play */}
                  <div className="absolute inset-0 flex justify-center items-center">
                    <button
                      onClick={handlePlay}
                      className="relative w-20 h-20 bg-blue-600 backdrop-blur-md rounded-full flex justify-center items-center shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer z-20"
                      aria-label="Reproducir video"
                    >
                      <FaPlay className="text-white w-5 h-5 ml-1" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ==== COLUMNA DERECHA (TEXTO / MÉTRICAS / BENEFICIOS) ==== */}
          <div className="flex flex-col gap-4 2xl:gap-8 text-left">
            <p className="text-zinc-700 text-base 2xl:text-lg font-medium text-start">
              En Smile, cuidamos tu salud dental con un equipo de especialistas
              apasionados, tecnología de última generación y una atención
              cercana que garantiza tu bienestar y confianza.
            </p>

            {/* Métricas */}
            <div className="grid grid-cols-3 gap-2 2xl:gap-4 justify-center xl:justify-start">
              <div>
                <h3 className="text-2xl 2xl:text-4xl font-bold text-blue-600">10+</h3>
                <p className="text-xs xl:text-sm text-blue-600 mt-1 font-medium">
                  Doctores calificados
                </p>
              </div>
              <div>
                <h3 className="text-2xl 2xl:text-4xl font-bold text-blue-600">99%</h3>
                <p className="text-xs xl:text-sm text-blue-600 mt-1 font-medium">
                  Pacientes satisfechos
                </p>
              </div>
              <div>
                <h3 className="text-2xl 2xl:text-4xl font-bold text-blue-600">20K+</h3>
                <p className="text-xs xl:text-sm text-blue-600 mt-1 font-medium">
                  Citas agendadas
                </p>
              </div>
            </div>

            {/* Beneficios */}
            <div className="flex flex-col gap-3">
              {[
                "Agendamiento de citas en línea fácil y rápido",
                "Dentistas experimentados y dedicados",
                "Equipos dentales modernos y seguros",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 justify-start"
                >
                  <FaCheckCircle className="text-blue-600 w-5 h-5 shrink-0" />
                  <p className="text-zinc-700 text-sm 2xl:text-base font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Botón principal */}
            <div className="pt-2">
              <button className="bg-blue-800 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 shadow-md cursor-pointer">
                Agendar una cita
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==== LOOP INFERIOR ==== */}
      <div className="relative bottom-5 lg:bottom-0 xl:top-10 2xl:top-20 bg-blue-700">
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

export default Choose;

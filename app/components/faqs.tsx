"use client";

import { useState } from "react";
import { FaChevronDown, FaRegCommentDots, FaPhoneAlt } from "react-icons/fa";

const faqs = [
  {
    question: "¿Con qué frecuencia debo acudir al odontólogo?",
    answer:
      "Se recomienda realizar una evaluación clínica y profilaxis dental cada seis meses. Esto permite detectar de manera temprana la presencia de caries, enfermedad periodontal u otras alteraciones en la cavidad oral.",
  },
  {
    question: "¿Qué debo hacer ante una urgencia odontológica?",
    answer:
      "En caso de dolor intenso, fractura dental o hemorragia, acuda inmediatamente a nuestra clínica. Evite automedicarse y mantenga la zona limpia hasta recibir atención profesional.",
  },
  {
    question: "¿Atienden pacientes con seguros odontológicos?",
    answer:
      "Sí, trabajamos con diversos seguros odontológicos. Puede consultar previamente si su plan incluye cobertura para los procedimientos que necesite.",
  },
  {
    question: "¿El blanqueamiento dental afecta el esmalte?",
    answer:
      "No. Los tratamientos de blanqueamiento realizados por nuestros especialistas son seguros y no alteran la estructura del esmalte. Utilizamos productos clínicamente aprobados para cuidar su sonrisa.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full min-h-screen bg-[#0B1537] px-6 flex justify-center items-center">
      <div className="w-full max-w-6xl 2xl:max-w-7xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 py-16 xl:py-0">
        {/* ===== COLUMNA IZQUIERDA: FAQ ===== */}
        <div className="xl:col-span-2 flex flex-col gap-6 2xl:gap-10">
          {/* Título */}
          <div className="flex flex-col gap-4 text-white text-left">
            <h2 className="text-2xl lg:text-2xl 2xl:text-4xl font-semibold text-zinc-100">
              Preguntas <span className="text-blue-600">Frecuentes</span>
            </h2>
            <div className="text-2xl lg:text-2xl 2xl:text-4xl font-bold">
              <h3 className="text-blue-600">Cuidados Dentales Smile:</h3>
              <h4 className="text-zinc-100">resolvemos tus dudas</h4>
            </div>
            <p className="text-zinc-100 text-base 2xl:text-lg font-medium leading-relaxed">
              Encuentra las respuestas a las preguntas más comunes sobre
              nuestros tratamientos y servicios odontológicos.
            </p>
          </div>

          {/* Acordeón */}
          <div className="flex flex-col gap-4">
            {faqs.map((item, index) => (
              <div
                key={index}
                className={`rounded-xl overflow-hidden transition-all duration-300 shadow-md ${
                  openIndex === index ? "bg-blue-800" : "bg-white"
                }`}
              >
                {/* Botón de pregunta */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center text-left px-6 py-4 text-sm 2xl:text-base font-semibold transition-all duration-300 ${
                    openIndex === index
                      ? "text-white"
                      : "text-zinc-800 hover:text-blue-600"
                  }`}
                >
                  {item.question}
                  <FaChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      openIndex === index
                        ? "rotate-180 text-white"
                        : "text-zinc-600"
                    }`}
                  />
                </button>

                {/* Contenido visible al abrir */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ${
                    openIndex === index
                      ? "max-h-40 pb-4 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`text-sm font-medium leading-relaxed ${
                      openIndex === index ? "text-blue-100" : "text-zinc-600"
                    }`}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== COLUMNA DERECHA ===== */}
        <div className="flex flex-col gap-6">
          {/* Card: Contacto */}
          <div className="bg-blue-600 text-white rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[230px]">
            <div className="flex flex-col items-start gap-4">
              <FaRegCommentDots className="w-8 h-8 text-white opacity-90" />
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  ¿Tienes otras preguntas?
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Nuestro equipo está listo para responder todas tus consultas.
                  Te garantizamos una atención rápida y personalizada.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/51999888777"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 text-center bg-white text-blue-700 font-medium px-5 py-2 rounded-full hover:bg-blue-50 transition-all"
            >
              Escribenos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

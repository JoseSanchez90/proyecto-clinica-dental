"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "¿Con qué frecuencia debo acudir al odontólogo?",
    answer:
      "Se recomienda realizar una evaluación clínica y profilaxis dental cada seis meses. Esto permite identificar de manera temprana la presencia de caries, enfermedad periodontal u otras alteraciones en cavidad oral.",
  },
  {
    question: "¿Qué debo hacer ante una urgencia odontológica?",
    answer:
      "En caso de dolor intenso, fractura dental o hemorragia, se debe acudir inmediatamente al consultorio para una valoración de emergencia. Evite automedicarse y mantenga la zona limpia hasta recibir atención profesional.",
  },
  {
    question: "¿Atienden pacientes con seguros odontológicos?",
    answer:
      "Sí, trabajamos con diversos seguros odontológicos. Puede consultar previamente si su plan incluye cobertura para los procedimientos que requiera.",
  },
  {
    question: "¿El blanqueamiento dental afecta el esmalte?",
    answer:
      "Los tratamientos de blanqueamiento realizados bajo supervisión profesional no alteran la estructura del esmalte. Utilizamos agentes aclaradores seguros y controlados clínicamente para evitar sensibilidad o daño tisular.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full max-w-xs lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-10 lg:py-0 flex flex-col justify-center items-center bg-zinc-100 2xl:py-20">
      {/* Título */}
      <div className="flex flex-col text-center mb-12 gap-2 lg:gap-4">
        <h2 className="text-zinc-700 text-2xl lg:text-[40px] 2xl:text-[70px] text-center font-semibold">
          Preguntas <span className="text-blue-600">Frecuentes</span>
        </h2>
        <p className="text-zinc-500 text-base lg:text-lg xl:text-xl 2xl:text-3xl text-center font-medium">
          Resolvemos tus dudas más comunes para que acudas con total
          tranquilidad y confianza.
        </p>
      </div>

      {/* Contenedor FAQ */}
      <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-zinc-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center 2xl:text-2xl text-left px-6 py-4 font-semibold text-zinc-800 lg:hover:text-blue-600 transition-colors duration-300 lg:cursor-pointer"
            >
              {item.question}
              <FaChevronDown
                className={`w-4 h-4 text-zinc-600 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-600" : ""
                }`}
              />
            </button>

            <div
              className={`px-6 overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "max-h-40 pb-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-zinc-600 font-medium text-sm 2xl:text-xl leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;

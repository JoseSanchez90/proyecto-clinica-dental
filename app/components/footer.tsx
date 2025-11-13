"use client";

import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200 text-zinc-700">
      <div className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto py-6 lg:py-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Logo y descripción */}
        <div className="flex flex-col gap-3 lg:w-1/3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg lg:text-xl font-semibold text-zinc-800">
              Clínica Dental SMILE
            </h2>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Cuidamos tu salud bucal con atención personalizada, diagnóstico
            preciso y tratamientos odontológicos de alta calidad.
          </p>
        </div>

        {/* Contacto */}
        <div className="flex flex-col gap-3 lg:w-1/3">
          <h3 className="font-semibold text-zinc-800 text-base">Contacto</h3>
          <div className="flex items-start gap-2 text-sm text-zinc-600">
            <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-blue-600" />
            <p>
              Av. Los Dentistas 123, Miraflores, Lima - Perú
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <FaPhoneAlt className="w-4 h-4 text-blue-600" />
            <p>+51 987 654 321</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-600">
            <FaEnvelope className="w-4 h-4 text-blue-600" />
            <p>contacto@clinicasmile.pe</p>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col gap-3 lg:w-1/3">
          <h3 className="font-semibold text-zinc-800 text-base">Síguenos</h3>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="flex items-center justify-center"
            >
              <BsFacebook className="w-6 h-6 hover:text-blue-600 transition-all duration-300" />
            </a>
            <a
              href="#"
              className="flex items-center justify-center"
            >
              <BsInstagram className="w-6 h-6 hover:text-orange-500 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-zinc-200 mt-6">
        <p className="text-center text-xs text-zinc-700 py-4">
          © 2025 Clínica Dental SMILE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

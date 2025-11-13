"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "¿Preguntas?", href: "#preguntas" },
];

const date = [{ label: "Agendar Cita", href: "#cita" }];

export default function NavbarDesktop() {
  const [activeLink, setActiveLink] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar sección activa
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
            window.history.replaceState(null, "", window.location.pathname);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Scroll suave
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth", block: "start" });

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav
      className={clsx(
        "hidden lg:flex fixed w-full z-30 transition-all duration-300",
        isScrolled ? "bg-blue-900 shadow-lg py-4" : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center justify-between w-full lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6">
        {/* Logo */}
        <button
          onClick={() => handleClick("#inicio")}
          className={clsx(
            "font-bold lg:text-xl xl:text-2xl 2xl:text-3xl transition-colors duration-200 cursor-pointer",
            isScrolled ? "text-white" : "text-blue-500"
          )}
        >
          Smile
        </button>

        {/* Enlaces principales */}
        <div className="flex gap-2 xl:gap-4">
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={clsx(
                "relative px-4 py-2 lg:text-sm xl:text-base font-medium transition-all duration-200 cursor-pointer rounded-full",
                activeLink === item.href
                  ? "bg-blue-600 text-white shadow-md"
                  : isScrolled
                  ? "text-blue-100 hover:text-white hover:bg-blue-800"
                  : "text-white hover:text-blue-400 hover:bg-white/10"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Botón de cita */}
        <div>
          {date.map((menu, i) => (
            <button
              key={i}
              onClick={() => handleClick(menu.href)}
              className={clsx(
                "font-medium px-5 py-2 lg:text-sm xl:text-base rounded-full transition-all duration-300 cursor-pointer shadow-md",
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-500"
                  : "bg-white text-blue-700 hover:bg-blue-100"
              )}
            >
              {menu.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Limpieza", href: "#limpieza" },
  { label: "Nosotros", href: "#nosotros" },
];

const date = [{ label: "Agendar Cita", href: "#cita" }];

export default function NavbarDesktop() {
  const [activeLink, setActiveLink] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  // Cambiar fondo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detectar qué sección está visible
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(`#${id}`);

            // NO modifica la URL, solo actualiza el estado interno
            window.history.replaceState(null, "", window.location.pathname);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(el);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // cambia también la URL al hacer clic
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav
      className={clsx(
        "hidden lg:flex fixed w-full z-30 transition-all duration-300",
        isScrolled
          ? "bg-white/60 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-6"
      )}
    >
      <div className="flex items-center justify-between w-full lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto px-6">
        <p className="text-blue-600 font-bold lg:text-xl xl:text-2xl 2xl:text-3xl">SMILE</p>

        <div className="flex gap-4">
          {links.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={clsx(
                "relative px-4 py-2 lg:text-sm xl:text-base font-medium transition-all duration-200 cursor-pointer",
                activeLink === item.href
                  ? "bg-blue-600 text-white rounded-full"
                  : "text-zinc-800 hover:text-blue-600"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          {date.map((menu, i) => (
            <div key={i}>
              <button
                onClick={() => handleClick(menu.href)}
                className={clsx("font-medium px-4 py-2 lg:text-sm xl:text-base transition-all duration-200 rounded-full cursor-pointer", activeLink === menu.href
                  ? "border-none bg-blue-600 text-white"
                  : "bg-white text-black border border-gray-500"
                )}
              >
                {menu.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

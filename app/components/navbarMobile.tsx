"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Limpieza", href: "#limpieza" },
  { label: "Nosotros", href: "#nosotros" },
];

const date = [{ label: "Agendar Cita", href: "#cita" }];

export default function NavbarMobile() {
  const [activeLink, setActiveLink] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveLink(`#${id}`);
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
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth", block: "start" });

    setIsOpen(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-40 flex items-center justify-between px-8 py-2 transition-all duration-300 lg:hidden",
        isScrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <p className="text-blue-600 font-bold text-xl">SMILE</p>

      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-blue-600 p-2 rounded-md focus:outline-none"
        aria-label="Abrir menú"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Menú lateral animado */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl z-50 flex flex-col items-center justify-between pt-32 pb-10"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute flex items-center font-semibold text-xl gap-2 top-5 right-5 text-blue-600"
            >
              Cerrar
              <X size={28} />
            </button>

            {/* Contenedor de enlaces */}
            <div className="flex flex-col items-center gap-8">
              {links.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    "text-lg font-medium transition-all duration-200",
                    activeLink === item.href
                      ? "text-white bg-blue-600 px-5 py-2 rounded-full"
                      : "text-zinc-800 hover:text-blue-600"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}

              {date.map((menu, i) => (
                <motion.button
                  key={i}
                  onClick={() => handleClick(menu.href)}
                  whileTap={{ scale: 0.95 }}
                  className={clsx(
                    "text-lg font-medium transition-all duration-200",
                    activeLink === menu.href
                      ? "text-white bg-blue-600 px-5 py-2 rounded-full"
                      : "text-zinc-800 hover:text-blue-600"
                  )}
                >
                  {menu.label}
                </motion.button>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-8 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsFacebook className="text-blue-600" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <BsInstagram className="text-orange-500" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

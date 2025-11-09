"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
];

const date = [{ label: "Agendar Cita", href: "#cita" }];

export default function NavbarMobile() {
  const [activeLink, setActiveLink] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Detectar scroll para cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar el menú si se toca fuera o se hace scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleTouchOrScroll = (e: Event) => {
      const target = e.target as Node;

      // Verifica si el toque ocurrió dentro del menú o el botón hamburguesa
      const isInsideMenu = menuRef.current && menuRef.current.contains(target);
      const isBurgerButton = (target as HTMLElement).closest(
        "button[aria-label='Abrir menú']"
      );

      if (!isInsideMenu && !isBurgerButton) {
        setIsOpen(false);
      }
    };

    document.addEventListener("touchstart", handleTouchOrScroll);
    document.addEventListener("scroll", handleTouchOrScroll);

    return () => {
      document.removeEventListener("touchstart", handleTouchOrScroll);
      document.removeEventListener("scroll", handleTouchOrScroll);
    };
  }, [isOpen]);

  // Bloquear scroll del fondo al abrir el menú
  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  // Scroll suave al hacer clic
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
        "fixed top-0 left-0 w-full z-20 flex items-center justify-between px-8 py-2 transition-all duration-300 lg:hidden",
        isScrolled ? "bg-white/70 backdrop-blur-sm" : "bg-transparent"
      )}
    >
      {/* Logo */}
      <p className="text-cyan-600 font-bold text-3xl">SMILE</p>

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
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl z-30 flex flex-col justify-between pt-32 pb-10 overflow-y-auto"
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute flex items-center font-semibold text-xl gap-2 top-5 right-5 text-blue-600"
            >
              Cerrar
              <X size={28} />
            </button>

            {/* Enlaces */}
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
            <div className="flex items-center gap-8 text-2xl pb-20 justify-center">
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

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const MobileLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
];

const NavbarDesktop = () => {
  const [activeLink, setActiveLink] = useState("#inicio");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        "hidden fixed w-full md:flex z-30 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/50 backdrop-blur-xl shadow-md py-4"
          : "bg-transparent py-8"
      )}
    >
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
        <div className="-tracking-wider text-blue-600">
          <p className="font-bold text-3xl">SMILE</p>
        </div>

        <div className="flex gap-6 relative">
          {MobileLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveLink(item.href)}
              className="relative px-4 py-2 font-medium text-zinc-800 hover:text-blue-700 transition-colors duration-200 cursor-pointer"
            >
              {activeLink === item.href && (
                <motion.span
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                  }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeLink === item.href ? "text-white" : ""
                }`}
              >
                {item.label}
              </span>
            </a>
          ))}
        </div>

        <div>
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full cursor-pointer">
            Agendar Cita
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;

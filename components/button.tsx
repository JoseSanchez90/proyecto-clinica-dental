"use client";

import React from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  label: string; // texto del botón
  onClick?: () => void; // función al hacer clic
  className?: string; // clases adicionales tailwind
  icon?: React.ReactNode; // opcional: ícono
  type?: "button" | "submit" | "reset"; // tipo de botón
}

// Versión para escritorio
export const ButtonDesktop: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  icon,
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      type={type}
      className={`hidden md:inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-10 py-4 rounded-full transition-all duration-150 hover:bg-blue-700 cursor-pointer ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.button>
  );
};

export const ButtonDesktopSecondary: React.FC<ButtonProps> = ({
  label,
  className = "",
  icon,
  type = "button",
}) => {
  const handleClick = () => {
    const el = document.querySelector("#nosotros");
    if (!el) return;

    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      type={type}
      className={`hidden md:inline-flex items-center gap-2 border border-gray-500 bg-white text-black font-medium px-10 py-4 rounded-full transition-all duration-150 cursor-pointer ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.button>
  );
};

// Versión para móvil
export const ButtonMobile: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = "",
  icon,
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`inline-flex md:hidden items-center gap-2 bg-blue-600 text-white font-medium px-5 py-3 rounded-full transition-all duration-150 ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.button>
  );
};

export const ButtonMobileSecondary: React.FC<ButtonProps> = ({
  label,
  className = "",
  icon,
  type = "button",
}) => {
  const handleClick = () => {
    const el = document.querySelector("#nosotros");
    if (!el) return;

    const lenis = (window as any).lenis;
    if (lenis) lenis.scrollTo(el);
    else el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      type={type}
      className={`inline-flex md:hidden items-center gap-2 border border-gray-500 bg-white text-black font-medium px-5 py-3 rounded-full transition-all duration-150 ${className}`}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {label}
    </motion.button>
  );
};

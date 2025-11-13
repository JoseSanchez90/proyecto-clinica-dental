"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fecha: "",
    hora: "",
    tipoConsulta: "",
    nombre: "",
    telefono: "",
    correo: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showModal, setShowModal] = useState(false);

  // Validaciones por paso
  const validateStep = () => {
    const newErrors: { [key: string]: string } = {};

    if (step === 1) {
      if (!formData.fecha) newErrors.fecha = "La fecha es obligatoria";
      if (!formData.hora) newErrors.hora = "Selecciona una hora";
      if (!formData.tipoConsulta)
        newErrors.tipoConsulta = "Selecciona un tipo de consulta";
    }

    if (step === 2) {
      if (!formData.nombre.trim())
        newErrors.nombre = "El nombre es obligatorio";
      if (!formData.telefono.trim())
        newErrors.telefono = "El teléfono es obligatorio";
      if (!formData.correo.trim())
        newErrors.correo = "El correo es obligatorio";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Control de pasos
  const handleNext = () => {
    if (validateStep()) setStep((prev) => prev + 1);
  };

  const handlePrev = () => setStep((prev) => prev - 1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) setShowModal(true);
  };

  // 🔹 Control del scroll al mostrar el modal
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (showModal) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.height = "100vh";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      body.style.height = "auto";
    };
  }, [showModal]);

  return (
    <section className="w-full min-h-screen bg-zinc-100 px-6 flex justify-center items-center">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-10 xl:gap-16 py-10 pt-20 2xl:pt-0 2xl:py-0">
        {/* ==== FORMULARIO MULTIPASO ==== */}
        <div className="xl:col-span-2 flex flex-col gap-4 2xl:gap-10">
          <div className="flex flex-col gap-2 2xl:gap-4">
            <h2 className="text-2xl lg:text-2xl 2xl:text-4xl font-semibold text-zinc-700">
              Reserva <span className="text-blue-600">tu cita</span>
            </h2>
            <div className="flex flex-col xl:flex-row 2xl:flex-col text-2xl lg:text-2xl 2xl:text-4xl font-bold gap-x-2">
              <h3 className="text-blue-600">Agenda tu atención dental</h3>
              <h4 className="text-zinc-700">en pocos pasos</h4>
            </div>
            <p className="text-zinc-600 text-base 2xl:text-lg font-medium leading-relaxed">
              En <span className="text-blue-600 font-semibold">Smile</span> te
              ayudamos a reservar tu consulta de forma rápida y segura. Completa
              los pasos y confirma tu cita con uno de nuestros especialistas.
            </p>
          </div>

          {/* ===== FORM STEPS ===== */}
          <form className="bg-white border border-gray-300 rounded-2xl p-6 2xl:p-8 shadow-lg">
            <div className="relative overflow-visible mx-auto 2xl:min-h-80">
              <AnimatePresence mode="wait">
                {/* 🔹 Paso 1 */}
                {step === 1 && (
                  <div className="space-y-2 2xl:space-y-5">
                    <h3 className="text-lg 2xl:text-xl font-semibold text-zinc-800">
                      Paso 1: Seleccionar Cita
                    </h3>
                    <motion.div
                      key="step1"
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -80, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-2 2xl:gap-5"
                    >
                      {/* Fecha */}
                      <div className="relative">
                        <label className="block text-sm font-medium mb-1">
                          Fecha
                        </label>
                        <input
                          type="date"
                          name="fecha"
                          value={formData.fecha}
                          onChange={handleChange}
                          className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                            errors.fecha ? "border-red-500" : "border-zinc-300"
                          }`}
                        />
                        {errors.fecha && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.fecha}
                          </p>
                        )}
                      </div>

                      {/* Hora */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Hora
                        </label>
                        <select
                          name="hora"
                          value={formData.hora}
                          onChange={handleChange}
                          className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                            errors.hora ? "border-red-500" : "border-zinc-300"
                          }`}
                        >
                          <option value="">Seleccionar hora...</option>
                          <option value="09:00 am">09:00 am</option>
                          <option value="10:00 am">10:00 am</option>
                          <option value="11:00 am">11:00 am</option>
                          <option value="03:00 pm">03:00 pm</option>
                          <option value="04:00 pm">04:00 pm</option>
                          <option value="05:00 pm">05:00 pm</option>
                        </select>
                        {errors.hora && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.hora}
                          </p>
                        )}
                      </div>

                      {/* Tipo de consulta */}
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Tipo de Consulta
                        </label>
                        <select
                          name="tipoConsulta"
                          value={formData.tipoConsulta}
                          onChange={handleChange}
                          className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                            errors.tipoConsulta
                              ? "border-red-500"
                              : "border-zinc-300"
                          }`}
                        >
                          <option value="">Seleccionar...</option>
                          <option value="Odontología General">
                            Odontología General
                          </option>
                          <option value="Ortodoncia">Ortodoncia</option>
                          <option value="Endodoncia">Endodoncia</option>
                          <option value="Implantes Dentales">
                            Implantes Dentales
                          </option>
                          <option value="Limpieza Dental">
                            Limpieza Dental
                          </option>
                        </select>
                        {errors.tipoConsulta && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.tipoConsulta}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={handleNext}
                        type="button"
                        className="bg-blue-600 text-white px-10 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                      >
                        Siguiente
                      </button>
                    </motion.div>
                  </div>
                )}

                {/* 🔹 Paso 2 */}
                {step === 2 && (
                  <div className="space-y-2 2xl:space-y-5">
                    <h3 className="text-xl font-semibold text-zinc-800">
                      Paso 2: Datos Personales
                    </h3>
                    <motion.div
                      key="step2"
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -80, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-2 2xl:gap-5"
                    >
                      {["nombre", "telefono", "correo"].map((field) => (
                        <div key={field}>
                          <label className="block text-sm font-medium mb-1 capitalize">
                            {field === "correo"
                              ? "Correo Electrónico"
                              : field === "telefono"
                              ? "Teléfono"
                              : "Nombre Completo"}
                          </label>
                          <input
                            type={
                              field === "correo"
                                ? "email"
                                : field === "telefono"
                                ? "tel"
                                : "text"
                            }
                            name={field}
                            value={(formData as any)[field]}
                            onChange={handleChange}
                            className={`w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none ${
                              errors[field]
                                ? "border-red-500"
                                : "border-zinc-300"
                            }`}
                          />
                          {errors[field] && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors[field]}
                            </p>
                          )}
                        </div>
                      ))}

                      <div className="flex justify-between gap-3">
                        <button
                          onClick={handlePrev}
                          type="button"
                          className="border border-blue-600 text-blue-600 px-10 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all cursor-pointer"
                        >
                          Atrás
                        </button>
                        <button
                          onClick={handleNext}
                          type="button"
                          className="bg-blue-600 text-white px-10 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all cursor-pointer"
                        >
                          Siguiente
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* 🔹 Paso 3 */}
                {step === 3 && (
                  <div className="space-y-2 2xl:space-y-5">
                    <h3 className="text-xl font-semibold text-zinc-800">
                      Paso 3: Confirmación
                    </h3>
                    <motion.div
                      key="step3"
                      initial={{ x: 80, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -80, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col gap-2 2xl:gap-5"
                    >
                      <p className="text-zinc-600">
                        Revisa los datos ingresados antes de enviar tu solicitud
                        de cita.
                      </p>

                      <div className="bg-zinc-50 rounded-lg p-4 text-zinc-700 space-y-1">
                        <p>
                          <strong>Fecha:</strong> {formData.fecha}
                        </p>
                        <p>
                          <strong>Hora:</strong> {formData.hora}
                        </p>
                        <p>
                          <strong>Consulta:</strong> {formData.tipoConsulta}
                        </p>
                        <p>
                          <strong>Nombre:</strong> {formData.nombre}
                        </p>
                        <p>
                          <strong>Teléfono:</strong> {formData.telefono}
                        </p>
                        <p>
                          <strong>Correo:</strong> {formData.correo}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={handlePrev}
                          type="button"
                          className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all"
                        >
                          Atrás
                        </button>
                        <button
                          onClick={handleSubmit}
                          type="submit"
                          className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                        >
                          Enviar Cita
                        </button>
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

        {/* ==== INFORMACIÓN LATERAL ==== */}
        <div className="flex flex-col gap-6 pt-10 2xl:pt-0">
          <div className="bg-blue-600 text-white text-base 2xl:text-lg font-medium rounded-2xl p-6 shadow-lg">
            <h3 className="mb-4">Horario de atención</h3>
            <div className="flex flex-col gap-2 text-sm 2xl:text-base">
              <div className="flex justify-between">
                <span>Lunes a Viernes</span>
                <span>09:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado</span>
                <span>11:00 - 20:00</span>
              </div>
              <div className="flex justify-between">
                <span>Domingo</span>
                <span>Cerrado</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-zinc-600 text-base 2xl:text-lg font-medium leading-relaxed">
              En <span className="text-blue-600 font-semibold">Smile</span>,
              creemos que cada sonrisa merece atención especial. Nuestro equipo
              está listo para ofrecerte un servicio cálido y profesional con la
              mejor tecnología dental.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 MODAL DE CONFIRMACIÓN */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center"
            >
              <CheckCircle className="text-green-500 w-14 h-14 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                ¡Cita Enviada con Éxito!
              </h3>
              <p className="text-zinc-600 text-sm mb-6">
                Gracias por reservar tu cita con{" "}
                <span className="text-blue-600 font-medium">Smile</span>.
                Nuestro equipo se pondrá en contacto contigo pronto para
                confirmar los detalles.
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  setStep(1);
                  setFormData({
                    fecha: "",
                    hora: "",
                    tipoConsulta: "",
                    nombre: "",
                    telefono: "",
                    correo: "",
                  });
                }}
                className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

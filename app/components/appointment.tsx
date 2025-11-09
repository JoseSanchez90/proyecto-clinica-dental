"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-2">
          Agendar Cita
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Un proceso simple en tres pasos para reservar tu próxima visita.
        </p>

        {/* Indicador de pasos */}
        <div className="flex justify-between items-center mb-10">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex-1 flex flex-col items-center relative">
              <div
                className={`rounded-full w-10 h-10 flex items-center justify-center font-semibold ${
                  step >= n
                    ? "bg-blue-600 text-white"
                    : "border-2 border-blue-600 text-blue-600 bg-white"
                }`}
              >
                {n}
              </div>
              {n < 3 && (
                <div
                  className={`absolute top-5 left-[70%] md:left-[60%] w-full h-0.5 ${
                    step > n ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Contenido animado */}
        <div className="relative overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            {/* Paso 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Paso 1: Seleccionar Cita
                </h3>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    name="fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 ${
                      errors.fecha ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.fecha && (
                    <p className="text-red-500 text-sm mt-1">{errors.fecha}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Hora</label>
                  <select
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 ${
                      errors.hora ? "border-red-500" : "border-gray-300"
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
                    <p className="text-red-500 text-sm mt-1">{errors.hora}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Tipo de Consulta
                  </label>
                  <select
                    name="tipoConsulta"
                    value={formData.tipoConsulta}
                    onChange={handleChange}
                    className={`w-full border rounded-lg p-2 ${
                      errors.tipoConsulta ? "border-red-500" : "border-gray-300"
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
                    <option value="Limpieza Dental">Limpieza Dental</option>
                  </select>
                  {errors.tipoConsulta && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tipoConsulta}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleNext}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                >
                  Siguiente
                </button>
              </motion.div>
            )}

            {/* Paso 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-5"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Paso 2: Datos Personales
                </h3>

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
                      className={`w-full border rounded-lg p-2 ${
                        errors[field] ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}

                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    Siguiente
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paso 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Paso 3: Confirmación
                </h3>
                <p className="text-gray-600">
                  Revisa los datos ingresados antes de enviar tu solicitud de
                  cita.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 text-gray-700">
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
                    className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-all"
                  >
                    Atrás
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-all"
                  >
                    Enviar Cita
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 text-center shadow-xl max-w-sm w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ¡Cita enviada!
            </h3>
            <p className="text-gray-600 mb-4">
              Tu solicitud ha sido registrada correctamente. Nos pondremos en
              contacto contigo pronto.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 cursor-pointer"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

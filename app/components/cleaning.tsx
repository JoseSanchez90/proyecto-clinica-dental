const Process = [
  {
    number: "1",
    title: "Examen Inicial",
    description:
      "Evaluamos tu boca para detectar cualquier signo de caries, gingivitis u otros problemas dentales.",
  },
  {
    number: "2",
    title: "Eliminación de Placa",
    description:
      "Con herramientas especializadas, removemos cuidadosamente la placa y el sarro acumulados.",
  },
  {
    number: "3",
    title: "Pulido Dental",
    description:
      "Pulimos tus dientes con una pasta profiláctica para asilar la superficie y eliminar manchas superficiales.",
  },
  {
    number: "4",
    title: "Aplicación de Flúor",
    description:
      "Finalizamos con un tratamiento de flúor para fortalecer el esmalte y prevenir futuras caries.",
  },
];

function Cleaning() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-16 lg:gap-10 xl:gap-20 2xl:gap-30">
      <div className="text-zinc-700 text-2xl lg:text-4xl xl:text-5xl 2xl:text-7xl text-center font-semibold">
        <p>
          ¿Como seria el <span className="text-blue-600">proceso</span> de
        </p>
        <p>
          una <span className="text-blue-600">Limpieza Dental</span>?
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 justify-items-center items-center w-full lg:hidden max-w-sm z-10 px-5 lg:px-0">
        {Process.map((items, i) => (
          <div
            key={i}
            className="relative h-55 flex flex-col gap-2 bg-blue-600 p-4 rounded-xl"
          >
            {/* Sombras curvas */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg rotate-2 origin-bottom"></div>
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg rotate-4 origin-bottom"></div>

            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center mx-auto">
              <p className="text-blue-600 text-base sm:text-lg font-bold">
                {items.number}
              </p>
            </div>
            <p className="text-white text-center font-semibold text-sm sm:text-base">
              {items.title}
            </p>
            <p className="text-white text-center font-medium text-xs sm:text-sm">
              {items.description}
            </p>
          </div>
        ))}
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:max-w-2xl xl:max-w-6xl 2xl:max-w-7xl mx-auto lg:gap-14 z-10">
        {Process.map((items, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-4 bg-blue-600 lg:p-6 xl:p-4 2xl:p-6 rounded-xl"
          >
            {/* Primera sombra curva */}
            <div className="absolute inset-0 -z-10 bg-green-400 rounded-lg lg:rotate-[4deg] origin-bottom"></div>
            {/* Segunda sombra más curva */}
            <div className="absolute inset-0 -z-20 bg-yellow-300 rounded-lg lg:rotate-[8deg] origin-bottom"></div>

            <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center mx-auto">
              <p className="text-blue-600 lg:text-lg 2xl:text-xl font-bold">
                {items.number}
              </p>
            </div>
            <p className="text-white text-center font-semibold lg:text-base xl:text-lg 2xl:text-xl">
              {items.title}
            </p>
            <p className="text-white text-center font-medium lg:text-sm xl:text-sm 2xl:text-base">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cleaning;

import React from "react";
import { useInView } from "react-intersection-observer";
import { FaStar } from "react-icons/fa";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Link from "next/link";
export default function AboutSection() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      id="about"
      className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16 px-2"
    >
      <div
        ref={ref}
        className={` w-full lg:w-[65rem] h-fit  bg-[#0c0c0c]  bg-opacity-95  flex flex-col lg:flex-row  gap-4 shadow-xl hidden-object p-4 lg:p-6 rounded-xl ${
          inView && "show-object"
        }`}
      >
        <FaStar
          className="z-40 bg-transparent hidden lg:block absolute -right-5 -top-5"
          color="#f3f4f6"
          size={50}
        />
        <div className="w-full lg:w-[60%] h-full bg-transparent flex flex-col justify-between">
          <div className="bg-transparent flex flex-col">
            <h2 className="bg-transparent text-firstwhite text-4xl font-bold">
              Acerca de
            </h2>
            <p className="bg-transparent text-gray-200 text-xl font-light pt-4">
              ¡Soy Oscar! un desarrollador Junior versátil
              listo para dar vida a tus ideas digitales.
              Con experiencia en el desarrollo front-end,
            </p>

            <p className="bg-transparent text-gray-200 text-xl font-light pt-2">
            Me encantan las nuevas tecnologías y estar al día.
            Soy un aprendiz de por vida que siempre busca nuevas
            oportunidades que puedan mejorar mis habilidades.
            </p>

            <p className="bg-transparent text-gray-200 text-xl font-light pt-2">
            Creo que el trabajo en equipo, la creatividad
            y la resolución de problemas son esenciales para ser un buen desarrollador.
            Estoy en un viaje constante trabajando con estas habilidades para proporcionar
            aplicaciones sólidas e increíbles, que no solo sean funcionales,
            sino también agradables a la vista.
            </p>

          </div>
          <Link
            className="bg-firstwhite font-medium text-xl py-2 w-1/2 rounded-xl flex justify-center items-center hover:bg-gray-300 transition-colors mt-4"
            href="/#contact"
          >
            Contácta conmigo
          </Link>
        </div>
        <div className="w-full lg:w-[40%] h-full bg-transparent  flex flex-col items-start lg:items-end gap-2 font-normal">
          <Skills />
          <SoftSkills />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ProjectCard from "./ProjectCard";
import OtherProjects from "./OtherProjects";

export default function ProjectsSection() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full h-fit relative  z-30  bg-transparent pt-40 gap-16 px-2 "
    >
      <div className="bg-transparent flex flex-col items-center">
        <h1 className="z-40 text-5xl text-firstwhite font-bold py-3 text-center bg-transparent">
          Mis Proyectos
        </h1>
        <p className="z-40 text-lg text-gray-300 font-normal text-center bg-transparent">
          Vea lo que he creado durante mi aprendizaje.
        </p>
      </div>
      <ProjectCard
        title="KC_Admin"
        image="/kc.png"
        description="KC Admin es un menu de administracion para FiveM utilizando el framework de ESX en su ultima version un menu simple pero a la vez con muchas funciones para poder ejecutar en tu servidor.."
        tags={["Lua", "JavaScript", "HTML"]}
        reserve={false}
        sourceCode="https://github.com/K1ri86/kc_adminV2"
        date="15.09.2023"
      />
      <ProjectCard
        title="Portfolio Astro"
        image="/Nuevo-Portfolio.png"
        description="Un sitio de portfolio diferente destinado a brindar una experiencia interesante a los usuarios.
        Me divertí mucho creando este sitio. Como desafío, quería ver qué podía lograr sin utilizar ningún marco de 
        interfaz de usuario y manteniendo la mayor parte del contenido impulsado por HTML y CSS.."
        tags={["Astro", "TypeScript", "tailwind", "daisyUI"]}
        reserve={true}
        sourceCode="https://github.com/K1ri86/Nuevo-Portfolio"
        date="14.03.2023"
      />
      <ProjectCard
        title="Discord Bot"
        image="/Arctic-Multipurpose-Bot.png"
        description="Bot Multifuncional para Discord."
        tags={["JavaScript", "Discord.JS"]}
        reserve={false}
        sourceCode="https://github.com/K1ri86/Arctic-Multipurpose-Bot"
        date="17.06.2022"
      />
      <OtherProjects />
    </div>
  );
}

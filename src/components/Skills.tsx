import React from "react";

export default function Skills() {
  return (
    <>
      <h3 className="bg-transparent text-firstwhite text-xl font-medium pt-2">
        Skills
      </h3>
      <div className="flex flex-row flex-wrap justify-start lg:justify-end bg-transparent gap-2">
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          Astro
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          NextJS
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          React
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          TailwindCSS
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          HTML
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          Typescript
        </div>
        <div className="bg-[#1e1e1e] shadow-md drop px-4 py-2 rounded-xl text-firstwhite">
          CSS
        </div>
      </div>
    </>
  );
}

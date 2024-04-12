import React from "react";

import { FaDisplay, FaServer } from "react-icons/fa6";


const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-neutral-800 text-neutral-100"
    >
      <div className="flex flex-col h-full items-center justify-center">
        <div>
          <h1>Skills</h1>
        </div>
        <div>
          {/* grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="px-4 py-8 bg-neutral-200 h-auto">
              <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left lg:float-right">
                <div className="pt-8 pb-2">
                  <FaDisplay className="text-[4rem]" />
                </div>
                <div className="text-2xl font-bold pb-4">Frontend</div>
                <div className="text-lg font-medium">
                  <ul>
                    <li className="cursor-default py-1">HTML</li>
                    <li className="cursor-default py-1">CSS</li>
                    <li className="cursor-default py-1">JavaScript</li>
                    <li className="cursor-default py-1">TypeScript</li>
                    <li className="cursor-default py-1">React</li>
                    <li className="cursor-default py-1">Tailwind</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="px-4 py-8 bg-neutral-200 h-auto">
              <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left">
                <div className="pt-8 pb-2">
                  <FaServer className="text-[4rem]" />
                </div>
                <div className="text-2xl font-bold pb-4">Backend</div>
                <div className="text-lg font-medium">
                  <ul>
                    <li className="cursor-default py-1">Node.js</li>
                    <li className="cursor-default py-1">Express</li>
                    <li className="cursor-default py-1">MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

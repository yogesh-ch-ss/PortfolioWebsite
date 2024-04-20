import React from "react";

import { FaDisplay, FaGears, FaServer } from "react-icons/fa6";
import { MdOutlinePhonelink } from "react-icons/md";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-auto bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center py-24"
    >
      <div className="w-full h-full flex flex-col max-w-[60rem]">
        <div className="grid-cols-subgrid col-span-3 px-6">
          <h1 className="text-4xl font-bold">Skills</h1>
        </div>
        <div className="grid-cols-subgrid col-span-3 px-6 py-4 text-lg">
          <p>These are the tools and technologies that I have worked with.</p>
        </div>
      </div>

      {/* grid */}
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 max-w-[60rem]">
        {/* frontend */}
        <div className="px-6 py-8 h-auto min-w-[15rem]">
          <div className="flex flex-col float-left">
            <div className="pt-8">
              <MdOutlinePhonelink className="text-[4rem]" />
            </div>
            <div className="text-2xl font-bold py-4">Frontend</div>
            <div className="text-lg font-medium text-neutral-400">
              <div className="flex flex-col">
                <div className="py-1">
                  <p>HTML</p>
                </div>
                <div className="py-1">
                  <p>CSS</p>
                </div>
                <div className="py-1">
                  <p>JavaScript</p>
                </div>
                <div className="py-1">
                  <p>TypeScript</p>
                </div>
                <div className="py-1">
                  <p>React</p>
                </div>
                <div className="py-1">
                  <p>Tailwind</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* backend */}
        <div className="px-6 py-8 h-auto min-w-[15rem]">
          <div className="flex flex-col float-left">
            <div className="pt-8">
              <FaServer className="text-[4rem]" />
            </div>
            <div className="text-2xl font-bold py-4">Backend</div>
            <div className="text-lg font-medium text-neutral-400">
              <div className="flex flex-col">
                <div className="py-1">
                  <p>Node.js</p>
                </div>
                <div className="py-1">
                  <p>Express</p>
                </div>
                <div className="py-1">
                  <p>MongoDB</p>
                </div>
                <div className="py-1">
                  <p>REST API</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* others */}
        <div className="px-6 py-8 h-auto min-w-[15rem]">
          <div className="flex flex-col float-left">
            <div className="pt-8">
              <FaGears className="text-[4rem]" />
            </div>
            <div className="text-2xl font-bold py-4">Others</div>
            <div className="text-lg font-medium text-neutral-400">
              <div className="flex flex-col">
                <div className="py-1">
                  <p>Python</p>
                </div>
                <div className="py-1">
                  <p>GitHub</p>
                </div>
                <div className="py-1">
                  <p>Amazon Web Services</p>
                </div>
                <div className="py-1">
                  <p>Postman APIs</p>
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

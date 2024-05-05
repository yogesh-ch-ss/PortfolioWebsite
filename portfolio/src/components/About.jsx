import React from "react";
import { MdPerson } from "react-icons/md";

const About = () => {
  const bg = "bg-gradient-to-br from-fuchsia-800 via-teal-700 to-indigo-900";
  const bg2 = "bg-gradient-to-br from-fuchsia-700 via-teal-700 to-indigo-900";

  return (
    <div
      name="about"
      // className="w-full py-24 text-neutral-100 bg-gradient-to-b from-slate-900 to-black"
      className="w-full py-32 text-neutral-100 flex items-center justify-center bg-gradient-to-b from-[#112033] to-slate-950 from-55% px-4"
    >
      <div
        className={`flex flex-col justify-center items-center max-w-[60rem] h-full rounded-2xl ${bg}`}
      >
        <div className="flex flex-col justify-center items-center max-w-[60rem] h-full px-4 sm:px-16 py-16 rounded-xl m-[.25rem] bg-[#111113]">
          {/* container */}
          {/* <div className="text-9xl">
          <MdPerson />
        </div> */}
          <div className="max-w-[60rem] w-full">
            <div className="text-center flex flex-col items-center justify-center">
              <h1
                className={`text-4xl font-extrabold ${bg2} text-transparent bg-clip-text`}
              >
                About
              </h1>
            </div>
          </div>
          <div className="max-w-[60rem] w-full pt-6">
            <div className="text-center text-xl sm:text-2xl font-semibold">
              <p className="">
                As a versatile full-stack developer proficient in the MERN
                stack, I specialize in designing and developing web-based
                applications that prioritize <span className="">Simplicity and Functionality</span>.
              </p>
              <p className="">
                I am constantly exploring new technologies to deliver innovative
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

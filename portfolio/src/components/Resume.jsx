import React from "react";
import { FaFileLines } from "react-icons/fa6";

const Resume = () => {
  return (
    <a href="#">
      <div name="resume" className="group w-full h-[20rem] bg-gradient-to-br from-pink-600 via-fuchsia-800 to-violet-900 from-10% via-50% my-[.8rem] px-20">
        <div className="flex flex-col justify-center items-center h-full text-neutral-100 group-hover:scale-105 duration-200">
          <div className="px-4 py-4 text-[7rem]">
            <FaFileLines />
          </div>
          <div className="text-3xl font-semibold">
            <h1>Hire Me!</h1>
          </div>
          <div className="text-md">
            <p>Click to view and download my resume.</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Resume;

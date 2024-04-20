import React from "react";
import { BsFillFileEarmarkTextFill, BsFileEarmarkText } from "react-icons/bs";
import { LiaFileAlt } from "react-icons/lia";

const Resume = () => {
  return (
    <a href="#">
      {/* <div
        name="resume"
        className="group w-full h-[20rem] bg-gradient-to-br from-pink-600 via-fuchsia-800 to-violet-900 from-10% via-50% px-20"
      > */}
        <div
        name="resume"
        className="group w-full h-[20rem] bg-gradient-to-b from-slate-800 to-slate-900 px-20"
      >
        <div className="flex flex-col justify-center items-center h-full text-neutral-100">
          <div className="px-4 py-4 text-[7rem] group-hover:scale-105 duration-200">
            <BsFileEarmarkText />
          </div>
          <div className="text-3xl font-semibold text-center group-hover:scale-110 duration-200">
            <h1>Hire Me!</h1>
          </div>
          <div className="text-md pt-2">
            <p className="text-center">Click to view and download my resume.</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Resume;

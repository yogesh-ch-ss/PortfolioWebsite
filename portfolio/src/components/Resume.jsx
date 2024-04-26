import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

import aurora from "../assets/aurora.mp4";

const Resume = () => {
  return (
    <a href="#">
      <div name="resume" className="relative group w-full h-[25rem] px-20">
        {/* Video Background */}
        <video
          src={aurora}
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black opacity-45" />

        <div className="absolute inset-0 flex flex-col justify-center items-center h-full text-neutral-100">
          <div className="px-4 py-4 text-[7rem] duration-200">
            <BsFileEarmarkText />
          </div>
          <div className="text-3xl font-semibold text-center duration-200">
            <h1>Hire Me!</h1>
          </div>
          <div className="text-md pt-2 px-4">
            <p className="group-hover:underline text-blue-500 flex items-center justify-center font-medium text-lg">
              Click to view and download my resume {<FaAngleRight />}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Resume;

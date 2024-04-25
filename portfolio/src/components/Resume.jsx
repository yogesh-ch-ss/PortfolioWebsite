import React from "react";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";

const Resume = () => {
  return (
    <a href="#">
      <div
        name="resume"
        // className="group w-full h-[20rem] bg-gradient-to-br from-pink-600 via-fuchsia-800 to-violet-900 from-10% via-50% px-20"
        // className="group w-full h-[20rem] px-20 bg-gradient-to-br from-pink-900 via-purple-900 to-blue-900"
        className="group w-full h-[20rem] px-20 bg-gradient-to-br from-purple-900 to-red-900"
      >
        {/* <div
        name="resume"
        className="group w-full h-[20rem] bg-gradient-to-t from-teal-800 to-teal-700 px-20"
      > */}
        <div className="flex flex-col justify-center items-center h-full text-neutral-100">
          <div className="px-4 py-4 text-[7rem] duration-200">
            <BsFileEarmarkText />
          </div>
          <div className="text-3xl font-semibold text-center duration-200">
            <h1>Hire Me!</h1>
          </div>
          <div className="text-md pt-2">
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

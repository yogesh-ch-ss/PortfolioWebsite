import React from "react";

const Footer = ({ lastCommitDate }) => {
  return (
    <div class="bg-[#1F1F1F] w-full h-auto flex items-center justify-center px-4 py-4 text-xs">
      <div className="flex flex-col items-center justify-center w-[60rem]">
        <div className="py-2 border-b-[1px] w-full border-neutral-500 text-neutral-300">
          Yogesh Chandra Singh Samant
        </div>
        <div className="py-2 w-full">
          <div className="flex justify-between items-center">
            <div className="font-medium text-neutral-500">Personal Portfolio Website</div>
            <div className="font-medium text-neutral-500">Designed with <span className="font-normal text-blue-500">React and Tailwind CSS</span></div>
          </div>
        </div>
        {/* <div className="py-2 w-full text-neutral-500 font-semibold">
          Last commit date: {lastCommitDate}
        </div> */}
      </div>
    </div>
  );
};

export default Footer;

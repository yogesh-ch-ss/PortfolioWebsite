import React from "react";

const Footer = ({ lastCommitDate }) => {
  return (
    <div class="bg-neutral-800 w-full h-auto flex items-center justify-center px-4 py-4 text-xs">
      <div className="flex flex-col items-center justify-center w-[60rem]">
        <div className="py-2 border-b-[1px] w-full border-neutral-500 text-neutral-400">
          Yogesh Chandra Singh Samant
        </div>
        <div className="py-2 w-full text-neutral-500 font-semibold">
          Personal Portfolio Website
        </div>
        {/* <div className="py-2 w-full text-neutral-500 font-semibold">
          Last commit date: {lastCommitDate}
        </div> */}
      </div>
    </div>
  );
};

export default Footer;

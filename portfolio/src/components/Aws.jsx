import React from "react";
import { FaAngleRight, FaAws } from "react-icons/fa6";

const Aws = () => {
  return (
    // <div className="w-full h-auto md:h-[8rem] bg-gradient-to-b from-gray-800 to-slate-900 px-8 text-neutral-100">
    <div className="w-full h-auto md:h-[8rem] bg-[#242F3E] px-8 text-neutral-100">
      <div className="h-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-16">
        <div className="text-[4rem] py-4">
          <FaAws />
        </div>
        <div>
          <h2 className="text-2xl text-center font-semibold">
            I'm an AWS Certified Cloud Practitioner!
          </h2>
        </div>
        <div className="py-4">
          <a
            href="https://www.credly.com/badges/46d53f65-b566-4a9e-b6c3-c9312c69e474/public_url"
            target="_blank"
          >
            <button className="group flex gap-2 px-6 py-2 my-2 items-center rounded-full font-semibold bg-[#FF9900] hover:bg-orange-500 text-[#242F3E] hover:text-slate-800">
              View Certificate
              <span className="group-hover:translate-x-1 duration-300">
                <FaAngleRight />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aws;

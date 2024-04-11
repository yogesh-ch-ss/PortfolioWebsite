import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="w-full h-[10rem] bg-neutral-900 mb-[.8rem] text-neutral-100">
      <div className="h-full flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-16">
        <div>
          <h1 className="text-3xl font-semibold">Connect with me</h1>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 py-2 text-neutral-100 text-4xl">
            <li className="hover:scale-[115%] duration-300">
              <div>
                <a href="#">
                  <FaEnvelope />
                </a>
              </div>
            </li>
            <li className="hover:scale-[115%] duration-300">
              <a href="#">
                <FaGithub />
              </a>
            </li>
            <li className="hover:scale-[115%] duration-300">
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;

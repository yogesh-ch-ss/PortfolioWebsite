import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="w-full h-auto md:h-[8rem] bg-neutral-900 px-8 text-neutral-100">
      <div className="h-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-16 py-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Connect with me
          </h1>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-center gap-4 md:gap-8 py-2 text-neutral-100">
            <li className="hover:scale-[115%] duration-300">
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center"
                >
                  <FaEnvelope className="text-3xl" />
                  <p className="text-sm font-light pt-1">email</p>
                </a>
              </div>
            </li>
            <li className="hover:scale-[115%] duration-300">
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center"
                >
                  <FaGithub className="text-3xl" />
                  <p className="text-sm font-light pt-1">github</p>
                </a>
              </div>
            </li>
            <li className="hover:scale-[115%] duration-300">
              <div>
                <a
                  href="#"
                  className="flex flex-col items-center justify-center"
                >
                  <FaLinkedin className="text-3xl" />
                  <p className="text-sm font-light pt-1">linkedin</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Connect;

import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa6";

const NewContact = () => {
  return (
    <div name="contact" className="w-full h-auto bg-neutral-800 py-24">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[60rem] text-center flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-4xl font-bold text-neutral-100">Contact</h1>
        </div>

        <div className="max-w-[60rem] text-center flex flex-col justify-center items-center w-full h-full">
          {/* grid */}
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 max-w-[60rem] gap-8 sm:gap-4 py-4">
            {/* email */}
            <a
              href="#"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaEnvelope />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Email
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Send an email
                <FaAngleRight />
              </div>
            </a>

            {/* github */}
            <a
              href="#"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaGithub />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Github
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Check my work
                <FaAngleRight />
              </div>
            </a>

            {/* linkedin */}
            <a
              href="#"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaLinkedin />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Linkedin
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Connect with me
                <FaAngleRight />
              </div>
            </a>
          </div>
        </div>

        {/* contact form */}
        <div className="max-w-[60rem] text-center text-neutral-100 flex flex-col justify-center items-center w-full h-full">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          ipsum, commodi amet quisquam voluptate natus repellat corrupti aliquid
          ab fuga optio odit assumenda non ad possimus delectus harum
          consectetur! Atque!
        </div>
      </div>
    </div>
  );
};

export default NewContact;

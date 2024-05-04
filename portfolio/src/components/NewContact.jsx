import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaAngleRight,
} from "react-icons/fa6";

const NewContact = () => {
  return (
    <div name="contact" className="w-full h-auto bg-[#111113] px-4 py-32">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[60rem] text-center flex flex-col justify-center items-center w-full h-full">
          <h1 className="text-4xl font-bold text-neutral-100">Contact</h1>
        </div>

        <div className="max-w-[60rem] text-center flex flex-col justify-center items-center w-full h-full">
          {/* grid */}
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 max-w-[60rem] gap-8 sm:gap-4 py-6">
            {/* email */}
            <a
              href="mailto:yogeshchsamant@gmail.com"
              target="_blank"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaEnvelope />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Email
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1 px-6">
                <p>Feel free to drop me a message anytime!</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Send an email
                <FaAngleRight />
              </div>
            </a>

            {/* github */}
            <a
              href="https://github.com/yogesh-ch-ss"
              target="_blank"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaGithub />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Github
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1 px-6">
                <p>Explore my latest projects and contributions!</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Check my work
                <FaAngleRight />
              </div>
            </a>

            {/* linkedin */}
            <a
              href="https://www.linkedin.com/in/yogesh-chandra-singh-samant/"
              target="_blank"
              className="group flex flex-col items-center justify-center"
            >
              <div className="text-neutral-100 text-4xl py-1">
                <FaLinkedin />
              </div>
              <div className="text-neutral-100 font-semibold text-lg py-1">
                Linkedin
              </div>
              <div className="text-neutral-400 font-normal text-sm py-1 px-6">
                <p>Let's grow our professional network together!</p>
              </div>
              <div className="text-blue-500 font-normal text-sm flex items-center justify-center py-1 group-hover:underline">
                Connect with me
                <FaAngleRight />
              </div>
            </a>
          </div>
        </div>

        {/* contact form */}
        <div className="max-w-[40rem] text-center flex flex-col justify-center items-center w-full h-full">
          <form
            method="POST"
            action="https://getform.io/f/paoxodpb"
            className="flex flex-col w-full"
          >
            <div className="">
              <p className="text-gray-100 py-4 text-lg">
                Alternatively, submit the below form to contact me.
              </p>
            </div>
            <input
              className="bg-gray-100 p-2 mt-0 mb-2 mx-4 rounded-md"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="p-2 bg-gray-100 my-2 mx-4 rounded-md"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-gray-100 p-2 my-2 mx-4 rounded-md"
              name="message"
              rows="10"
              placeholder="Message"
            />

            <button className="group flex gap-2 px-6 py-2 mx-auto my-2 items-center rounded-full bg-zinc-700 bg-gradient-to-br hover:from-fuchsia-700 hover:via-teal-700 hover:to-indigo-900 from-10% text-neutral-100 hover:text-neutral-100">
              Let's collaborate
              <span className="group-hover:translate-x-1 duration-300">
                <FaAngleRight />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewContact;

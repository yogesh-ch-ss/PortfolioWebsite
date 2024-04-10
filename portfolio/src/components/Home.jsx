import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import {
  FaAnglesDown,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-[48rem] bg-gradient-to-t from-neutral-950 via-gray-950 to-gray-900 text-center"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-neutral-400 py-2 font-medium">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-neutral-100 py-2">
          Yogesh Chandra Singh Samant
        </h1>
        <h2 className="text-4xl sm:text-6xl font-medium text-neutral-400 py-2">
          I'm a software developer
        </h2>
        <p className="text-neutral-100 py-2 font-normal">
          Welcome to my portfolio website!
        </p>
        <div>
          <ul className="flex items-center justify-center gap-8 py-2 text-neutral-100 text-2xl">
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
        <div className="flex items-center justify-center py-2">
          <Link to="about" smooth={true} duration={500}>
            <button className="group flex gap-2 border-2 px-6 py-3 my-2 items-center rounded-full bg-gradient-to-br hover:from-pink-400 hover:via-violet-700 hover:to-violet-900 from-10% via-50% text-neutral-100 hover:text-fuchsia-100 border-neutral-100 hover:border-neutral-950">
              Learn more
              <span className="group-hover:translate-y-1 duration-300">
                <FaAnglesDown />
              </span>
              {/* <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 hover" />
            </span> */}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

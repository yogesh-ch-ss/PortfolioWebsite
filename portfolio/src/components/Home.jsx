import React from "react";

import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

import galaxy from "../assets/galaxy.mp4";

const Home = () => {
  return (
    <div
      name="home"
      className="relative w-full h-screen md:h-[50rem] overflow-hidden"
    >
      {/* Video Background */}
      <video
        src={galaxy}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Dim Overlay */}
      <div className="absolute inset-0 bg-black opacity-55" />

      {/* navbar background */}
      <div className="h-12 bg-gradient-b from-neutral-900 to-neutral-800 absolute inset-0" />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-4 py-[14rem]">
        <h1 className="text-4xl md:text-6xl font-semibold py-2 text-neutral-100">
          Yogesh Chandra Singh Samant
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium py-2 text-neutral-100">
          I'm a full-stack developer
        </h2>
        <div className="flex items-center justify-center py-2">
          <Link to="about" smooth={true} duration={500}>
            <button className="group flex gap-2 px-6 py-2 my-2 items-center rounded-full bg-neutral-200 hover:bg-white  text-neutral-950 font-medium ">
              Learn more
              <span className="group-hover:translate-y-1 duration-300">
                <FaAnglesDown />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

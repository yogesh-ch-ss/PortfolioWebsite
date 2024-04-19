import React from "react";

import { FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      // className="w-full h-[48rem] bg-gradient-to-t from-neutral-950 via-gray-900 to-slate-900 text-center"
      className="w-full h-[40rem] bg-neutral-90 text-center"
    >
      {/* container */}
      <div className="max-w-[60rem] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-semibold text-neutral-100 py-2 bg-clip-text text-transparent bg-gradient-to-br from-pink-600 via-fuchsia-800 to-violet-900 from-10% via-50%">
          Yogesh Chandra Singh Samant
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-neutral-100 py-2">
          I'm a full-stack developer
        </h2>
        <div className="flex items-center justify-center py-2">
          <Link to="about" smooth={true} duration={500}>
            <button className="group flex gap-2 border-2 px-4 py-2 my-2 items-center rounded-full bg-gradient-to-br hover:from-pink-600 hover:via-fuchsia-800 hover:to-violet-900 text-neutral-100 hover:text-fuchsia-100 from-10% via-50% border-neutral-100 hover:border-neutral-950">
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

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaAngleDown, FaAnglesDown } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-[48rem] bg-neutral-950 text-center">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-neutral-100">Hi, my name is </p>
        <h1 className="text-4xl sm:text-6xl font-semibold text-neutral-100 py-4">
          Yogesh Chandra Singh Samant
        </h1>
        <h2 className="text-4xl sm:text-6xl font-medium text-neutral-400">
          I'm a software developer
        </h2>
        <p className="text-gray-400 max-w-700 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid,
          vero aut eos aspernatur molestias? Aut esse ullam maiores quam
          consequuntur, temporibus aliquid ipsa nulla itaque enim qui recusandae
          assumenda.
        </p>
        <div className="flex items-center justify-center">
          <Link to="about" smooth={true} duration={500}>
            <button className="group flex gap-2 border-2 px-6 py-2 my-2 items-center rounded-full border-neutral-300 hover:border-neutral-50 hover:bg-gradient-to-br hover:from-pink-600 hover:via-fuchsia-700 hover:to-violet-900 text-neutral-100 hover:text-neutral-50">
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

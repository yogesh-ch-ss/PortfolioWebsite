import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-500">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-100">Yogesh</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a software developer
        </h2>
        <p className="text-gray-400 max-w-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid,
          vero aut eos aspernatur molestias? Aut esse ullam maiores quam
          consequuntur, temporibus aliquid ipsa nulla itaque enim qui recusandae
          assumenda.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 hover" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

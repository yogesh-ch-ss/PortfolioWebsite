import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container div */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 pl-4 pr-4">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4 pr-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eos quasi placeat error repellat vero repudiandae pariatur! Ullam fugiat aspernatur deleniti, libero minima alias, deserunt consequatur itaque explicabo maxime excepturi!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

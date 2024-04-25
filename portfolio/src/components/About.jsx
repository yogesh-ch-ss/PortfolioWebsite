import React from "react";
import { MdPerson } from "react-icons/md";

const About = () => {
  return (
    <div
      name="about"
      // className="w-full py-24 text-neutral-100 bg-gradient-to-br from-gray-900 to-gray-800"
      className="w-full py-24 text-neutral-100 bg-neutral-900"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        {/* <div className="text-9xl">
          <MdPerson />
        </div> */}
        <div className="max-w-[60rem] w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About</h1>
          </div>
        </div>
        <div className="max-w-[60rem] w-full px-4 pt-4">
          <div className="text-center text-2xl font-semibold">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              quod! Nemo commodi sit quasi, accusamus quod qui in? Accusamus
              magnam odio aliquid cupiditate similique temporibus quae nemo
              sapiente. Tempore, vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-gradient-to-t from-teal-800 to-teal-700 py-24 text-neutral-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
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

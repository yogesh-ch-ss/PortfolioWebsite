import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-t from-teal-900 to to-teal-800 text-neutral-100 py-24"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        <div className="max-w-[60rem] w-full px-2 py-2">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About</h1>
          </div>
        </div>
        <div className="max-w-[60rem] w-full px-2 py-2">
          <div className="text-center text-2xl font-bold">
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

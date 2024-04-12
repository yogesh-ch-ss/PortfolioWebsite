import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-neutral-100 text-neutral-950 py-24">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        <div className="max-w-[1000px] w-full px-2 py-2">
          <div className="text-center">
            <p className="text-4xl font-bold">About</p>
          </div>
          <div></div>
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

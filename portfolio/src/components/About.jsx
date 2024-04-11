import React from "react";

// tech stack: html, css, javascript, typescript, react, tailwind, nodejs, expressjs, mongodb,
// tools: aws, github, postman, firebase

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-[48rem] bg-gradient-to-t from-neutral-200 to-neutral-100 text-neutral-950 my-[.8rem]"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* container */}
        <div className="max-w-[1000px] w-full px-2">
          <div className="text-center py-4">
            <p className="text-4xl font-bold">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-2">
          <div className="text-center text-4xl font-bold">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              eos quasi placeat error repellat vero repudiandae pariatur! Ullam
              fugiat aspernatur deleniti, libero minima alias, deserunt
              consequatur itaque explicabo maxime excepturi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

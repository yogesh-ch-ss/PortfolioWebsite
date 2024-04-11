import React from "react";
import HTML from "../assets/html.png";

// tech stack: html, css, javascript, typescript, react, tailwind, nodejs, expressjs, mongodb,
// tools: aws, github, postman, firebase

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-neutral-100 text-neutral-950 my-[.8rem] py-8"
    >
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

        {/* grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* frontend */}
          <div className="px-4 py-12 bg-neutral-200 h-[18rem]">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left lg:float-right">
              {/* title */}
              <div>
                <h1 className="text-2xl font-bold">Frontend development</h1>
              </div>
              {/* icons */}
              <div className="grid grid-cols-3 text-center">
                <div className="hover:scale-110 duration-300">
                  <img
                    className="w-8 mx-auto py-2"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>

          {/* backend */}
          <div className="px-4 py-12 bg-neutral-200 h-[18rem]">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left">
              {/* title */}
              <div>
                <h1 className="text-2xl font-bold">Backend development</h1>
              </div>
              {/* icons */}
              <div className="grid grid-cols-3 text-center">
                <div className="hover:scale-110 duration-300">
                  <img
                    className="w-8 mx-auto py-2"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>

          {/* AWS */}
          <div className="px-4 py-12 bg-neutral-200 h-[18rem]">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left lg:float-right">
              {/* title */}
              <div>
                <h1 className="text-2xl font-bold">AWS</h1>
              </div>
              {/* icons */}
              <div className="grid grid-cols-3 text-center">
                <div className="hover:scale-110 duration-300">
                  <img
                    className="w-8 mx-auto py-2"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>

          {/* Others */}
          <div className="px-4 py-12 bg-neutral-200 h-[18rem]">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left">
              {/* title */}
              <div>
                <h1 className="text-2xl font-bold">Others</h1>
              </div>
              {/* icons */}
              <div className="grid grid-cols-3 text-center">
                <div className="hover:scale-110 duration-300">
                  <img
                    className="w-8 mx-auto py-2"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <p>HTML</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

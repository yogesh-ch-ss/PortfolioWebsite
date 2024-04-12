import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import TypeScript from "../assets/typescript.png";
import Express from "../assets/express.png";

import { FaDisplay, FaServer } from "react-icons/fa6";

// tech stack: html, css, javascript, typescript, react, tailwind, nodejs, expressjs, mongodb,
// tools: aws, github, postman, firebase

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-neutral-100 text-neutral-950 py-8"
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* frontend */}
          <div className="px-4 py-8 bg-neutral-200 h-auto">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left lg:float-right">
              <div className="pt-8 pb-2">
                <FaDisplay className="text-[4rem]" />
              </div>
              <div className="text-2xl font-bold pb-4">Frontend</div>
              <div className="text-lg font-medium">
                <ul>
                  <li className="cursor-default py-1">HTML</li>
                  <li className="cursor-default py-1">CSS</li>
                  <li className="cursor-default py-1">JavaScript</li>
                  <li className="cursor-default py-1">TypeScript</li>
                  <li className="cursor-default py-1">React</li>
                  <li className="cursor-default py-1">Tailwind</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="px-4 py-8 bg-neutral-200 h-auto">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left">
              <div className="pt-8 pb-2">
                <FaServer className="text-[4rem]" />
              </div>
              <div className="text-2xl font-bold pb-4">Backend</div>
              <div className="text-lg font-medium">
                <ul>
                  <li className="cursor-default py-1">Node.js</li>
                  <li className="cursor-default py-1">Express</li>
                  <li className="cursor-default py-1">MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          {/* backend */}
          <div className="px-4 py-12 bg-neutral-200 h-[18rem]">
            <div className="flex flex-col max-w-[30rem] min-w-fit lg:min-w-[25rem] float-left">
              {/* title */}
              <div className="py-2">
                <h1 className="text-2xl font-bold">Backend Development</h1>
              </div>
              {/* icons */}
              <div className="grid grid-cols-3 text-center font-medium">
                <div>
                  <img
                    className="w-12  mx-auto py-2"
                    src={Node}
                    alt="Node icon"
                  />
                  <p>Node</p>
                </div>
                <div>
                  <img
                    className="w-12 mx-auto py-2"
                    src={Express}
                    alt="Express icon"
                  />
                  <p>Express</p>
                </div>
                <div>
                  <img
                    className="w-12 mx-auto py-2"
                    src={Mongo}
                    alt="Mongo icon"
                  />
                  <p>Mongo</p>
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

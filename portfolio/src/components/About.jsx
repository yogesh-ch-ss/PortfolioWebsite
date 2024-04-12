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
    <div name="about" className="w-full bg-neutral-100 text-neutral-950 py-8">
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

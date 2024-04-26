import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { FaAmazon } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { BsCloudSunFill } from "react-icons/bs";
import { TbCameraPin } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const activeCard = {
  // bg: "bg-gradient-to-br from-pink-600 via-fuchsia-800 to-violet-900 from-10% via-50%",
  // bg: "bg-gradient-to-br from-gray-900 to-gray-800",
  bg: "bg-gradient-to-br from-gray-900 to-slate-950",
  pointer: null,
  linkColour: "text-blue-500",
};

const passiveCard = {
  bg: "bg-neutral-900",
  pointer: "pointer-events-none",
  linkColour: "text-neutral-400",
};

const listOfProjects = [
  // {
  //   id: 0,
  //   name: "Template",
  //   icon: <MdPerson />,
  //   about: "Template About",
  //   description: "Template Description",
  //   stack: "React, Tailwind",
  //   website: "https://www.youtube.com/",
  //   github: "https://github.com/yogesh-ch-ss",
  // },
  {
    id: 1,
    name: "Portfolio",
    icon: <MdPerson />,
    about: "Personal Portfolio Website",
    description:
      "My personal portfolio website that's designed to showcase on the internet.",
    stack: "React, Tailwind",
    website: "/",
    github: "https://github.com/yogesh-ch-ss/PortfolioWebsite",
  },
  {
    id: 2,
    name: "Vatavaranam ",
    icon: <BsCloudSunFill />,
    about: "Weather Forecast App",
    description: "Checkout the weather in your area through this clean, minimalist app!",
    stack: "React Typescript, Tailwind",
    website: "https://vatavaranam.web.app/",
    github: "https://github.com/yogesh-ch-ss/Vatavaranam",
  },
  {
    id: 3,
    name: "MesLieux",
    icon: <TbCameraPin />,
    about: "Travel Photo App",
    description: "Sign up and showcase your trip photos to the world!",
    stack: "MERN Stack",
    // website: "website url",
    github: "https://github.com/yogesh-ch-ss/MesLieux",
  },
  {
    id: 4,
    name: "Duanlian",
    icon: <FaDumbbell />,
    about: "Personal Workout Tracker",
    description: "A simple web app to keeps a log of your exercises.",
    stack: "MERN Stack",
    // website: "website url",
    github: "https://github.com/yogesh-ch-ss/Duanlian",
  },
  {
    id: 5,
    name: "Tweeter",
    icon: <FaTwitter />,
    about: "Clone of Twitter",
    description: "A clone of twitter login and feeds page (currently known as X).",
    stack: "MERN Stack",
    // website: "website url",
    github: "https://github.com/yogesh-ch-ss/Tweeter",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-auto bg-neutral-950 py-32 text-neutral-100"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <h1 className="text-4xl font-bold pb-4">Projects</h1>
        </div>

        {/* sliding cards */}
        <div className="w-full m-auto overflow-hidden">
          <ProjectCarousel
            listOfProjects={listOfProjects}
            activeCard={activeCard}
            passiveCard={passiveCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

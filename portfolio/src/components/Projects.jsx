import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { FaAmazon } from "react-icons/fa6";
import { MdPerson } from "react-icons/md";
import { BsCloudSunFill } from "react-icons/bs";
import { TbCameraPin } from "react-icons/tb";

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
  {
    id: 1,
    name: "Portfolio",
    icon: <MdPerson />,
    description:
      "My personal portfolio website that's designed to showcase on the internet.",
    stack: "React, Tailwind",
    website: "https://www.youtube.com/",
    github: "github url",
  },
  {
    id: 2,
    name: "Vatavaranam ",
    icon: <BsCloudSunFill />,
    description: "Weather Forecast App",
    stack: "React Typescript, Tailwind",
    website: "https://www.youtube.com/",
    github: "github url",
  },
  {
    id: 3,
    name: "MesLieux",
    icon: <TbCameraPin />,
    description: "Description of the project",
    stack: "MERN Stack",
    // website: "website url",
    github: "github url",
  },
  {
    id: 4,
    name: "Project 4",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    // website: "website url",
    github: "github url",
  },
  {
    id: 5,
    name: "Project 5",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    // website: "website url",
    github: "github url",
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full h-auto bg-neutral-950 py-24 text-neutral-100"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
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

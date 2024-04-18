import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import { FaAmazon } from "react-icons/fa6";

const listOfProjects = [
  {
    id: 1,
    name: "Project 1",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 2,
    name: "Project 2",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 3,
    name: "Project 3",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 4,
    name: "Project 4",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 5,
    name: "Project 5",
    icon: <FaAmazon />,
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
];

const Projects = () => {
  return (
    <div className="w-full h-auto bg-neutral-800 py-24 text-neutral-100">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div>
          <h1 className="text-4xl font-bold">Projects</h1>
        </div>

        {/* sliding cards */}
        <div className="w-full m-auto overflow-hidden">
          <ProjectCarousel listOfProjects={listOfProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

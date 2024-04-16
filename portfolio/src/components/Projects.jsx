import React from "react";
import ProjectCarousel from "./ProjectCarousel";

const listOfProjects = [
  {
    id: 1,
    name: "Project 1",
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 2,
    name: "Project 2",
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 3,
    name: "Project 3",
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 4,
    name: "Project 4",
    description: "Description of the project",
    stack: "Stack",
    website: "website url",
    github: "github url",
  },
  {
    id: 5,
    name: "Project 5",
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
        <div>Projects</div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
          repudiandae?
        </div>

        {/* sliding cards */}
        <div className="max-w-[60rem] m-auto">
          <ProjectCarousel listOfProjects={listOfProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;

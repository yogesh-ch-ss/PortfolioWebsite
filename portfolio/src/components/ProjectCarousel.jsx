import React from "react";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";

const ProjectCarousel = (props) => {
  let [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr(curr === 0 ? props.listOfProjects.length - 1 : curr - 1);

  const next = () =>
    setCurr(curr === props.listOfProjects.length - 1 ? 0 : curr + 1);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* slider cards */}
      <div
        className={`flex transition ease-out duration-500 w-screen md:max-w-[30rem] py-2`}
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {props.listOfProjects.map((project, index) => (
          <span
            key={index}
            className="flex-grow flex-shrink-0 w-full text-center"
          >
            <ProjectCard
              project={project}
              bg={
                props.listOfProjects.indexOf(project) === curr
                  ? props.bgFocus
                  : props.bg
              }
              pointer={
                props.listOfProjects.indexOf(project) === curr
                ? null
                : "pointer-events-none"
              }
            />
          </span>
        ))}
      </div>

      {/* slider buttons */}
      <div className="flex justify-center items-center gap-12">
        <button
          onClick={prev}
          className="border-2 p-2 rounded-full bg-transparent hover:bg-neutral-600 duration-100"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={next}
          className="border-2 p-2 rounded-full bg-transparent hover:bg-neutral-600 duration-100"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

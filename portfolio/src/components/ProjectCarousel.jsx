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
        className={`flex transition ease-out duration-500 w-full sm:w-[35rem] h-full py-2`}
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
                  ? props.activeCard.bg
                  : props.passiveCard.bg
              }
              pointer={
                props.listOfProjects.indexOf(project) === curr
                  ? props.activeCard.pointer
                  : props.passiveCard.pointer
              }
              linkColour={
                props.listOfProjects.indexOf(project) === curr
                  ? props.activeCard.linkColour
                  : props.passiveCard.linkColour
              }
              borderBg={
                props.listOfProjects.indexOf(project) === curr
                  ? props.activeCard.borderBg
                  : props.passiveCard.borderBg
              }
            />
          </span>
        ))}
      </div>

      {/* slider buttons */}
      <div className="flex justify-center items-center gap-12">
        <button
          onClick={prev}
          className="border-2 p-2 rounded-full bg-transparent hover:bg-neutral-700 duration-100"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={next}
          className="border-2 p-2 rounded-full bg-transparent hover:bg-neutral-700 duration-100"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;

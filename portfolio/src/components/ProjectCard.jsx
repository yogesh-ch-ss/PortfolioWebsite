import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const ProjectCard = (props) => {
  return (
    <div
      className={`flex flex-col items-start justify-center mx-4 my-4 border-[1px] border-neutral-600 rounded-xl px-8 py-8 ${props.project.bg}`}
    >
      <div className="text-4xl">{props.project.icon}</div>
      <div className="font-bold text-2xl py-2">{props.project.name}</div>
      <div className="">{props.project.description}</div>
      <div className="py-2 text-neutral-400">{props.project.stack}</div>
      {/* <div className="">
        {props.project.website ? (
          <a href={props.project.website} target="_blank" rel="external">
            <button className="border-2 rounded-xl px-2 py-1">Website</button>
          </a>
        ) : null}
      </div> */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="">
          {props.project.website ? (
            <a
              href={props.project.website}
              target="_blank"
              rel="external"
              className="pt-2 text-blue-500 font-normal text-sm flex items-center justify-center py-1 hover:underline"
            >
              Website
              <FaAngleRight />
            </a>
          ) : null}
        </div>
        <div className="">
          {props.project.github ? (
            <a
              href={props.project.github}
              target="_blank"
              rel="external"
              className="pt-2 text-blue-500 font-normal text-sm flex items-center justify-center py-1 hover:underline"
            >
              Github repo
              <FaAngleRight />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

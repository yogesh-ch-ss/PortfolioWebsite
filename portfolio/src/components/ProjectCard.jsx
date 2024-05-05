import React from "react";
import { FaLayerGroup, FaAngleRight } from "react-icons/fa6";

const ProjectCard = (props) => {
  return (
    <div
      className={`flex flex-col items-center justify-center m-4 p-[.25rem] rounded-2xl ${props.borderBg}`}
    >
      <div
        className={`flex flex-col items-start justify-center w-full h-full rounded-xl px-8 py-8 ${props.bg}`}
      >
        <div className="text-start text-5xl">{props.project.icon}</div>
        <div className="text-start font-bold text-2xl py-2">
          {props.project.name}
        </div>
        <div className="text-start h-auto text-lg font-bold">
          {""}
          {props.project.about}
        </div>
        <div className="py-2 text-start min-h-[6rem] h-auto text-neutral-300">
          {props.project.description}
        </div>
        <div className="py-2 flex gap-4 items-center">
          <FaLayerGroup className="text-lg" />
          {props.project.stack}
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="">
            {props.project.website ? (
              <a
                href={props.project.website}
                target="_blank"
                rel="external"
                className={`pt-2 ${props.linkColour} font-semibold flex items-center justify-center py-1 hover:underline ${props.pointer}`}
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
                className={`pt-2 ${props.linkColour} font-semibold flex items-center justify-center py-1 hover:underline ${props.pointer}`}
              >
                Github repo
                <FaAngleRight />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

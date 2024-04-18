import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col items-start justify-center mx-4 my-4 border-2 border-neutral-100 rounded-xl">
      <div className="px-4 pt-4">{props.project.icon}</div>
      <div className="px-4 py-2">{props.project.name}</div>
      <div className="px-4 py-2">{props.project.description}</div>
      <div className="px-4 py-2">{props.project.stack}</div>
      <div className="px-4 py-2">
        {props.project.website ? (
          <a href={props.project.website} target="_blank">
            <button className="border-2 rounded-xl px-2 py-1">Website</button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;

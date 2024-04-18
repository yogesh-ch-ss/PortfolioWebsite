import React from 'react'

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col items-start justify-center mx-4 my-4 border-2 border-neutral-100 rounded-xl'>
      <div className='px-4 py-2'>{props.project.icon}</div>
      <div className='px-4 py-2'>{props.project.name}</div>
      <div className='px-4 py-2'>{props.project.description}</div>
      <div className='px-4 py-2'>{props.project.stack}</div>
    </div>
  )
}

export default ProjectCard
//Ashish Neupane
import React from 'react'
import '../css/Project.css'
import { projects } from '../constant/project'

const Project = ({ selectedUser }) => {
  const projectList = projects[selectedUser ?? 'ashish']
  return (
    <div className="projects-container">
      {projectList.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-name">{project.name}</h3>
          <img
            src={project.imageUrl}
            alt={project.name}
            className="project-image"
          />
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <p className="project-description">{project.description}</p>
          <a href={project.liveLink} className="project-link">
            Live
          </a>
          {project.repoLink && (
            <a href={project.repoLink} className="project-link">
              Repo
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} className="project-link">
              Demo
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Project

import React from "react";
import { useParams } from "react-router-dom";
// Here we add `match` to the arguments so we can access the path info
// in `routerProps` that is passed from ProjectCard.js

function ProjectDetails({ projects }) {
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /projects/:projectId path
  const params = useParams();
  const project = projects.find(proj => proj.id.toString() === params.projectId)


  return (
    <div className='project-details'>
      {project.name}
    </div>
  )
}
export default ProjectDetails;
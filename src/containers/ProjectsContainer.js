import React, { useEffect, useState } from "react";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
      fetch("https://jlam-portfolio-backend.herokuapp.com/api/v1/projects")
          .then(r => r.json())
          .then(rJSON => setProjects(rJSON.projects))
  }, [])

  return (
    <div id='projects-container' className='component'>
      <h1>PORTFOLIO</h1>
      <h3>My Latest Projects</h3>
    </div>
  )
}

export default ProjectsContainer;

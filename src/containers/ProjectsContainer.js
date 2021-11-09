import React, { useEffect, useState } from "react";

function ProjectsContainer() {
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
      fetch("https://jlam-portfolio-backend.herokuapp.com/api/v1/projects")
          .then(r => r.json())
          .then(rJSON => {
            setProjects(rJSON.projects);
            setLoadingProjects(false);
          })
  }, [])

  if (loadingProjects) {
    return <h2>Loading...</h2>
  }

  return (
    <div id='projects-container' className='component'>
      <h1>PORTFOLIO</h1>
      <h3>My Latest Projects</h3>
      <p>projects</p>
    </div>
  )
}

export default ProjectsContainer;

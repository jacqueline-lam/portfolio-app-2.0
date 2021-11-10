import React, { useEffect, useState } from "react";
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';

function ProjectsContainer() {
  const [stacks, setStacks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    const fetchStacks = () => {
      fetch('https://jlam-portfolio-backend.herokuapp.com/api/v1/stacks')
      .then(r => r.json())
      .then(rJSON => setStacks(rJSON.stacks))
    };

    const fetchProjects = () => {
      fetch("https://jlam-portfolio-backend.herokuapp.com/api/v1/projects")
          .then(r => r.json())
          .then(rJSON => {
            setProjects(rJSON.projects);
            setLoadingProjects(false);
          })
    };
    fetchStacks();
    fetchProjects();
  }, [])

  return (
    <div id='projects-container' className='component'>
      <h1>PORTFOLIO</h1>
      <>
        {
          loadingProjects ?
            <h2>Loading...</h2>
            :
            <div id='portfolio'>
              <h3>My Latest Projects</h3>
              <ProjectFilters stacks={stacks} selectedStacks={selectedStacks}/>
              <ProjectList />
            </div>
        }
      </>
    </div>
  )
}

export default ProjectsContainer;

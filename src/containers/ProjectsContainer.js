import React, { useEffect, useState } from "react";
// import custom `useRouteMatch` from React Router
import { Route, useRouteMatch } from 'react-router-dom';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';

function ProjectsContainer() {
  const [stacks, setStacks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  // useRouteMatch returns a special obj w/ info about currently matched route
  const match = useRouteMatch();

  const fetchStacks = () => {
    fetch('https://jlam-portfolio-backend.herokuapp.com/api/v1/stacks')
      .then(r => r.json())
      .then(rJSON => {
        setLoadingProjects(false);
        setStacks(rJSON);
      })
  };

  const fetchProjects = () => {
    fetch("https://jlam-portfolio-backend.herokuapp.com/api/v1/projects")
      .then(r => r.json())
      .then(rJSON => {
        setProjects(rJSON);
        setLoadingProjects(false);
      })
  };

  // empty dependencies array in second arg, so only run fetch ONCE
  useEffect(() => {
    fetchStacks();
    fetchProjects();
  }, [])

  function handleFiltersChange(selectedFilters) {

  }

  return (
    <div id='projects-container' className='component'>
      <h1>PORTFOLIO</h1>
      {/*  we can use current URL from the `match` object as part of the path,
        this will generate a url like "/projects/:projectId" */}
      <Route path={`${match.url}/:projectId`}>
        <ProjectDetails projects={projects} />
      </Route>
      <>
        {
          loadingProjects ?
            <h2>Loading...</h2>
            :
            <div id='portfolio'>
              <h3>My Latest Projects</h3>
              <ProjectFilters
                stacks={stacks}
              // onFilterChange={handleFiltersChange}
              />
              <ProjectList projects={projects} />
            </div>
        }
      </>
    </div>
  )
}

export default ProjectsContainer;

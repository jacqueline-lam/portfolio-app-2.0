import React, { useEffect, useState } from "react";
// import custom `useRouteMatch` from React Router
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';

function ProjectsContainer() {
  const [stacks, setStacks] = useState([]);
  const [selectedStackIds, setSelectedStackIds] = useState([]);
  const [projects, setProjects] = useState([]);
  let allProjects;
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
        allProjects = rJSON;
        setLoadingProjects(false);
      })
  };

  // Empty dependencies array in second arg, so only run fetch ONCE
  useEffect(() => {
    fetchStacks();
    fetchProjects();
  }, [])

  function handleFiltersChange(stackId, selected) {
    console.log(typeof stackId, selected)

    let filteredProjects = [];
    let newStackIds;

    if (selected) {
      console.log(projects)
      console.log(allProjects)
      // Filter projects with the chosen stack
      filteredProjects = allProjects.filter(proj => {
        // tests whether at least one stack of the proj.stacks passes the test)
        proj.stacks.some(stack => stack.id.toString() === stackId)
        console.log(proj.stacks.some(stack => stack.id.toString() === stackId))
      })
      console.log(filteredProjects)

      // Concatnenating new values when stack filter btn is pressed
      newStackIds = selectedStackIds.concat(stackId);
      // Set store unique stackIds
      newStackIds = [...new Set(newStackIds)];

      console.log('stackId = ', typeof stackId, stackId)
      console.log('stackIds = ', typeof newStackIds, newStackIds)
      console.log('filteredProjects = ', typeof filteredProjects, filteredProjects)

    } else {
      // Copy selectedStackIds array to allow removal w/o mutation
      newStackIds = [...selectedStackIds];
      // Find 1st index at which id can be found in the array
      // Set that index as the start in Array.splice() and set delete count to 1
      newStackIds.splice(newStackIds.indexOf(stackId), 1);

      // Only include projects that have the selected stacks
      if (newStackIds.length > 0) {
        filteredProjects = allProjects.filter(proj => {
          const projectStacks = proj.stacks.map(proj => proj['id'].toString());
          const includesSelectedStacks = newStackIds.every(selectedStack =>
            projectStacks.includes(selectedStack)
          );
          return includesSelectedStacks;
        })
      }
    }

    setSelectedStackIds(newStackIds);
    setProjects(filteredProjects);
  }

  return (
    <div id='projects-container' className='component'>
      <Switch>
        {/*  we can use current URL from the `match` object as part of the path,
          this will generate a url like "/projects/:projectId" */}
        <Route path={`${match.url}/:projectId`}>
          <ProjectDetails projects={projects} />
        </Route>
        <Route path='/projects' render={() => (
          <>
            <div id='portfolio'>
              <h1>PORTFOLIO</h1>
              {
                loadingProjects ?
                  <h2>Loading...</h2>
                  :
                  <>
                    <h3>My Latest Projects</h3>
                    <ProjectFilters
                      stacks={stacks}
                      selectedStackIds={selectedStackIds}
                      onToggleFilter={handleFiltersChange}
                    />
                    <ProjectList projects={projects} />
                  </>
              }
            </div>
          </>
        )} />
      </Switch>

    </div>
  )
}

export default ProjectsContainer;

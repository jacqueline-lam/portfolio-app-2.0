import { useEffect, useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';
import ProjectFilters from '../components/projects/ProjectFilters';
import ProjectList from '../components/projects/ProjectList';
import ProjectDetails from '../components/projects/ProjectDetails';
import Loading from '../images/loading.gif';

const STACKS_URL = 'https://jlam-portfolio-backend.herokuapp.com/api/v1/stacks';
const PROJECTS_URL = 'https://jlam-portfolio-backend.herokuapp.com/api/v1/projects';

function ProjectsContainer() {
  const [stacks, setStacks] = useState([]);
  const [selectedStackIds, setSelectedStackIds] = useState([]);
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  // useRouteMatch returns a special OBJECT w/ info about currently matched route
  // allow us to nest a 2nd Route that extends the URL path of the 1st
  const match = useRouteMatch();

  const fetchStacks = () => {
    fetch(STACKS_URL)
      .then(r => r.json())
      .then(rJSON => {
        setLoadingProjects(false);
        // When data is received, setState to store store data
        // causing an update with the remote data stored in state
        setStacks(rJSON);
      })
  };

  const fetchProjects = () => {
    fetch(PROJECTS_URL)
      .then(r => r.json())
      .then(rJSON => {
        setProjects(rJSON);
        setFilteredProjects(rJSON);
        setLoadingProjects(false);
      })
  };

  // Fetch data from API when component renders for the first time
  // Empty dependencies array in second arg, so only run fetch ONCE
  useEffect(() => {
    fetchStacks();
    fetchProjects();
  }, [])

  function handleFiltersChange(stackId, selected) {

    function addFilter() {
      // UPDATE SELECTED STACKS
      // Concatnenating new values when stack filter btn is pressed
      let newStackIds = selectedStackIds.concat(stackId);
      // Set store unique stackIds
      newStackIds = [...new Set(newStackIds)];
      setSelectedStackIds(newStackIds);

      // UPDATE FILTERRED PROJECTS
      // Filter projects with the chosen stack
      const newProjectList = filteredProjects.filter(proj => {
        // Test whether at least one stack of the proj.stacks passes the test)
        const matchingStack = (projectStack) => projectStack.id.toString() === stackId;
        return proj.stacks.some(matchingStack)
      })
      setFilteredProjects(newProjectList);

      // Uncomment to check if projects are filtered properly
      // console.log('stackId = ', typeof stackId, stackId)
      // console.log('stackIds = ', typeof newStackIds, newStackIds)
      // console.log('newProjectList afrer addition = ', typeof newProjectList, newProjectList)
    }

    function removeFilter() {
      // UPDATE SELECTED STACKS
      // Copy selectedStackIds array to allow removal w/o mutation
      const newStackIds = [...selectedStackIds];
      // Find 1st idx where id can be found
      // Set that idx as the start in Array.splice() and set delete count to 1
      newStackIds.splice(newStackIds.indexOf(stackId), 1);
      setSelectedStackIds(newStackIds);

      // UPDATE FILTERED PROJECTS
      // If no stack selected, show all projects
      let newProjectList = projects

      // Only include projects that have the selected stacks
      if (newStackIds.length > 0) {
        newProjectList = projects.filter(proj => {
          const projectStacks = proj.stacks.map(proj => proj['id'].toString());
          const hasSelectedStack = newStackIds.every(selectedStack =>
            projectStacks.includes(selectedStack)
          );
          return hasSelectedStack;
        })
      }
      setFilteredProjects(newProjectList);

      // Uncomment to check if projects are filtered properly
      // console.log('stackId', typeof stackId, stackId)
      // console.log('stackIds', typeof newStackIds, newStackIds)
      // console.log('filteredProjects after removal', typeof newProjectList, newProjectList)
    }

    selected ? addFilter() : removeFilter();
  }

  return (
    <div id='projects-container' className='main-container'>
      <Switch>
        {/*  we can use current URL from the `match` object as part of the path,
          this will generate a url like "/projects/:projectId" */}
        <Route path={`${match.url}/:projectId`}>
          <ProjectDetails projects={projects} />
        </Route>
        <Route path='/projects' render={() => (
          <div id='portfolio'>
            <div className='title'>
              <h1>PORTFOLIO</h1>
            </div>
            <>
              {
                loadingProjects ?
                  <img src={Loading} alt='loading' />
                  :
                  <>
                    <h3>My Latest Projects</h3>
                    <ProjectFilters
                      stacks={stacks}
                      selectedStackIds={selectedStackIds}
                      onToggleFilter={handleFiltersChange}
                    />
                    <ProjectList projects={filteredProjects} />
                  </>
              }
            </>
          </div>
        )} />
      </Switch>

    </div>
  )
}

export default ProjectsContainer;

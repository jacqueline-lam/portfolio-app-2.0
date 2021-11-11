import ProjectCard from './ProjectCard';

function ProjectList ({ projects }) {
  const projectCards = projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));

  return (
    <div id="projects">
        <div id="project-list">
          {(projects.length > 0) ?
            projectCards
          :
            <i>There are no matching results.</i>
          }
        </div>
    </div>
  );
}
export default ProjectList;
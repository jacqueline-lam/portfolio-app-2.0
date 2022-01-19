import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  const fileName = project.image_url
  // special feature supported by webpack's compiler - to get all matching modules starting from some base directory
  const images = require.context('../../images', true)
  let img = images('./' + fileName)

  return (
    <div className='project-card'>
      {/* render React Router LInks for each project */}
      <Link key={project.id} to={`/projects/${project.id}`}>
        <h4 className="project-link">{project.name}</h4>
        <img
          className='project-thumbnail img-fluid'
          alt='project thumbnail'
          src={img.default}
        />
      </Link>
      <i>{projectStacks}</i>
      <hr />
    </div >
  );
}

export default ProjectCard;
import {Link} from 'react-router-dom';

function ProjectCard ({ project }) {
  console.log(project)
  const projectStacks = project.stacks.map(stack => stack.name).join(' | ');

  const fileName = project.image_url
  // special feature supported by webpack's compiler - to get all matching modules starting from some base directory
  const images = require.context('../../images', true)
  let img = images('./' + fileName)
  console.log(img.default)

  return (
    <div id='project-list'>
      {/* render React Router LInks for each project */}
      <Link key={project.id} to={`/projects/${project.id}`}>
        <h4>{project.name}</h4>
      </Link>
      <img className='project-thumbnail img-fluid' alt='project thumbnail' src={img.default} />
      <i>{projectStacks}</i>
      <hr />
    </div >
  );
}

export default ProjectCard;
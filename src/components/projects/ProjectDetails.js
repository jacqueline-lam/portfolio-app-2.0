import React from "react";
// Here we add `match` to the arguments so we can access the path info
// in `routerProps` that is passed from ProjectCard.js
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import { Markup } from 'interweave';
import CommentsContainer from '../../containers/CommentsContainer'

function ProjectDetails({ projects }) {
  // call useParams to access the `params` from the url:
  // the dynamic portion of our /projects/:projectId path
  const params = useParams();
  const project = projects.find(proj => proj.id.toString() === params.projectId)

  const renderProject = () => {
    const projectStacks = (
      <div className="badge-wrapper">
        {project.stacks.map(stack =>
          <span key={stack.id} className="badge badge-pill badge-dark">{stack.name}</span>
        )}
      </div>
    );
    const fileName = project.image_url
    // special feature supported by webpack's compiler that allows you to get all matching modules starting from some base directory
    const images = require.context('../../images', true)
    let img = images('./' + fileName)

    // return multiple JSX elements in an array
    return [
      <Container>
        <Link to={'/projects'}>
          <button className='btn btn-outline-secondary'>&laquo; BACK</button>
        </Link>

        <div className='component'>
          <h3>{project.name}</h3>
          <img
            className='project-thumbnail img-fluid'
            alt='project thumbnail'
            src={img.default}
          />
          <h5>Stacks</h5>
          {projectStacks}
          <div className='text' id='project-text'>
            <h6>What is it?</h6>
            <p>{project.description}</p>
            <h6>Why did I decide to build this app?</h6>
            <p>{project.reason}</p>
            <h6>Features</h6>
            <Markup content={project.features} allowElements='true' />
          </div>

          {
            project.blog_url ? (
              <button
                className="btn btn-outline-danger btn-lg"
                onClick={() => window.open(project.blog_url, "_blank")}
              >
                BLOG POST
              </button>
            ) : null
          }
          {
            project.github_url ? (
              <button
                className="btn btn-outline-danger btn-lg"
                onClick={() => window.open(project.github_url, "_blank")}
              >
                SOURCE CODE
              </button>
            ) : null
          }
          {
            project.site_url ? (
              <button
                className="btn btn-outline-danger btn-lg"
                onClick={() => window.open(project.site_url, "_blank")}
              >
                LIVE SITE
              </button>
            ) : null
          }
          {
            project.demo_vid ? (
              <div>
                <h5>Project Demo</h5>
                <div className='iframe-container'>
                  <iframe
                    title="Umami Pantry Demo"
                    src={project.demo_vid}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )
              :
              null
          }
          <hr />

          <CommentsContainer project={project} />
        </div>
      </Container >
    ]
  }

  return (
    <div className='project-details'>
      {
        project ?
          renderProject()
          :
          <i>This project does not exist. See all projects on Portfolio page.</i>
      }
    </div>
  )
}
export default ProjectDetails;
function About() {
  return (
    <div id='about' className='component'>
      <div className='text' id='about-text'>
        <h1>ABOUT ME</h1>
        <h2>Full-stack Software Engineer</h2>
        <div className='text-section'>
          <h6>My passion for using technologies to cultivate brands and develop strategies have led me to the path of software engineering.</h6>
          <h6>I enjoy experimenting with code to tackle both simple and complex problems.</h6><br />
          <i>The rock climber in me gives me the flexibility and adaptability to be a multi-faceted problem solver under intense pressure, and imbues a passion for consistent self-improvement.</i>
        </div>
        <div className='text-section' id='skills'>
          <h4> // Technical Skills</h4>
          <i>&raquo; Programming Languages: Javascript, Ruby, HTML & CSS</i><br />
          <i>&raquo; Frameworks + Libraries: Rails, React, Redux, Sinatra, Bootstrap, Material UI</i><br />
          <i>&raquo; Databases: PostgreSQL, SQL</i><br />
          <i>&raquo; Misc.: GitHub Pages, Heroku, RESTful API, Object Oriented Programming, Model-View-Controller (MVC)</i><br />
        </div>
      </div>
    </div>
  )
}

export default About;
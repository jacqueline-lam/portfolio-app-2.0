// NavLink = superset of Link, adding styling attrs to rendered ele
// Tell React Router to re-render our routes, display component matching new URL
import { NavLink } from 'react-router-dom';

const linkStyles = {
  color: '#7ba0cf'
}

function NavBar() {
  return (
    <div id='nav'>
      <header className="header">
        <NavLink
          className='logo'
          to="/"
          exact
        >Jacqueline Lam</NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className='link link-theme link-arrow'
              to="/"
              exact
              activeStyle={linkStyles}
            >Home</NavLink>
          </li>
          <li>
            <NavLink
              className='link link-theme link-arrow'
              to="/about"
              exact
              activeStyle={linkStyles}
            >About</NavLink>
          </li>
          <li>
            <NavLink
              className='link link-theme link-arrow'
              to="/projects"
              exact
              activeStyle={linkStyles}
            >Portfolio</NavLink>
          </li>
          <li>
            <NavLink
              className='link link-theme link-arrow'
              to="/blog"
              exact
              activeStyle={linkStyles}
            >Blog</NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default NavBar;




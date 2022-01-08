// NavLink = superset of Link, adding styling attrs to rendered ele
import { NavLink } from 'react-router-dom';

const NavBarB = () => {
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
              activeStyle={{
                color: '#bda38f'
              }}
            >Home</NavLink>
          </li>
          <li>
            {/* <a href="#two" className="link link-theme link-arrow">SERVICE</a> */}
            <NavLink
              className='link link-theme link-arrow'
              to="/about"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >About</NavLink>
          </li>
          <li>
            {/* <a href="#three" className="link link-theme link-arrow">ABOUT US</a> */}
            <NavLink
              className='nav-link link-theme link-arrow'
              to="/projects"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >Portfolio</NavLink>
          </li>
          <li>
            <NavLink
              className='nav-link link-theme link-arrow'
              to="/blog"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >Blog</NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default NavBarB;




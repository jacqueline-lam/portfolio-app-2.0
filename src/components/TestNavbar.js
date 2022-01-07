// NavLink = superset of Link, adding styling attrs to rendered ele
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TestNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink
          className='navbar-brand'
          to="/"
          exact
        >
          <Navbar.Brand>Jacqueline Lam</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <NavLink
              className='nav-link'
              to="/"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >Home</NavLink>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavLink
              className='nav-link'
              to="/about"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >About</NavLink>
            <NavLink
              className='nav-link'
              to="/projects"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >Portfolio</NavLink>
            <NavLink
              className='nav-link'
              to="/blog"
              exact
              activeStyle={{
                color: '#bda38f'
              }}
            >Blog</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container-fluid">
    //     <NavLink
    //       className="navbar-brand"
    //       to="/"
    //       exact
    //     >Jacqueline Lam</NavLink>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="true" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="navbar-collapse collapse show" id="navbarColor03">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item">
    //           {/* <a className="nav-link active" href="#">Home
    //             <span className="visually-hidden">(current)</span>
    //           </a> */}
    //           <NavLink
    //             className='nav-link'
    //             to="/"
    //             exact
    //             activeStyle={{
    //               color: '#bda38f'
    //             }}
    //           >
    //             Home
    //             <span className="visually-hidden">(current)</span>
    //           </NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             className='nav-link'
    //             to="/about"
    //             exact
    //             activeStyle={{
    //               color: '#bda38f'
    //             }}
    //           >About</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             className='nav-link'
    //             to="/projects"
    //             exact
    //             activeStyle={{
    //               color: '#bda38f'
    //             }}
    //           >Portfolio</NavLink>
    //         </li>
    //         <li className="nav-item">
    //           <NavLink
    //             className='nav-link'
    //             to="/blog"
    //             exact
    //             activeStyle={{
    //               color: '#bda38f'
    //             }}
    //           >Blog</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default TestNavbar;


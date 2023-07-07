import React from 'react';
import { Link } from 'react-scroll';
import '../css/Nav.css'
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <div className="nav-item">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </div>
       
        <div className="nav-item">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

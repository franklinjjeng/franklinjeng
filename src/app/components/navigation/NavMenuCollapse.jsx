import React from 'react';
import { Link } from 'react-router';

export default function NavBarCollapse(props) {
  return (
    <div className="nav-menu-expanded">
      <Link className="nav-button nav-button-expanded" to="/aboutme">About Me</Link>
      <Link className="nav-button nav-button-expanded" to="/projects">Projects</Link>
      <Link className="nav-button nav-button-expanded" to="/contact">Contact</Link>
    </div>
  );
}

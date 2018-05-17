import React from 'react';
import { Link } from 'react-router';

export default function NavMenuFull(props) {
  return (
    <div className="nav-menu">
      <Link className="nav-button" to="/aboutme">About Me</Link>
      <Link className="nav-button" to="/projects">Projects</Link>
      <Link className="nav-button" to="/contact">Contact</Link>
    </div>
  );
}

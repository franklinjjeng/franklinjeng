import React from 'react';
import { Link } from 'react-router';

export default function NavMenu(props) {
  return (
    <div className={props.menuClass}>
      <Link className={`nav-button ${props.buttonClass || ''}`.trim()} to="/aboutme">About Me</Link>
      <Link className={`nav-button ${props.buttonClass || ''}`.trim()} to="/projects">Projects</Link>
      <Link className={`nav-button ${props.buttonClass || ''}`.trim()} to="/contact">Contact</Link>
    </div>
  );
}

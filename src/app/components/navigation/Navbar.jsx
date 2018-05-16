import React from 'react';
import { Link } from 'react-router';

// Components
import NavMenuFull from './NavMenuFull.jsx';
import NavMenuCollapse from './NavMenuCollapse.jsx';

export default class NewNavbar extends React.Component {

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-content">
          <Link className="nav-button nav-home" to="/">FJeng</Link>
          <NavMenuFull />
          {/* <NavMenuCollapse /> */}
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';

export default class NewNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    return (
      <div className="nav-menu">
        <div className="nav-hamburger" onClick={this.openMenu}>
          <div className="nav-burger-line nav-bar1"></div>
          <div className="nav-burger-line nav-bar2"></div>
          <div className="nav-burger-line nav-bar3"></div>
        </div>
        {this.state.showMenu ?
          <div>
            <Link className="nav-button" to="/aboutme">About Me</Link>
            <Link className="nav-button" to="/projects">Projects</Link>
            <Link className="nav-button" to="/contact">Contact</Link>
          </div>
          : <div></div>
        }
      </div>
    );
  }
}

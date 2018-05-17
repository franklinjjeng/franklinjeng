import React from 'react';
import { Link } from 'react-router';

// Components
import NavMenuBurger from './NavMenuBurger.jsx';
import NavMenuCollapse from './NavMenuCollapse.jsx';
import NavMenu from './NavMenu.jsx';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      showMenu: false,
      collapseSize: 600
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.openMenu = this.openMenu.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
    if (window.innerWidth > this.state.collapseSize) {
      this.setState({ showMenu: false })
    }
  }

  openMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-content">
          <Link className="nav-home nav-button" to="/">FJeng</Link>
          {/* {this.state.width}{JSON.stringify(this.state.showMenu)} */}
          {this.state.width > this.state.collapseSize ? <NavMenu menuClass="nav-menu" /> : <NavMenuBurger onClick={this.openMenu} />}
        </div>
        {this.state.showMenu ? <NavMenu menuClass="nav-menu-expanded" buttonClass="nav-button-expanded" /> : ''}
      </div>
    );
  }
}

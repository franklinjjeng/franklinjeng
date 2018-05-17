import React from 'react';
import { Link } from 'react-router';

// Components
import NavMenuBurger from './NavMenuBurger.jsx';
import NavMenuCollapse from './NavMenuCollapse.jsx';
import NavMenuFull from './NavMenuFull.jsx';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      showMenu: false
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
    if (window.innerWidth > 700) {
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
          <Link className="nav-button nav-home" to="/">FJeng</Link>
          {/* {this.state.width}{JSON.stringify(this.state.showMenu)} */}
          {this.state.width > 700 ? <NavMenuFull /> : <NavMenuBurger onClick={this.openMenu} />}
        </div>
        {this.state.showMenu ? <NavMenuCollapse /> : ''}
      </div>
    );
  }
}

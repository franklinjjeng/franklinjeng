import React from 'react';
import { Link } from 'react-router';

// Components
import NavMenuFull from './NavMenuFull.jsx';
import NavMenuCollapse from './NavMenuCollapse.jsx';

export default class NewNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
  }

  render() {
    return (
      <div className="nav-bar">
        <div className="nav-content">
          <Link className="nav-button nav-home" to="/">FJeng</Link>
          {this.state.width}
          {this.state.width > 700 ? <NavMenuFull /> : <NavMenuCollapse />}
        </div>
      </div>
    );
  }
}

import React from 'react';
import { Link } from 'react-router';

// Components
import NavButton from './NavButton.jsx';

export default class NewNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.updatePath = this.updatePath.bind(this);
  }

  updatePath(e) {
    e.preventDefault();
    const url = e.target.name;
    this.props.props.router.push(url);
  }

  render() {
    const pathname = this.props.props.location.pathname;
    return (
      <div className="nav-bar">
        <div className="nav-content">
          <div className="nav-button nav-home">
            <a onClick={this.updatePath} name="/">
              FJeng
          </a>
          </div>
          <div className="nav-menu">
            <NavButton onClick={this.updatePath} path={`/aboutme`} button={`About Me`} />
            <NavButton onClick={this.updatePath} path={`/projects`} button={`Projects`} />
            <NavButton onClick={this.updatePath} path={`/contact`} button={`Contact`} />
          </div>
        </div>
      </div>
    );
  }
}

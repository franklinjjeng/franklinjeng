import React from 'react';
import { Link } from 'react-router';

// UI
import NavContainer from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

// Components

export default class Navbar extends React.Component {

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
      <NavContainer collapseOnSelect className={(pathname === '/' ) ? 'nav-clear' : 'nav-white'}>
        <NavContainer.Header>
          <NavContainer.Brand>
            <Nav>
              <NavItem onClick={this.updatePath} eventKey={1} name="/">Franklin Jeng</NavItem>
            </Nav>
          </NavContainer.Brand>
          <NavContainer.Toggle />
        </NavContainer.Header>
        <NavContainer.Collapse>
          <Nav>
            <NavItem onClick={this.updatePath} eventKey={2} name="/projects">Projects</NavItem>
            <NavItem onClick={this.updatePath} eventKey={3} name="/aboutme">About Me</NavItem>
            <NavItem onClick={this.updatePath} eventKey={4} name="/contact">Contact</NavItem>
          </Nav>
        </NavContainer.Collapse>
      </NavContainer>
    );
  }
}


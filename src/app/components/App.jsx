import React from 'react';
import { browserHistory } from 'react-router';

// Components
import Footer from './footer/Footer.jsx';
import Navbar from './navigation/Navbar.jsx';
import OldNavbar from './navigation/OldNavbar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <OldNavbar className="navbar" props={this.props} /> */}
        <Navbar props={this.props} />
        <div className="app-body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

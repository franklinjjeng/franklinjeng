import React from 'react';
import { browserHistory } from 'react-router';

// Components
import Footer from './footer/footer.jsx';
import Navbar from './navigation/navbar.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar className="navbar" props={this.props} />
        <div className="app-body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}





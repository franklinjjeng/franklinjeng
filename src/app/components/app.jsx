import React from 'react';
import { browserHistory } from 'react-router';

// Components
import Navbar from './navigation/navbar.jsx';
import Footer from './footer.jsx';


// UI
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();


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
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}





import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

import AboutMe from './components/aboutMe/aboutMe.jsx';
import App from './components/app.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import Home from './components/home/home.jsx';
import NoPage404 from './components/noPage404.jsx';
import Projects from './components/projects/projects.jsx';

function createElement(Component, props) {
  return <Component key={`RouteComponent-${props.location.pathname}`} {...props} />;
}

export class FranklinJeng extends React.Component {
  render() {
    return (
      <Router history={browserHistory} createElement={createElement} onUpdate={() => window.scrollTo(0, 0)}>
        <Route component={App}>
          <Route path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route path="/contact" component={Contact}/>
          <Route path="404" component={NoPage404}/>
          <Redirect from="*" to='404' />
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<FranklinJeng />, document.getElementById('app'));

import React from 'react';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
  }

  redirect(e) {
    e.preventDefault();
    browserHistory.push(e.target.name);
  }

  render() {
    return (
      <div className="home-page">
        This is the Home Page
      </div>
    );
  }
}

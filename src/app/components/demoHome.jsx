import React from 'react';
import { browserHistory } from 'react-router';

export default class DemoHome extends React.Component {
  constructor(props) {
    super(props);
    this.updatePath = this.updatePath.bind(this);
  }

  updatePath(e) {
    e.preventDefault();
    console.log('etn', e.target);
    console.log('etn', e.target.name);
    const url = e.target.name;
    browserHistory.push(url);
  }

  render() {
    return (
      <div className="home-page">

        <div className="border fjeng">Franklin Jeng</div>
        <div className="border headline">THIS IS THE HEADLINE</div>

        <div className="home_content">
          <div className="profile">
            <img className="profile_photo" src="/assets/img/fjProfile.png"/>
            {/*<div className="profile_details">
              Deets
            </div> */}
          </div>

          <div className="home_blurb">
            {/*<div className="blurb_header">About Me:</div>*/}
            <p className="blurb_content">
              Hi there!
              I'm Franklin and this is a collection of things put together.
              A snippet of my personal life and to showcase my technical prowess.
              This site is somewhat a digital playground. 
              Everything is built from scratch without the use of WYSIWYG websites utilizing React as its front end framework.
              It also allows me to practice my front end design such as 'responsive web design' and 'parallax scrolling'.
              In fact, this home page layout was designed specifically for responsive web design.
              Go ahead and resize the window!
            </p>
          </div>
        </div>

        <div className="home_nav">
          <div name="/aboutme" className="home_nav_buttons">
            <a onClick={this.updatePath} className="home_nav_img home_nav_aboutme" name="/aboutme">About Me</a>
          </div>
          <div name="/projects" className="home_nav_buttons">
            <a onClick={this.updatePath} className="home_nav_img home_nav_projects" name="/projects">Projects</a>
          </div>
          <div name="/contact" className="home_nav_buttons">
            <a onClick={this.updatePath} className="home_nav_img home_nav_resume" name="/contact">Resume</a>
          </div>
        </div>

      </div>
    );
  }
}
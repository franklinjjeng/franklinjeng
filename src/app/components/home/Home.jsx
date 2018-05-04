import React from 'react';
import { browserHistory } from 'react-router';

import content from '../content/content';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.updatePath = this.updatePath.bind(this);
  }

  updatePath(e) {
    e.preventDefault();
    const url = e.target.name;
    browserHistory.push(url);
  }

  render() {
    return (
      <div className="home-page">
        {/*<div className="parallax_home">
          <div className="caption">
          </div>
        </div>*/}

        <div className="border fjeng">Franklin Jeng</div>
        <div className="border headline">
          fullstack software engineer based in SF Bay Area
        </div>

        <div className="home_content">
          <div className="profile">
            <img
              className="profile_photo"
              src="https://assets.franklinjeng.com/home/fjProfile.png"
            />
            {/*<div className="profile_details">
              Deets
            </div> */}
          </div>

          <div className="home_blurb">
            {/*<div className="blurb_header">About Me:</div>*/}
            <p className="blurb_content">{content.homeBlurb}</p>
          </div>
        </div>

        <div className="home_nav">
          <div name="/aboutme" className="home_nav_buttons">
            <a
              onClick={this.updatePath}
              className="home_nav_img home_nav_aboutme"
              name="/aboutme"
            >
              About Me
            </a>
          </div>
          <div name="/projects" className="home_nav_buttons">
            <a
              onClick={this.updatePath}
              className="home_nav_img home_nav_projects"
              name="/projects"
            >
              Projects
            </a>
          </div>
          <div name="/contact" className="home_nav_buttons">
            <a
              onClick={this.updatePath}
              className="home_nav_img home_nav_resume"
              name="/contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}

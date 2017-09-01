import React from 'react';

export default class AboutMe extends React.Component {
  
  render() {
    return (
      <div className="AboutMe">
        <div className="fjeng">Franklin Jeng</div>
        <div className="headline">THIS IS THE HEADLINE</div>

        <div className="about_me">
          <div className="about_me_header">About Me:</div>
          <div className="about_me_content">
            THIS IS CONTENT. THIS EXPLAINS THINGS ABOUT ME. OH MY HOW THINGS ARE ABOUT ME.
            What happens if I break the line and keep going?
          </div>
        </div>
      </div>
    );
  }
}


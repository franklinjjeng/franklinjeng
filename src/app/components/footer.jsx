import React from 'react';

export default class Footer extends React.Component {
  
  render() {
    return (
      <div className="footer">
        <span className="footer_text">&#169; 2017 Franklin Jeng</span>

        <div className="footer_links">
          <div className="footer_icons">
            <a className="mail" href="mailto:franklinjjeng@gmail.com" target="_blank">
              <img src="/assets/img/footer/mail-32.ico"/>
            </a>
          </div>
          <div className="footer_icons">
            <a className="github" href="https://github.com/franklinjjeng">
              <img src="/assets/img/footer/github-6-32.ico"/>
            </a>
          </div>
          <div className="footer_icons">
            <a className="linkedIn" href="https://www.linkedin.com/in/franklinjjeng">
              <img src="/assets/img/footer/linkedin-3-32.ico"/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}


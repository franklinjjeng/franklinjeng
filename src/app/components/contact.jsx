import React from 'react';

export default class Contact extends React.Component {
  
  render() {
    return (
      <div className="contact">
        {/*<div className="coming-soon">
          coming soon: contact and resume
        </div>*/}
        <div className="contact_info">
          <span className="contact_name">
            Franklin Jeng
          </span>
          <br/>
          <span className="contact_details">
            San Jose, CA
          </span>
          <br/>
          <span className="contact_details">
            <a href="mailto:franklinjjeng@gmail.com">franklinjjeng@gmail.com</a>
          </span>
          <br/>
          <span className="contact_details">
            <a href="https://www.linkedin.com/in/franklinjjeng">
              https://www.linkedin.com/in/franklinjjeng
            </a>
          </span>
          <br/>
          <span className="contact_details">
            <a href="https://github.com/franklinjjeng/franklinjeng">
              https://github.com/franklinjjeng/franklinjeng
            </a>
          </span>
        </div>
        <div className="resume">
          <a className="download_img" href="https://assets.franklinjeng.com/contact/JengFranklinResume.pdf" target="_blank">
            <img className="resume_img" src="https://assets.franklinjeng.com/contact/JengFranklinResume.png"></img>
          </a>
        </div>
      </div>
    );
  }
}
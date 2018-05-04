import React from 'react';

import content from '../content/content';

export default class AboutMe extends React.Component {
  render() {
    // TODO: create components for about me blurb and interest
    return (
      <div className="AboutMe">
        <div className="parallax_chicagoBean">
          <div className="caption">
            <span className="caption_text">ABOUT ME</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Summary:</span>
          <p className="about_me_content">{content.aboutMe.summary}</p>

          <span className="about_me_header">My History:</span>
          <p className="about_me_content">{content.aboutMe.history}</p>

          <span className="about_me_header">My Future:</span>
          <p className="about_me_content">{content.aboutMe.future}</p>
        </div>

        <div className="parallax_grandCanyon">
          <div className="caption">
            <span className="caption_text">HOBBIES and INTEREST</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Hobbies and Interests:</span>
          <div className="about_me_content">
            <span>
              <span className="about_me_subhead">Puzzles</span>: rock climbing,
              puzzle boxes, puzzle video games, riddles
            </span>
            <br />
            <p>{content.aboutMe.interests.puzzles}</p>
            <span>
              <span className="about_me_subhead">Music</span>: dancing, playing
              instruments, and (while not good at it) singing
            </span>
            <br />
            <p>{content.aboutMe.interests.music}</p>
            <span>
              <span className="about_me_subhead">Travel</span>: sightseeing
            </span>
            <br />
            <p>{content.aboutMe.interests.travel}</p>
          </div>
          <p className="about_me_content" />
          <p className="about_me_content" />
        </div>
      </div>
    );
  }
}

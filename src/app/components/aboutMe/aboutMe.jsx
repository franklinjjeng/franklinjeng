import React from 'react';

export default class AboutMe extends React.Component {
  
  render() {
    return (
      <div className="AboutMe">
        <div className="parallax_chicagoBean">
          <div className="caption">
            <span className="caption_text">ABOUT ME</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Summary:</span>
          <p className="about_me_content">
            I'm a full stack software engineer and I have found that this is my passion.
            With my enjoyment of puzzles and my desire to perform technical work, software engineer suits me perfectly as it sits right at the cross section of the two.
            The boundless field constantly offers something new to learn and tackle, allowing me to stay engaged.
          </p>

          <span className="about_me_header">My History:</span>
          <p className="about_me_content">
            I graduated from the University of California, Irvine as a Computer Engineer.
            Shortly after I found my first job as a VoIP engineer, diagnosing and troubleshooting voice quality issues in client environments.
            The natural career path progression brings you to a business oriented role where I became a Technical Account Manager.
            After two years, I realized that I lost my feeling of fulfillment that I used to receive when I would be the one solving technical issues.
            I explored coding courses online and I immediately fell back in love with it.
            I decided to quit my job and move back to the bay area to re-learn coding and become a software engineer.
          </p>

          <span className="about_me_header">My Future:</span>
          <p className="about_me_content">
            Currently, I’m looking for somewhere I can make a meaningful impact while simultaneously grow as an engineer.
            Though I am most comfortable with Javascript,
            I’m confident in my abilities to learn new languages.
          </p>
        </div>

        <div className="parallax_grandCanyon">
          <div className="caption">
            <span className="caption_text">HOBBIES and INTEREST</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Hobbies and Interests:</span>
          <div className="about_me_content">
            <span><span className="about_me_subhead">Puzzles</span>: rock climbing, puzzle boxes, puzzle video games, riddles</span>
            <br/>
            <p>
              I enjoy puzzles of all kinds.
              Ranging from physical, like rock climbing to determine the correct path and moves to take,
              to mental, like riddles and logic puzzles.
              The satisfaction you get once you figure something out is an amazing feeling.
              The desire to push forward and continue attempting it is fueled by the frustration of not being able to solve it.
            </p>
            <span><span className="about_me_subhead">Music</span>: dancing, playing instruments, and (while not good at it) singing</span>
            <br/>
            <p>
              Music is incredibly therapeutic and has something for every kind of mood.
              Small or large accomplishments are best accompanied with a victory dance.
              A night out dancing with friends is always an enjoyable one.
              No music around you?
              I’d like to make my own music with drums and would love to relearn the instruments I learn to play as a child to make more.
              And while I’m not the best at singing, my main stages have been my car and the shower.
            </p>
            <span><span className="about_me_subhead">Travel</span>: sightseeing</span>
            <br/>
            <p>
              I’d love to explore the world as much as I possibly can to see what's around us.
              I’ve made my way international a couple times, but I definitely want to continue doing so.
            </p>
          </div>
          <p className="about_me_content">
          </p>
          <p className="about_me_content">
          </p>
        </div>

      </div>
    );
  }
}
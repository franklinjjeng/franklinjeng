import React from 'react';

export default class AboutMe extends React.Component {
  
  render() {
    return (
      <div className="AboutMe">
        <div className="parallax_vancouver">
          <div className="caption">
            <span className="border">SUMMARY</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Summary:</span>
          <p className="about_me_content">
            I'm a full stack software engineer and I've found that this is my passion.
            It's a little cliche to say,
            but I've actually found myself losing sleep over the sheer excitement of trying to figure out what to put on next for this website.
          </p> <br/>
          <p className="about_me_content">
            Software engineering feels like solving puzzles to me.
            Trying to figure out the best algorithm to better optimize a solution or trying to figure out how to manipulate and create components.
            With my enjoyment and puzzles and my desire to perform technical work,
            I have found that software engineer sits right at the cross section of the two.
            The boundless field also constantly offers something new to learn and tackle,
            unlocking endless possibilities allowing me to stay engaged.
          </p>
        </div>

        <div className="parallax_ininOffice2">
          <div className="caption">
            <span className="border">MY HISTORY</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">My History:</span>
          <p className="about_me_content">
            I graduated from the University of California, Irvine as a Computer Engineer.
            Shortly after I found my first job as a VoIP engineer,
            diagnosing and troubleshooting voice quality issues on client environments.
            The natural career path progression brings you to a business oriented role where I became a Technical Account Manager and after two years in that role I found myself growing complacent.
            I would feel like I am passing the buck and just looking for the right technical resource to route issues over to.
            I realized that I lost my feeling of fulfillment that I used to receive when I would be the one solving those issues.
            I decided to take a course through codeacadamy.com to see if coding was where my interest lies.
            I immediately fell back in love with it and knew that this was what I wanted to be doing.
            I decided to quit my job and move back to the bay area to re-learn coding and become a software engineer.
          </p>
        </div>

        <div className="parallax_mtbaldy">
          <div className="caption">
            <span className="border">MY FUTURE</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">My Future:</span>
          <p className="about_me_content">
            Currently, I’m looking for somewhere I can make a meaningful impact while simultaneously grow as an engineer.
            Though I am most comfortable with Javascript,
            I’m confident in my abilities to learn new languages.
          </p>
        </div>


        <div className="parallax_grandCanyon">
          <div className="caption">
            <span className="border">HOBBIES and INTEREST</span>
          </div>
        </div>

        <div className="about_me">
          <span className="about_me_header">Hobbies and Interests:</span>
          <p className="about_me_content">
            <span><span className="about_me_subhead">Puzzles</span>: rock climbing, puzzle boxes, puzzle video games, riddles</span>
            <br/>
            <p>
              I enjoy puzzles of all kinds.
              Ranging from physical activity like rock climbing to determine the correct path and moves to take,
              to puzzles that require a lot of mental thinking like riddles and logic puzzles.
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
          </p>
          <p className="about_me_content">
          </p>
          <p className="about_me_content">
          </p>
        </div>

      </div>
    );
  }
}
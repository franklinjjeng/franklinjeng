import React from 'react';

import Project from './project.jsx';

export default class Projects extends React.Component {
  
  render() {
    var projects = [
      {
        img: '',
        title: 'test title',
        link: 'test link',
        description: 'test description',
        whatIDid: 'things that i did',
        challenges: 'the challenges'
      },
    ];

    return (
      <div className="projects">
        <div className="coming-soon">
          coming soon: list of projects
        </div>
        <Project info={projects[0]} />
      </div>
    );
  }
}



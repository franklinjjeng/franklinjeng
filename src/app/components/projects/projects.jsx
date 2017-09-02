import React from 'react';

import Project from './project.jsx';
// import projData from './projData.json';

export default class Projects extends React.Component {
  
  render() {
    // console.log('projData', projData);

    var projects = [
      {
        img: '/assets/img/previews/twinePreview.png',
        title: 'Twine',
        link: 'http://twinedocs.com',
        description: 'The mission of this project was to create a simple easy to use word processor online that allows for collaboration for larger projects with the power of Git. Git is a great tool, but can be intimidating to use for non-technical users. Twine abstracts away the complexity of it to create an easy user experience.',
        whatIDid: 'things that i did',
        challenges: 'the challenges'
      },
      {
        img: '/assets/img/previews/divvyPreview2.png',
        title: 'Divvy',
        link: 'N/A',
        description: 'Divvy description',
        whatIDid: 'things that i did',
        challenges: 'the challenges'
      },
      {
        img: '/assets/img/previews/tactictoePreview.png',
        title: 'Tactic Toe',
        link: 'N/A',
        description: 'Tactic Toe description',
        whatIDid: 'things that i did',
        challenges: 'the challenges'
      },
    ];

    return (
      <div className="projects">
        <div className="coming-soon">
          coming soon: list of projects
        </div>
        {projects.map((project, i) => (
          <Project key={i} info={project} />))}
      </div>
    );
  }
}



import React from 'react';

import Project from './Project.jsx';
import projects from '../content/project_data';

export default class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        {projects.map((project, i) => <Project key={i} info={project} />)}
      </div>
    );
  }
}

import React from 'react';

export default function Project (props) {
    console.log('props', props);
    return (
      <div className="project">
        <div className="project_img"></div>
        <div className="project_details">
          <span className="project_title">{props.info.title}</span><br/>
          <span className="project_link">{props.info.link}</span>
          <p className="project_description">{props.info.description}</p>
          <p className="project_whatIDid">{props.info.whatIDid}</p>
          <p className="project_challenges">{props.info.challenges}</p>
        </div>
      </div>
    );
}
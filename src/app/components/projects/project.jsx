import React from 'react';

export default function Project (props) {
    // console.log('props', props);

    return (
      <div className="project">
        {props.info.link === 'N/A' ? 
          <div className="project_img_container_nolink">
            <img className="project_img" src={props.info.img} />
          </div> :
          <a className="project_img_container" href={props.info.link}>
            <img className="project_img" src={props.info.img} />
          </a>
        }
        <div className="project_details">

          <span className="project_info">
            <span className="project_name">{props.info.title}</span>
            {props.info.link !== 'N/A' ? <span> - <a href={props.info.link}>{props.info.link}</a></span> : <span></span>}
            <p className="project_blurb">{props.info.blurb}</p>
          </span>

          {/*
          <span className="project_info project_link">
            <span className="project_descriptor">Link: </span>
              {props.info.link === 'N/A' ? <span>{props.info.link}</span> : <a href={props.info.link}>{props.info.link}</a>}
          </span>
          */}
          <span className="project_info project_link">
            <span className="project_descriptor">GitHub: </span>
            <a href={props.info.github}>{props.info.github}</a>
          </span>

          <p className="project_info project_description">
            <span className="project_descriptor">Description: </span>{props.info.description}
          </p>

          <p className="project_info project_contribution">
            <span className="project_descriptor">My Contribution: </span>{props.info.contribution}
          </p>

          {/*
          <p className="project_info project_challenges">
            <span className="project_descriptor">Challenges: </span>{props.info.challenges}
          </p>
          */}

        </div>
      </div>
    );
}
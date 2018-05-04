import React from 'react';

export default function NavButton(props) {
  // console.log('props', props);
  return (
    <div className="nav-button">
      <a onClick={props.onClick} name={props.path}>
        {props.button}
      </a>
    </div>
  );
}

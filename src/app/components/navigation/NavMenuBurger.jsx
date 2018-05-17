import React from 'react';

export default function NavMenuBurger(props) {
  return (
    <div className="nav-hamburger" onClick={props.onClick}>
      <div className="nav-burger-line nav-bar1"></div>
      <div className="nav-burger-line nav-bar2"></div>
      <div className="nav-burger-line nav-bar3"></div>
    </div>
  );
}

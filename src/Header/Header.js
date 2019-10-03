import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';


const header = (props) => {
  return (
      <nav id='wrapper'>
        <a href="/#intro"><li>INTRO</li></a>
        <a href="/#who"><li>WHO</li></a>
        <a href="/#what"><li>WHAT</li></a>
        <a href="/#work"><li>WORK</li></a>
      </nav>
  )
}

export default header;

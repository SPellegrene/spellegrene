import React from 'react';
import './Home.css';


const home = (props) => {


  return (
    <div>
      <div className="bg">
        <h1 className="heroHello fadeIn">HELLO.</h1>
        <h3 className="heroSlogan fadeIn">Welcome to my web dev world.</h3>

        <div className="mountain">
          <div className="mountain-top">
            <div className="mountain-cap-1"></div>
            <div className="mountain-cap-2"></div>
            <div className="mountain-cap-3"></div>
          </div>
        </div>
        <div className="mountain-two">
          <div className="mountain-top">
            <div className="mountain-cap-1"></div>
            <div className="mountain-cap-2"></div>
            <div className="mountain-cap-3"></div>
          </div>
        </div>
         <div className="mountain-three">
          <div className="mountain-top">
            <div className="mountain-cap-1"></div>
            <div className="mountain-cap-2"></div>
            <div className="mountain-cap-3"></div>
          </div>
        </div>
        <div className="cloud"></div>
    </div>
  </div>
  )
}

export default home;

import React from 'react';
import './Contact.css';


const contact = (props) => {
  return (
    <div id="intro">
      <div className="bg">
        <h1 className="heroHello fadeIn">Contact.</h1>
        <div className="socialLinks">
          <a className="github" href="https://github.com/SPellegrene?tab=repositories" alt="github logo" target="_blank" rel="noopener noreferrer"></a>

          <button
            className="email"
            onClick={props.onClick}>
          </button>
          <textarea
              id="copyemail"
              value="pellegrenesam@gmail.com">
          </textarea>

        </div>
        <div id="copysuccess">You copied my email!</div>

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

export default contact;

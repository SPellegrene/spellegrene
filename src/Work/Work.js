import React from 'react';
import './Work.css';


const work = () => {
  return (
    <div className="workCont">
      <h1 className="center blueLt">WORK.</h1>
      <h2 className="center boxWidth">Scroll to see how I spend my days.</h2>
      <div className="projectCont">
        <div className="leftProject">
          <span className="westlaw"></span>
        </div>
        <div className="rightProject">
          <h2>Westlaw Edge</h2>
          <p>Westlaw Edge, the most intelligent legal research service ever.</p>
          <a className="buttonPrimary" href="https://legal.thomsonreuters.com/en/insights/articles/announcing-westlaw-edge" target="_blank">Read more</a>
        </div>
      </div>
      <div className="projectCont osmd">
        <div className="leftProject">
          <span className="OSMDImg"></span>
        </div>
        <div className="rightProject">
          <h2>Open Source MD</h2>
          <p>Transforming the healthcare staffing industry.</p>
          <a className="buttonPrimary" href="http://open-source-md.net/" target="_blank">Go to site</a>
        </div>
      </div>
      <div className="projectCont cws">
        <div className="leftProject">
          <span className="CWSImg"></span>
        </div>
        <div className="rightProject">
          <h2>Clean Waste Systems</h2>
          <p>Eliminating bio-hazardous waste with help from mother nature.</p>
          <a className="buttonPrimary" href="https://www.cleanwastesystems.com/index.html" target="_blank">Go to site</a>
        </div>
      </div>
    </div>
  )
}

export default work;

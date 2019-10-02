import React from 'react';
import './Pie.css';


const pie = () => {
  return (
    <div className="pieCont">
      <div className="CSS">
        <div className="CSS-overlay">
          90%
        </div>
      </div>
      <div className="HTML">
        <div className="HTML-overlay">
          99%
        </div>
      </div>
      <div className="Javascript">
        <div className="Javascript-overlay">
          65%
        </div>
      </div>
      <div className="React">
        <div className="React-overlay">
          50%
        </div>
      </div>
      <div className="Accessibility">
        <div className="Accessibility-overlay">
          75%
        </div>
      </div>
      <div className="RWD">
        <div className="RWD-overlay">
          85%
        </div>
      </div>
    </div>
  )
}

export default pie;

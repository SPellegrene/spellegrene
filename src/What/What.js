import React from 'react';
import './What.css';
import Pie from '../Pie/Pie';



const what = () => {
  return (
    <div id="what" className="pageContainer clear fadeIn">
      <h1 className="center white">WHAT.</h1>
      <h2 className="center boxWidth">I’m no expert, but I’m always challenging myself in new skills.</h2>
      <p className=" desc center boxWidth white">For example, I designed and built this site in React.js.
Here is what I’ve learned over the years and my proficiency levels :</p>
      <div className="skillsCont center boxWidth">
        <Pie />
      </div>
    </div>
  )
}

export default what;

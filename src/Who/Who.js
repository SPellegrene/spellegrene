import React from 'react';
import './Who.css';


const who = () => {
  return (
    <div id="who"className="pageContainer">
      <h1 className="center white">WHO.</h1>
      <h2 className="center boxWidth">Web Developer, CSS Junkie, Music Enthusiast and Mountain Biker.</h2>
      <p className=" desc center boxWidth white">I like to live life to the fullest. It’s that simple.</p>
      <p className=" desc center boxWidth">I have close to 3 years of development experience within a global corporation.
      I’ve helped lead enhancement projects for billion dollar products and have impacted the lives of millions through my work.</p>
      <p className=" desc center boxWidth">I’ve hiked a few mountains and have had my music played at festivals for thousands all over the world.</p>
      <h2 className="center boxWidth white">Who Am I ?</h2>
      <div className="center sketchCont boxWidth">
        <div className="leftSide">
          <h3>Hi, I'm Sam</h3>
          <p className="white">(not actually this tall)</p>
        </div>
        <div className="rightSide"></div>
      </div>
    </div>
  )
}

export default who;

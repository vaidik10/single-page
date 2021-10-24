import React from "react";
import "./Head.css";



const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="main" className="hero__image" />
       <p className="hero__headline"> AN AWARD WINNING MARKETING AGENCY</p>
      <h2 className="hero__headline2"> THAT BELIEVES IN RELATIONSHIP,TRANSPERANCY AND</h2>
      <h2 className="hero__headline3"> TRUST.</h2> 
    
      <h1 className="hero__title">ASGK </h1>
    

      <h2 className="hero__title2">Technology</h2>
      
      
      <button className="button3">CONTACT US</button>
    </div>
  );
};

export default Hero;

import React from "react";
import "./Contentpage.css";


const Content = ({ imageSrc}) => {
  
  return (
    
  
      <>
        
        <div className="main__div">
        <div className="content">
        <h1>HOW WE STAND OUT - WE ARE PROACTIVE EXPERTS 
        </h1>
        <p className="content__para1"> WE PROACTIVELY CONSULT,DESIGN,DEVELOP AND SCALE ROBUST <br></br> WEB,MOBILE AND CUSTOM SOFTWARE,THAT FUEL
        <br></br> INNOVATION AND DELIVER DIGITAL SUCCESS! </p>
        <p className="content__para2"> AT UNIFIED WE BELIEVE THAT EVERY PROJECT IS AN IMPORTANT <br></br>
        MILESTONE IN OUR JOURNEY ,SO WE POSITION OURSELVES AS A <br></br> 
        BOUTIQUE DIGITAL AGENCY,CUSTOM,TAILORING IMPACTFUL DIGITAL <br></br> 
        SOLUTIONS WITH INDUSTRY BEST PRACTICES ACROSS THE BOARD. <br></br>
        FOR FORTUNES 500'S,SMEs,AND START-UPS,AROUND THE CLOSE</p>

        <button className="button4">REQUEST CONSULTATION</button>
        </div>
       
         <img src={imageSrc} alt="building" className="image"/>


        </div>
      </>
    );
  
};

export default Content;

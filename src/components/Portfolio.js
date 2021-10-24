import React from 'react'
import "./Portfolio.css"

function Portfolio({imageSrc}) {
    return (
        <div>
            
            <h1 className="heading">Portfolio That Speak !</h1>
            
            <ul className="menu"><ul>OPENREEL</ul>
            <ul>LARGO</ul>
            <ul>HOUSELAB</ul>
            <ul>OOTA</ul>
            <ul>LONDONRAG</ul></ul>
            <div className="card">
            <section className="about section " id="about">
               
                
                <div className="about__container">
                    <div className="about__img">
                        <img src={imageSrc} alt="portfolio"/>
                    </div>
                    
                    <div className="card__content">
                        <h3 className="about__subtitle">Openreel Inc.</h3>
                        <h2>A patented multi-million Saas video platform</h2>
                        <p className="about__text"> We created a patented video platform that help capture and direct remotely <br></br>
                        This has helped companies reduce production cost,resource and time,Now shoot <br></br>
                        video without even stepping out of your comfort zone
                      </p>   
                      <button className="button">VIEW PORTFOLIO</button>  
                      <button className="button2">CONTACT US</button>  

                    </div>                                   
                </div>
            </section>
                

            </div>
        </div>
    )
}

export default Portfolio;

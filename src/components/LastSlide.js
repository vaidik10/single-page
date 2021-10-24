import React from 'react'
import { Button } from 'antd';
import "./Lastslide.css"
function LastSlide({imageSrc}) {
    return (
        <div>
             <div className="main__card">
            <section className="main section " id="about">
               
                
                <div className="main__container">
                   
                    
                    <div className="main__content">
                        
                        <h1>Like what you see ?</h1>
                        <p className="main__text"> We created a patented video platform that help capture and direct remotely <br></br>
                        This has helped companies reduce production cost,resource and time,Now shoot <br></br>
                        video without even stepping out of your comfort zone
                      </p>   
                      <button className="button5">GET IN TOUCH</button>  
                        <p>Visit us at</p>
                        <p> DN 53,Salt Lake City,Kol-456455</p>

                    </div>
                    <div className="main__img">
                        <img src={imageSrc} alt="portfolio"/>
                    </div>                                   
                </div>
            </section>
                

            </div>
        </div>
    )
}

export default LastSlide;

import React from 'react';
import "../App.css";


function HeroSection({heading1, heading3, text, imageUrl, imgStart, bgClr, headingClr, textClr}) {

    
    return (
        <div id="about" style={{background: bgClr}}>
            <div className="wrapper about display-set" style={{flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                <div className="hero-image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="hero-content">
                    <h3>{heading3}</h3>
                    <h1 style={{color:headingClr}}>{heading1}</h1>
                    <p style={{color:textClr}}>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;

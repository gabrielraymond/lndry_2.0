import React from 'react';
import "../../App.css";
import HeroSection from "../HeroSection";
import {objDataOne} from "../Data";
import PriceSection from '../PriceSection';
import ContactSection from '../ContactSection';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <div id="home">
                <div className="wrapper">
                    <div className="home">
                        <div className="hero-content">
                            <h1>FRESH CLOTHES FRESH LIFE</h1>
                            <p>Don't waste your time washing clothes</p>
                        </div>
                        <div className="hero-image">
                            <img src="images/urban-come-back-later-1 1.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <HeroSection {...objDataOne[0]}/>
            <HeroSection {...objDataOne[1]}/>
            <hr style={{width:"50%", margin:"0 auto"}}/>
            <PriceSection />
            <ContactSection />
        </>
    )
}

export default Home;

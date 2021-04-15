import React from 'react';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import PriceSection from '../PriceSection';
import { objDataOne } from "../Data";

function Pricing() {
    return (
        <div>
            <HeroSection {...objDataOne[2]}  bgClr="#F4D160" imgStart="start" textClr="black" />
            <PriceSection />
            <ContactSection />
        </div>
    )
}

export default Pricing

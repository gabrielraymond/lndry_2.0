import React from 'react';
import ContactSection from '../ContactSection';
import HeroSection from '../HeroSection';
import { objDataOne } from "../Data";

function Contact() {
    return (
        <div>
            <HeroSection {...objDataOne[3]}  bgClr="#F4D160" imgStart="start" textClr="black" />
            <ContactSection />
        </div>
    )
}

export default Contact;

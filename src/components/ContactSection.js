import React from 'react';
import "../App.css";

function ContactSection() {
    return (
        <div id="contact">
            <div className="wrapper">
                <h1>Contact</h1>
                <div className="contact display-set">
                    <div className="content-contact">
                        <div className="location cc">
                            <h2>Location</h2>
                            <p>
                                Jl. RS. Dr. Sam Ratulangl No.12, Kembuan, <br />
                                Tondano Utara, Kabupaten Minahasa, Sulawesi <br />
                                Utara
                            </p>
                        </div>
                        <div className="email cc">
                            <h2>Email</h2>
                            <p>gabrielraymond.grd@gmail.com</p>
                        </div>
                        <div className="medsos cc">
                        <h2>Follow Us</h2>
                            <a href="https://www.instagram.com/gabrielraymond_/"><img src="images/Instagram Icon.svg" alt="" /></a>
                            <a href="https://www.facebook.com/"><img src="images/Facebook Icon.svg" alt="" /></a>
                            <a href="https://twitter.com/?lang=en"><img src="images/Twitter Logo.svg" alt="" /></a>
                            <a href="https://www.linkedin.com/in/gabriel-dimpudus/"><img src="images/LinkedIn Icon (1).svg" alt="" /></a>
                        </div>
                    </div>
                    <form name="contact-form" action="">
                        <input type="text" className="name" name="name" placeholder="Name..." />
                        <input type="email" placeholder="Email..." />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Message..."></textarea>
                        <button  className="submit-btn" type="submit">Submit</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;

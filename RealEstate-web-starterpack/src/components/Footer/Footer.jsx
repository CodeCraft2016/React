import React from "react";
import './Footer.css';

const Footer = ()=>{
    return ( <div>
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">
            <p>Build with 
                <span className="greenText smallText">&hearts;</span> 
                by 
                <a href="https://jellyfish-app-22cef.ondigitalocean.app/resume">
                <span className="code-craft">code<span>Craft&copy;</span></span>
                </a>
               
                </p>
            </div>

        
        </section>
    </div>)
}

export default Footer
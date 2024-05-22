import React from 'react'
import GitIcon from "../assets/github-mark.svg";
import LinkedIcon from "../assets/linkedin.svg";
import './links.css';
export function Links(props) {
    

    return (
        <div className="links">
          <h1>contact me</h1>
          <div className="icons">
          <a href="https://github.com/shehatacs2019102">
          <img src={GitIcon} alt="Your SVG" />
            </a> 
            <a href="https://www.linkedin.com/in/abdelrahman-shehata-516439297/">
            <img src={LinkedIcon} alt="Your SVG" />
            </a> 
          

          </div>
          
        </div>
     
    )
}

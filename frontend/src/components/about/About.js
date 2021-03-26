import React from 'react';
import "./about.css";

const About = () => {
    return (
        <div className="about">
            <h1 id="aboutTitle">About The Big Fact Hunt</h1>
            <p id="aboutText">The Big Fact Hunt was created by 
            <a id="ghLink" href="https://github.com/NickFerra"> Nick, </a> 
            <a id="ghLink" href="https://github.com/JoeFoster-cn">Joe, </a> 
            <a id="ghLink" href="https://github.com/jthomasw88"> Jordan </a> and  
            <a id="ghLink" href="https://github.com/SteIddon"> Ste </a> 
            as the final project of our <a id="codenation" href="https://wearecodenation.com/">Code Nation </a>
            12-week bootcamp.
            </p>
        </div>
    )
}

export default About;
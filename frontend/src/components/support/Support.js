import React from "react";
import "../support/support.css";

const Support = (props) => {
    return (
        <div className="contactForm">
            <h1 id="contactTitle"></h1>
            <input id="name" placeholder="enter name">Name</input>
            <input id="email" placeholder="enter email">Email</input>
            <input id="message" placeholder="message">Message</input>
            <button id="submit" placeholder="Submit">Submit</button>
        </div>
    )
}

export default Support; 
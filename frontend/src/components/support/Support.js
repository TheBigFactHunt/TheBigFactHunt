import React from "react";
import "../support/support.css";

const Support = (props) => {
    return (
        <form className="contactForm">
            <h1 id="contactTitle"></h1>
            <label for="name">Name</label>
            <input name="name" id="name" placeholder="enter name"></input>
            <label for="email">Email</label>
            <input name="email" id="email" placeholder="enter email"></input>
            <label for="message">Message</label>
            <input name="message" id="message" placeholder="message"></input>
            <button id="submit" placeholder="Submit"></button>
        </form>
    )
}

export default Support; 
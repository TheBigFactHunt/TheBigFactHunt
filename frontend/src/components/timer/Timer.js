import React from 'react'
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SubmitScore from '../quiz/submitScore';
import SocialPost from "../social_feed/social_posts";
import "./timer.css";
import Question from "../quiz/Question";

function Timer(props) {
    const [timeCounter, setTime] = React.useState(10);
    const timeUp = (props) => {
        if (timeCounter === 0)
            Swal.fire("Times up!");
        }

    
    React.useEffect(() => {
        const timer =
            timeCounter > 0 && setInterval(() => setTime(timeCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [timeCounter]);


    return (
        <div className="timer">
            <div id="quizTimer">Time Left: {timeCounter}</div>
            {timeUp(timeCounter)}
            {timeCounter == 0 ? <SubmitScore/> : null}
            {timeCounter == 0 ? <SocialPost/> : null}
        </div>
    );
}

export default Timer;
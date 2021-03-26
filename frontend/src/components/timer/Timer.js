import React from 'react'
import { useState, useEffect } from 'react';
import "./timer.css";

function Timer() {
    const [counter, setCounter] = React.useState(60);

    
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const timeUp = () => {
        if (counter === 0)
            return ("Time's Up!");    
        }

    return (
        <div className="timer">
            <div id="quizTimer">Time Left: {counter}</div>
            {timeUp}
        </div>
    );
}

export default Timer;
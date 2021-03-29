import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import "./timer.css";

function Timer() {
    const [counter, setCounter] = useState(60);
    const timeUp = () => {
        if (counter === 0)
            Swal.fire("Times up!");
        }

    
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);


    return (
        <div className="timer">
            <div id="quizTimer">Time Left: {counter}</div>
            {timeUp(counter)}
        </div>
    );
}

export default Timer;
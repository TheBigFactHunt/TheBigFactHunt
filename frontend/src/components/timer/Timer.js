import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import SubmitScore from '../quiz/submitScore';
import SharePost from "../social_feed/share_post";
import "./timer.css";
import Question from "../quiz/Question";


function Timer(props) {
    // const [timeCounter, setTime] = React.useState(10);
    const timeUp = (props) => {
        if (props.timeCounter === 0)

            Swal.fire("Times up!");
    }
    
    useEffect(() => {

        const timer =
            props.timeCounter > 0 && setInterval(() => props.setTime(props.timeCounter - 1), 1000);
        return () => clearInterval(timer);
    }, [props.timeCounter]);


    return (
        <div className="timer">
            <div id="quizTimer">Time Left: {props.timeCounter}</div>
            {timeUp(props.timeCounter)}
            {props.timeCounter == 0 ? <SubmitScore/> : null}
            {props.timeCounter == 0 ? <SharePost/> : null}
        </div>
    );
}

export default Timer;
import React from "react";
import "../quiz/easyquiz.css";

const EasyQuiz = (props) => {

    return (
        <div className="quizListContainer">
            <a id="quiz1" href="/quiz" >General Knowledge</a>
            <a id="quiz2" href="/" >Animals</a>
            <a id="quiz3" href="/" >Celebrities</a>
        </div>
    )
}

export default EasyQuiz;
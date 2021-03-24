import React from "react";
import "../quiz/proquiz.css";

const ProQuiz = (props) => {

    return (
        <div className="quizListContainer">
            <a id="quiz1" href="/" >History</a>
            <a id="quiz2" href="/" >Sports</a>
            <a id="quiz3" href="/" >Geography</a>
        </div>
    )
}

export default ProQuiz;
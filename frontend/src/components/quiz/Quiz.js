import React, { useState, useEffect } from "react";
import "./quiz.css";

const Quiz = (props) => {

    const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean`);
      const data = await response.json();
      setQuiz(data);
    };
    getter();
  }, []);

    return (
        <div className="quizWrapper">
                {quiz}
            <div id="quizInfo">
                <p>CATEGORY</p>
                <p>TYPE</p>
                <p>DIFFICULTY</p>
            </div>

            <div id="quizQuestion">
                <p>TEST</p>
            </div>

            <div id="quizAnswer">
                <p>TEST</p>
            </div>

            <div id="selectAnswer">
                <a id="answerTrue">TRUE</a>
                <a id="answerFalse">FALSE</a>
            </div>
            
        </div>
    )
}

export default Quiz;
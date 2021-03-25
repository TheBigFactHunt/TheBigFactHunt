import React, { useState, useEffect } from "react";
import Question from "./Question";
import "./quiz.css";

const Quiz = (props) => {

    const [questions, setQuestions] = useState([]);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean`);
      const data = await response.json();
      setQuestions(data.results);
    };
    getter();
  }, []);

    return (
        <div className="quizWrapper">
                <h2 id="scoreCounter">Score: {score}</h2>
                {questions.length>0 ? <Question question={questions[counter]} score={score} setScore={setScore} counter={counter} setCounter={setCounter}/> : null }  
        </div>
    )
}
export default Quiz;
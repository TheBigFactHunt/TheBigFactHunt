import React, { useState, useEffect } from "react";
import Question from "./Question";
import "./quiz.css";
import SubmitScore from "./submitScore";
import Logo from "../../images/logos/logo-small-yellow+purple.png";
import Timer from "../timer/Timer";

const ExpertQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=boolean`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    getter();
  }, []);

  return (
    <div className="quizWrapper">
      <h3 className="classlogo">
        <img
          id="logoImg"
          src={Logo}
          className="animate__animated animate__hinge"
          alt="quizlogo"
        />
      </h3>
      <h2 id="scoreCounter">Score: {score}</h2>
      {counter < 10 ? (<Timer />) : null}
      {questions.length > 0 && counter < 10 ? (
        <Question
          question={questions[counter]}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      <br></br>
      {counter >= 10 ? <SubmitScore score={score} /> : null}
    </div>
  );
};
export default ExpertQuiz;

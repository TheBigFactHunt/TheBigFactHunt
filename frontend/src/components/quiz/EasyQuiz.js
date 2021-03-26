import React, { useState, useEffect } from "react";
import Question from "./Question";
import "./quiz.css";
import Logo from "../../images/logos/logo-small-yellow+purple.png";

const EasyQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    getter();
  }, []);
  // if (counter >= 10) {
  //     // display SCORE, post SCORE to back end, display leaderboard (add user score to leaderboard) & then render a new quiz or take back to Home
  // } else {
  return (
    <div className="quizWrapper">
      <h3 className="classlogo">
        <img
          id="logoImg"
          src={Logo}
          className="animate__animated animate__rotateIn"
          alt="quizlogo"
        />
      </h3>

      <h2 id="scoreCounter">Score: {score}</h2>
      {questions.length > 0 && counter < 10 ? (
        <Question
          question={questions[counter]}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
    </div>
  );
};
// }  / for lines 18-20
export default EasyQuiz;

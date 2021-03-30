import React, { useState, useEffect } from "react";
import SubmitScore from "./submitScore";
import ProQuestion from "./ProQuestion";
import "./proquiz.css";
import Logo from "../../images/logos/logo-small-yellow+purple.png";
import Timer from "../timer/Timer";
import SharePost from "../social_feed/share_post";

const ProQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [timeCounter, setTime] = useState(60);
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=25&category=9&difficulty=medium&type=boolean`
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
          className="animate__animated animate__jackInTheBox"
          alt="prologo"
        />
      </h3>
      <h2 id="scoreCounter">Score: {score} / 75</h2>
      {counter < 25 ? <Timer timeCounter={timeCounter} setTime={setTime}/> : null}
      {questions.length > 0 && counter < 25 && timeCounter > 0 ? (
        <ProQuestion
          question={questions[counter]}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      <br></br>
      {counter >= 25 ? <SubmitScore score={score} /> : null}{" "}
      <br></br>
      {counter >= 25 ? (<SharePost score={score} name={props.first_name} />) : null}
    </div>
  );
};
export default ProQuiz;

import React, { useState, useEffect } from "react";
import Question from "./Question";
import "./quiz.css";
import "./easyquiz.css";
import Logo from "../../images/logos/logo-small-yellow+purple.png";
import SocialPost from "../social_feed/social_posts";
import SubmitScore from "./submitScore";
import Timer from "../timer/Timer";

const EasyQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const difficulty = "easy";
  useEffect(() => {
    const getter = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=25&category=9&difficulty=easy&type=boolean`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    getter();
  }, []);

  return (
    <div className="quizWrapper">
      <h3 className="easylogo">
        <img
          id="logoImg"
          src={Logo}
          className="animate__animated animate__rotateIn"
          alt="easylogo"
        />
      </h3>

      <h2 id="scoreCounter">
        Score: {score} / 25{" "}
      </h2>

      {counter < 25 ? <Timer /> : null}

      {questions.length > 0 && counter < 25 && !props.timeCounter > 0 ? (
        <Question
          question={questions[counter]}
          score={score}
          setScore={setScore}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      <br></br>
      {counter >= 25 ? <SubmitScore score={score} /> : null}
      <br></br>
      {counter >= 25 ? (<SocialPost score={score} name={props.first_name} />) : null}
      {/* {props.timeCounter == 0 ? questions.display = "none" : null} */}
    </div>
  );
};

export default EasyQuiz;

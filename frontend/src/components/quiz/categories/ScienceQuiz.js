import React, { useState, useEffect } from "react";
import Question from "../Question";
import "../quiz.css";
import Logo from "../../../images/logos/logo-small-yellow+purple.png";
import SocialPost from "../../social_feed/social_posts";
import SubmitScore from "../submitScore";
import Timer from "../../timer/Timer";

const ScienceQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const difficulty = "easy";
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
      <h3 className="easylogo">
        <img
          id="logoImg"
          src={Logo}
          className="animate__animated animate__rotateIn"
          alt="easylogo"
        />
      </h3>

      <h2 id="scoreCounter">
        Score: {score} / 10{" "}
      </h2>

      {counter < 10 ? <Timer /> : null}

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
      <br></br>
      {counter >= 10 ? (
        <SocialPost score={score} name={props.first_name} />
      ) : null}
    </div>
  );
};

export default ScienceQuiz;
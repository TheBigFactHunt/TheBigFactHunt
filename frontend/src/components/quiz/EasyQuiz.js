import React, { useState, useEffect } from "react";
import Question from "./Question";
import "./quiz.css";
import "./easyquiz.css";
import Logo from "../../images/logos/logo-small-yellow+purple.png";
import SharePost from "../social_feed/share_post";
import SubmitScore from "./submitScore";
import Timer from "../timer/Timer";
import Swal from 'sweetalert2';


const EasyQuiz = (props) => {
  const [questions, setQuestions] = useState([]);
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [timeCounter, setTime] = useState(60);
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

      {counter < 25 ? <Timer timeCounter={timeCounter} setTime={setTime} /> : null}

      {questions.length > 0 && counter < 25 && timeCounter > 0 ? (
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
      {counter >= 25 ? (<SharePost score={score} name={props.first_name} />) : null}
      {score === 25 ? Swal.fire({
    title: 'Perfect Score!',
    text: 'You got every question correct, well done! Enjoy the photo above',
    imageUrl: 'https://i.imgur.com/XodJIMn.jpg',
    imageWidth: 532,
    imageHeight: 698,
    imageAlt: 'Custom image',
})
: null}
    </div>
  );
};

export default EasyQuiz;

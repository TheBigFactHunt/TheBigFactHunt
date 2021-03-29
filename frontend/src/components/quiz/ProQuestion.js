import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const ProQuestion = (props) => {
  return (
    <div class Name="quizQuestions">
      <p className="pQuestion">{props.question.question}</p>
      <button
        className="trueButton"
        id="answerButton"
        onClick={() => {
          if (props.question.correct_answer == "True") {
            props.setScore(props.score + 3);
            Swal.fire("Correct!");
            props.setCounter(props.counter + 1);
          } else {
            props.setCounter(props.counter + 1);
            Swal.fire("Sorry, wrong answer");
          }
          if (props.question.correct_answer == "True") {
            props.setScore(props.score + 3);
          }
          props.setCounter(props.counter + 1);
        }}
      ></button>
      <button
        className="falseButton"
        id="answerButton"
        onClick={() => {
          if (props.question.correct_answer == "False") {
            props.setScore(props.score + 3);
            Swal.fire("Correct!");
            props.setCounter(props.counter + 1);
          } else {
            props.setCounter(props.counter + 1);
          }
          if (props.question.correct_answer == "False") {
            props.setScore(props.score + 3);
          }
          props.setCounter(props.counter + 1);
        }}
      ></button>
    </div>
  );
};
export default ProQuestion;
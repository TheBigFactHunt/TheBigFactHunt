import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Question = (props) => {
  return (
    <div class Name="quizQuestions">
      <p className="pQuestion">{props.question.question}</p>
      <button
        className="trueButton"
        id="answerButton"
        onClick={() => {
          if (props.question.correct_answer == "True") {
            props.setScore(props.score + 1);
            Swal.fire("Correct!");
            props.setCounter(props.counter + 1);
          } else {
            props.setCounter(props.counter + 1);
            Swal.fire("Sorry, wrong answer");
          }
        }}
      ></button>
      <button
        className="falseButton"
        id="answerButton"
        onClick={() => {
          if (props.question.correct_answer == "False") {
            props.setScore(props.score + 1);
            Swal.fire("Correct!");
            props.setCounter(props.counter + 1);
          } else {
            props.setCounter(props.counter + 1);
            Swal.fire("Sorry, wrong answer");
          }
        }}
      ></button>
    </div>
  );
};
export default Question;

import React, { useState, useEffect } from "react";

const Question = (props) => {
  return (
    <div class Name="quizQuestions">
      <p>{props.question.question}</p>
      <button
        id="answerButton"
        onClick={() => {
          if(props.question.correct_answer == "True"){
              props.setScore(props.score + 1)
          }
          props.setCounter(props.counter+1)

        }}
      >True
      </button>
      <button
        id="answerButton"
        onClick={() => {
          if(props.question.correct_answer == "False"){
              (props.setScore(props.score + 1))
          }
          props.setCounter(props.counter+1)
        }}
      >
        False
      </button>
    </div>
  );
};
export default Question;

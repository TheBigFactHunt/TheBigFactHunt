import React, { useState, useEffect } from "react";

const Question = (props) => {
  //   const answerTrue = (props) => {
  //     props.question.correct_answer ? props.setCounter(props.counter +1) : props.setCounter(props.counter +2)
  //     // if (props.question.correct_answer == "True") {
  //     //   props.setCounter(props.counter + 1);
  //     // }
  //     // elseif()
  //   };
  return (
    <div class Name="quizQuestions">
      <p>{props.question.question}</p>
      <button
        id="answerButton"
        onClick={() => {
          // if(props.question.correct_answer == "True"){
          //     props.setCounter(props.counter+1)
          // }
        props.question.correct_answer
            ? props.setCounter(props.counter + 1)
        : props.question.incorrect_answer 
            ? props.setCounter(props.counter + 2)
        }}
      >
        True
      </button>
      <button
        id="answerButton"
        onClick={() => {
          if(props.question.incorrect_answer == "True"){
              props.setCounter(props.counter+1)
          }
        }}
      >
        False
      </button>
    </div>
  );
};
export default Question;

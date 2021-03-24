import React, { useState, useEffect } from "react";

const Question = (props) => {
    return (
        <div class Name="quizQuestions">
            <p>{props.question.question}</p>
            <button id="answerButton" onClick={ () => {props.setCounter(props.counter+1)} }>True</button>
            <button id="answerButton" onClick={ () => {props.setCounter(props.counter+1)} }>False</button>
        </div>
        
    )
}

export default Question;
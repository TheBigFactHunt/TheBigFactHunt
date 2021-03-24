import React, { useState, useEffect } from "react";
import "./quiz.css";

const Quiz = () => {

    return (
        <div className="quizWrapper">
            
            <div id="quizInfo">
                <p>CATEGORY</p>
                <p>TYPE</p>
                <p>DIFFICULTY</p>
            </div>

            <div id="quizQuestion">
                <p>TEST</p>
            </div>

            <div id="quizAnswer">
                <p>TEST</p>
            </div>

            <div id="selectAnswer">
                <a id="answerTrue">TRUE</a>
                <a id="answerFalse">FALSE</a>
            </div>
            
        </div>
    )
}

export default Quiz;
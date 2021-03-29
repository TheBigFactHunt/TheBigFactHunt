import React, { useState } from "react";
import axios from "axios";
import { SCORES_API_URL } from "../../utils/constants";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./submitScore.css";

const SubmitScore = (props) => {
  const postScore = async () => {
    const data = {
      user_id: localStorage.getItem("userId"),
      user_score: props.score,
      date: new Date(),
      first_name: localStorage.getItem("first_name")
    };
    try {
      const response = await axios.post(`${SCORES_API_URL}`, data);
      const resData = await response.data;
      console.log(resData);
      Swal.fire(
        "Score submitted successfully, high scores are displayed on the leaderboard"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parentDiv">
      <h1 className="submitTextBox">
        {" "}
        Press the button below to submit your scores!{" "}
      </h1>
      <h3>High scores are displayed on the Home Page </h3>
      <Button
        onClick={postScore}
        className="nextButton"
        variant="primary"
        type="submit"
      >
        Submit Score
      </Button>
    </div>
  );
};
export default SubmitScore;

import React, { useState } from "react";
import axios from "axios";
import { HIGHSCORE_API_URL, SCORES_API_URL } from "../../utils/constants";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./submitScore.css";

const SubmitScore = (props) => {
  const postScore = async () => {
    const highscoredata = {
      user_id: localStorage.getItem("userId"),
      user_score: props.score,
      first_name: localStorage.getItem("first_name")
    }
    try {
      const highscoreResponse = await axios.post(`${HIGHSCORE_API_URL}`, highscoredata)
      const highscoreresData = await highscoreResponse.data;
      console.log(highscoreresData)
      Swal.fire(
        "Score submitted successfully, high scores are displayed on the leaderboard"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parentDiv">

      <Button
        id="submitButton"
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

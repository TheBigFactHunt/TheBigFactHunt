import React, { useState } from "react";
import axios from "axios";
import { HIGHSCORE_API_URL, SCORES_API_URL } from "../../utils/constants";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import "./button.css";

const SharePost = (props) => {
  const postPlayer = async () => {
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
        "Post shared successfully"
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="parentDiv">
      <Button
        id="shareButton"
        onClick={postPlayer}
        className="nextButton"
        variant="primary"
        type="submit"
      >
        Share
      </Button>
    </div>
  );
};
export default SharePost;

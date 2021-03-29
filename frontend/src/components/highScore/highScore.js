import "./highScore.css";
import React, { useState, useEffect } from "react";
import Dummy_highScore from "./dummy_highScore";
import { HIGHSCORE_API_URL } from "../../utils/constants";

const HighScore = (props) => {
  const [scoreList, setScoreList] = useState([]);

  useEffect(() => {
    const userScore = async () => {
      const response = await fetch(HIGHSCORE_API_URL);
      const data = await response.json();
      console.log(data);
      setScoreList(data.scores);
      console.log(data.scores);
    };
    userScore();
  }, []);

  return (
    <div className="highScore_container">
      <Dummy_highScore posts={scoreList} />
    </div>
  );
};

export default HighScore;

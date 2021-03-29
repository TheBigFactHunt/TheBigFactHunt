import "./social_feed.css";
import Dummy_feed from "./dummy_social";
import { BASE_API_URL, SCORES_API_URL } from "../../utils/constants";
import { useState, useEffect } from "react";

const Social_feed = () => {
  const [postList, setPostList] = useState([]);
  // const [userPostList, setUserPostList] = useState([]);

  useEffect(() => {
    const userScore = async () => {
      const response = await fetch(SCORES_API_URL);
      const data = await response.json();
      console.log(data);
      setPostList(data.scores);
      console.log(data.scores)
    };
    userScore();
  }, []);

  return (
    <div className="social_feed_container">
      <Dummy_feed posts={postList} />
    </div>
  );
};

export default Social_feed;

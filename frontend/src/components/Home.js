import React from "react";
import Logo from "../images/logos/logo-small-yellow+purple.png";
import Social_feed from "../components/social_feed/social_feed";
import HighScore from "../components/highScore/highScore";
import "./home.css";
const Home = (props) => {
  console.log(props);
  return (
    <div className="homeContainer">
      <div className="logoContainer">
        <img
          id="logoImg"
          src={Logo}
          className="animate__animated animate__flip"
          alt="logo1"
        />
      </div>
      <div className="individual_components">
        <Social_feed />
        <HighScore user={props.user} />
      </div>
    </div>
  );
};
export default Home;

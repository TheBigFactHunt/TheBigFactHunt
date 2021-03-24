import React from "react";
import Logo from "../images/logos/logo-small-yellow+purple.png";
import "./home.css";

const Home = (props) => {
  console.log(props);
  return (
    <div className="homeContainer">
      <div className="loggedIn">
        <h3 id="loggedInText">Logged in as</h3>{" "}
        <p id="loggedInInfo">
          {props.user.first_name} {props.user.last_name}{" "}
        </p>
      </div>
      {/* <h1 id="welcomeText">The Big Fact Hunt</h1> */}
      <div className="logoContainer">
        <img id="logoImg" src={Logo} alt="Logo image" />
      </div>
    </div>
  );
};
export default Home;

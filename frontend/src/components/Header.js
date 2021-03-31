import React from "react";
import Progress from "./Progress";
import "animate.css";

const Header = () => {
  let isRegistered = !localStorage.getItem("userId")
    if (isRegistered) {
      return (
        <div>
          <h4 className="animate__animated animate__backInDown"></h4>
          {localStorage.getItem("first_name") ? null : <Progress />}
        </div>
      )} else {
        return (
          <div></div>
)}};

export default Header;

import React from "react";
import Progress from "./Progress";
import "animate.css";

const Header = () => (
  <div>
    <h4 id="registerImage" className="animate__animated animate__backInDown">
      {/* Register now for access to our Quiz! */}
    </h4>
    {localStorage.getItem("first_name") ? null : <Progress />}
  </div>
);

export default Header;

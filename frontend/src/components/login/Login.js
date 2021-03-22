import React from 'react'
import "./login.css";

const Login = () => {
    return (
        <div className="loginBox">
            <h3 id="emailBar">Email&nbsp;<input className="eBar" type="text" placeholder="Email..."></input></h3>
            <h3 id="passBar">Password&nbsp;<input className="pBar" type="password" placeholder="Password"></input></h3>
            <a className="sBtn">Sign In</a>&nbsp;
            <a className="signUpBtn" href="/signup">Sign Up</a>&nbsp;
        </div>
    )
}

export default Login;
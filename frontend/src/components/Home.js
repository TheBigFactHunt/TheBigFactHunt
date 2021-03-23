import React from 'react';


const Home = (props) => {
    console.log(props)
    return(
        <div className="homeContainer">
            <h1 id="welcomeText">The Big Fact Hunt</h1>
            <h3>Welcome,{props.user.first_name} {props.user.last_name} </h3>
            <p id="infoText" align="center">Test your knowledge and hunt those facts</p>
        </div>
    )
}
export default Home;
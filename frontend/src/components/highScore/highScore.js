import "./highScore.css";
import React, {useState} from 'react';
import Dummy_highScore from "./dummy_highScore";

const Social_feed = (props) => {
    const [scoreList, setScoreList] = useState([
        {
            textUser: props.user.first_name,
            score: 21000,
        },
        {
            textUser: props.user.last_name,
            score: 5000,
        },
        {
            textUser: "user 3",
            score: 27000,
        },
        {
            textUser: "user 4",
            score: 36000,
        },
        {
            textUser: "user 5",
            score: 600,
        },
        {
            textUser: "user 6",
            score: 1000000,
        },
        {
            textUser: "user 7",
            score: 1200,
        },
    ])


    return(
        //this will then pass postList from the usestate into posts which comes from dummy_social
        <div className="highScore_container">
            <Dummy_highScore posts = {scoreList} />
        </div>

    )
}

export default Social_feed;
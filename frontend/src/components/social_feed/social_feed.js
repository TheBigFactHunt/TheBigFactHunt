import "./social_feed.css";
import React, {useState} from 'react';
import Dummy_feed from "./dummy_social";

const Social_feed = () => {

    const [postList, setPostList] = useState([
        {
            textTitle: "Test1",
            textBody: "Body test1",
        },
        {
            textTitle: "Test2",
            textBody: "Body test2",
        }
    ])


    return(
        <div className="social_feed_container">
            <Dummy_feed posts = {postList} />
        </div>

    )
}

export default Social_feed;
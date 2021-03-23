import "./social_feed.css";
import React, {useState} from 'react';
import Dummy_feed from "./dummy_social";

const Social_feed = () => {
// this will create the information for each post as an object {}
    const [postList, setPostList] = useState([
        // each object will be created here
        {
            textTitle: "Test1",
            textBody: "Body test1",
        },
        {
            textTitle: "Test2",
            textBody: "Body test2",
        },
        {
            textTitle: "test3"
        }
    ])


    return(
        //this will then pass postList from the usestate into posts which comes from dummy_social
        <div className="social_feed_container">
            <Dummy_feed posts = {postList} />
        </div>

    )
}

export default Social_feed;
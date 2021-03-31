import React, { useState } from 'react';
import avatar1 from "../social_feed/avatar1.png"
import avatar2 from "../social_feed/avatar2.png"
import avatar3 from "../social_feed/avatar3.png"
import avatar4 from "../social_feed/avatar4.png"
import avatar5 from "../social_feed/avatar5.png"
import avatar6 from "../social_feed/avatar6.png"
import avatar7 from "../social_feed/avatar7.png"
import avatar8 from "../social_feed/avatar8.png"
import avatar9 from "../social_feed/avatar9.png"


let avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9
]

const SocialPost = (props) => {
  let rollResult = Math.floor(Math.random() * 9);
  let avatarPic = avatars[rollResult]
  return (
      <div className="post_box">
        <p className="post_avatar"> <img src={avatarPic} width="40" height="40" alt="image"/> {props.userName}   scored {props.userScore} on the Easy Quiz!</p>
        {/* <p className="post_top">{props.userName}   scored {props.userScore} on the Easy Quiz!</p> */}
        {/* <p className="post_main">scored: {props.userScore}</p> */}
      </div>
  );
}
export default SocialPost;

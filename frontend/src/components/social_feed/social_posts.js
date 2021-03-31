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
import avatar10 from "../social_feed/avatar10.png"
import avatar11 from "../social_feed/avatar11.png"
import avatar12 from "../social_feed/avatar12.png"
import avatar13 from "../social_feed/avatar13.png"
import avatar14 from "../social_feed/avatar14.png"
import avatar15 from "../social_feed/avatar15.png"
import avatar16 from "../social_feed/avatar16.png"
import avatar17 from "../social_feed/avatar17.png"
import avatar18 from "../social_feed/avatar18.png"
import avatar19 from "../social_feed/avatar19.png"
import avatar20 from "../social_feed/avatar20.png"
import avatar21 from "../social_feed/avatar21.png"


let avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
  avatar21,
]

const SocialPost = (props) => {
  let rollResult = Math.floor(Math.random() * 21);
  let avatarPic = avatars[rollResult]
  return (
      <div className="post_box">
        <p className="post_avatar"> <img src={avatarPic} width="40" height="40" alt="image"/> {props.userName}   scored {props.userScore} on the {props.difficulty} quiz!</p>
        {/* <p className="post_top">{props.userName}   scored {props.userScore} on the Easy Quiz!</p> */}
        {/* <p className="post_main">scored: {props.userScore}</p> */}
      </div>
  );
}
export default SocialPost;

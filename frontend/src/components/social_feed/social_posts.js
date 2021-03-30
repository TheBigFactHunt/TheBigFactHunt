import React, { useState } from 'react';

const SocialPost = (props) => {
  let rollResult = Math.floor(Math.random() * 9) + 1;
  let avatarPic = `/avatar${rollResult}.png`
  return (
      <div className="post_box">
        <p className="post_avatar"> {<img src={avatarPic} width="80" height="80" alt="image"/>}
        <p className="post_top">{props.userName}   scored {props.userScore} on the Easy Quiz!</p>
        {/* <p className="post_main">scored: {props.userScore}</p> */}
        </p>
      </div>
  );
}
export default SocialPost;

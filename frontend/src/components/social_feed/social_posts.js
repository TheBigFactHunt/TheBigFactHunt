import React, { useState } from 'react';

const SocialPost = (props) => {
  return (
    //here is where the layout of the posts is created passing in the object keys with props.
      <div className="post_box">
        <p id="post_top">user: {props.userName}</p>
        <p id="post_main">score: {props.userScore}</p>
      </div>
  );
}
export default SocialPost;

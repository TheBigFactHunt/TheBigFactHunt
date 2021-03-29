import React, { useState } from 'react';

const SocialPost = (props) => {
  return (
    //here is where the layout of the posts is created passing in the object keys with props.
      <div className="post_box">
        <h3 className="post_top">user: {props.userName}</h3>
        <div className="post_main">score: {props.userScore}</div>
        
      </div>
  );
}
export default SocialPost;

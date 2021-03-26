import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const SocialPost = (props) => {
  const onClick = () => {
      const data = {name:localStorage.getItem("first_name"), user_score:props.score}
      try {
          console.log(data)
          Swal.fire("Your score is now posted in the Social Feed on the Home Page")
      } catch (error) {
        console.log(error)
      }
    }

  return (
        <div className="post_box">
          <h3> Share your score on the social feed! </h3>
              <Button onClick={onClick} className="nextButton" variant="primary" type="submit" >
                    Share your Score
            </Button>
      </div>
  );
}
export default SocialPost;

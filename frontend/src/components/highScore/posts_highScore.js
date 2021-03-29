const Post = (props) => {
    return (
        <div className="highScore_box">
          <h3 className="highScore_top">{props.userName} : {props.userScore}</h3>
        </div>
    );
  };
  
  export default Post;
  
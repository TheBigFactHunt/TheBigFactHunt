const Post = (props) => {
    return (
        <div className="highScore_box">
          <h3 className="highScore_top">{props.textUser} : {props.score}</h3>
        </div>
    );
  };
  
  export default Post;
  
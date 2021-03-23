const Post = (props) => {
  return (
    //here is where the layout of the posts is created passing in the object keys with props.
      <div className="post_box">
        <h3 className="post_top">{props.textTitle}</h3>
        <div className="post_main">{props.textBody}</div>
      </div>
  );
};

export default Post;

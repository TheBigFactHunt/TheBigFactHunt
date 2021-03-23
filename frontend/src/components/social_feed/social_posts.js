const Post = (props) => {
    return(
        //here is where the layout of the posts is created passing in the object keys with props.
        <div className="post_box">
            <div className="post_top">
                {props.textTitle}
            </div>
            <div className="post_main">
                {props.textBody}
            </div>
        </div>
    )
}

export default Post;

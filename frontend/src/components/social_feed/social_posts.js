const Post = (props) => {
    return(
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

import Post from "./social_posts";

const Dummy_feed = (props) => {

    const posts = props.posts.map((post) => {
        return (
          <Post
            textTitle={post.textTitle}
            textBody={post.textBody}
          />
        );
      });
    

    return(
        <div className="social_feed_wrapper">
            {posts}
        </div>
    )
}
export default Dummy_feed;
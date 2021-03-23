import Post from "./social_posts";

const Dummy_feed = (props) => {
//this maps over the postlist from social_feed
    const posts = props.posts.map((post) => {
        return (
            //as post is passed in above need to then give a name to each of the object keys
          <Post
            textTitle={post.textTitle}
            textBody={post.textBody}
          />
        );
      });
    

    return(
        //this will then create posts
        <div className="social_feed_wrapper">
            {posts}
        </div>
    )
}
export default Dummy_feed;
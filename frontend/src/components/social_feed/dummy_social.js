import Post from "./social_posts";
import insta from "./insta.png";

const Dummy_feed = (props) => {
  //this maps over the postlist from social_feed
  const posts = props.posts.map((post) => {
    return (
      //as post is passed in above need to then give a name to each of the object keys which is passed into Post in social_posts
      <Post textTitle={post.textTitle} textBody={post.textBody} />
    );
  });

  return (
    //this will then create posts
    <div className="social_feed_wrapper">
      <h3 className="post_head">
        Instagram <img className="instaImg" src={insta} alt="Instagram logo" />
      </h3>
      {posts}
    </div>
  );
};
export default Dummy_feed;

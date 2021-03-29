import Post from "./social_posts";

const Dummy_feed = (props) => {
  const posts = props.posts.map((post, index) => {
    console.log(post);
    return <Post key={index} userScore={post.user_score} userName={post.first_name}/>;
  });

  return (
    <div className="social_feed_wrapper">
      <h3 className="post_head">Social Feed</h3>
      {posts}
    </div>
  );
};
export default Dummy_feed;

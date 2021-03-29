import Post from "./posts_highScore";
import highImg from "./highscore.png";

const Dummy_highScore = (props) => {
  const posts = props.posts.map((post, index) => {
    return <Post key={index} userScore={post.user_score} userName={post.first_name} />;
  });

  return (
    <div className="highScore_wrapper">
      <img className="highImg" src={highImg} alt="High score image" />
      {posts}
    </div>
  );
};
export default Dummy_highScore;

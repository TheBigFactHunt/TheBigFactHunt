import Post from "./posts_highScore";
import highImg from "./highscore.png";

const Dummy_highScore = (props) => {
    const posts = props.posts.map((post) => {
        return (
          <Post
            textUser={post.textUser}
            score={post.score}
          />
        );
      });
    

    return(
        <div className="highScore_wrapper">
            <img className="highImg" src={highImg} alt="High score image" />
            {posts}
        </div>
    )
}
export default Dummy_highScore;
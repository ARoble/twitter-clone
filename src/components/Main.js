import AddTweet from "./AddTweet";
import FeedHead from "./FeedHead";
import Feed from "./Feed";
import { FaSpinner } from "react-icons/fa";

const Main = ({ tweets, onAdd, onLike, onComment }) => {
  return (
    <div className="main">
      <FeedHead />
      <AddTweet onAdd={onAdd} />
      <div className="division"></div>
      <div className="tweet-loading">
        <div>
          <FaSpinner className="spinner" />
        </div>
      </div>
      {tweets.map((tweet) => (
        <a
          href={`/tweet/${tweet._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Feed
            key={tweet._id}
            tweet={tweet}
            onLike={onLike}
            onComment={onComment}
          />
        </a>
      ))}
      <h1></h1>
    </div>
  );
};

export default Main;

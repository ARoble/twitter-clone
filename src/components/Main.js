import AddTweet from "./AddTweet";
import FeedHead from "./FeedHead";
import Feed from "./Feed";
import { FaSpinner } from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Main = ({ tweets, onAdd, onLike, onComment }) => {
  return (
    <div className="main">
      <FeedHead title={"Home"} />
      <AddTweet onAdd={onAdd} />
      <div className="division"></div>
      <div className="tweet-loading">
        <div>
          <FaSpinner className="spinner" />
        </div>
      </div>
      {tweets.map((tweet) => (
        <Link
          to={`/tweet/${tweet._id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Feed
            key={tweet._id}
            tweet={tweet}
            onLike={onLike}
            onComment={onComment}
          />
        </Link>
      ))}
      <h1></h1>
    </div>
  );
};

export default Main;

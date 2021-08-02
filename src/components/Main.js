import AddTweet from "./tweet/AddTweet";
import FeedHead from "./partials/FeedHead";
import Feed from "./tweet/Feed";
import Loading from "./partials/Loading";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Main = ({ tweets, onAdd, onLike, onComment, loading }) => {
  return (
    <div className="main">
      <FeedHead title={"Home"} />
      <AddTweet onAdd={onAdd} />
      <div className="division"></div>
      {loading ? <Loading /> : ""}

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
    </div>
  );
};

export default Main;

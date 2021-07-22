import AddTweet from "./AddTweet";
import FeedHead from "./FeedHead";
import Feed from "./Feed";

const Main = ({ tweets, onAdd, onLike }) => {
  return (
    <div className="main">
      <FeedHead />
      <AddTweet onAdd={onAdd} />
      <div className="division"></div>
      {tweets.map((tweet) => (
        <Feed key={tweet.id} tweet={tweet} onLike={onLike} />
      ))}
      <h1></h1>
    </div>
  );
};

export default Main;

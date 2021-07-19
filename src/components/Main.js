import AddTweet from "./AddTweet";
import FeedHead from "./FeedHead";
import Profile from "./Profile";
import Feed from "./Feed";
const Main = () => {
  return (
    <div className="main">
      <FeedHead />
      <AddTweet />
      <div className="division"></div>
      <Feed />
    </div>
  );
};

export default Main;

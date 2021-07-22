import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaRetweet,
  FaAngleUp,
} from "react-icons/fa";
import Profile from "./Profile";
import dateFormat from "dateformat";

const Feed = ({ tweet, onLike }) => {
  const like = (id) => {
    onLike({ id });
  };

  function date() {
    const newDate = tweet.tweeted.split("T");
    const tweetedDate = dateFormat(newDate[0], "dd mmm");
    return tweetedDate;
  }
  return (
    <div className="feed">
      <div className="tweet-profile">
        <Profile value={"tweet-profile-img"} src={tweet.user.profileImg} />
      </div>
      <div className="feed-section">
        <div className="feed-header">
          <div className="feed-profile-info">
            <a className="profile-name">{tweet.user.name}</a>
            <a className="profile-at">@{tweet.user.userName}</a>
            <a className="posted-date">| {date()}</a>
          </div>
          <div className="feed-control">
            <FaEllipsisH className="tweet-comment-icon" />
          </div>
        </div>
        <div className="feed-content">{tweet.tweet}</div>
        <div className="tweet-controls">
          <div className="stats">
            <FaComment className="tweet-comment-icon" />
            <a>{tweet.comments.length}</a>
          </div>
          <div className="stats">
            <FaRetweet className="tweet-retweet-icon" />
            <a>{tweet.retweets.length}</a>
          </div>
          <div className="stats">
            <FaHeart
              className="tweet-like-icon"
              onClick={() => {
                like(tweet._id);
              }}
            />
            <a>{tweet.likes.length}</a>
          </div>
          <div className="stats">
            <FaAngleUp className="tweet-comment-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

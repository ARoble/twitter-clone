import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaRetweet,
  FaAngleUp,
} from "react-icons/fa";
import Profile from "./Profile";
const Feed = ({ tweet }) => {
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
            <a className="posted-date">| da</a>
          </div>
          <div className="feed-control">
            <FaEllipsisH className="tweet-comment-icon" />
          </div>
        </div>
        <div className="feed-content">{tweet.tweet}</div>
        <div className="tweet-controls">
          <div className="stats">
            <FaComment className="tweet-comment-icon" />
            <a>{tweet.comments}</a>
          </div>
          <div className="stats">
            <FaRetweet className="tweet-retweet-icon" />
            <a>{tweet.retweets}</a>
          </div>
          <div className="stats">
            <FaHeart className="tweet-like-icon" />
            <a>{tweet.likes}</a>
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

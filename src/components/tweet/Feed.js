import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaRetweet,
  FaAngleUp,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import Profile from "../partials/Profile";
import dateFormat from "dateformat";
import Comment from "./Comment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const Feed = ({ tweet, onLike, onComment }) => {
  const [popupState, setPopupState] = useState({ open: false });
  const like = (id) => {
    onLike({ id });
  };

  function date() {
    const newDate = tweet.tweeted.split("T");
    const tweetedDate = dateFormat(newDate[0], "dd mmm");
    return tweetedDate;
  }
  const closeDiv = () => {
    return () => setPopupState({ open: false });
  };
  const showComment = (id) => {
    return () => setPopupState({ open: true, id });
  };
  // console.log(tweet.user.name);
  return (
    <div className="feed ">
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
            <FaComment
              className="tweet-comment-icon"
              onClick={showComment(tweet._id)}
            />
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
        {popupState.tweet}
        {popupState.open === true && (
          <form
            className="comment-div"
            //   onSubmit={(e) => saveComment(e, tweet._id)}
          >
            <div className="comment-back">
              <div className="comment-content">
                <div className="close">
                  <FaTimes className="pointer" onClick={closeDiv()} />
                </div>
                <Comment
                  tweetID={popupState.id}
                  tweet={tweet}
                  onComment={onComment}
                  onClick={() => setPopupState({ open: false })}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Feed;

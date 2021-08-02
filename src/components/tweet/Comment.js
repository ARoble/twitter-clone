import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import dateFormat from "dateformat";
import Profile from "../partials/Profile";
const Comment = ({ tweetID, tweet, onComment, onClick }) => {
  const [comment, setComment] = useState("");

  const saveComment = (e, tweet) => {
    e.preventDefault();
    if (comment == "") {
      document.querySelector(".tweet-reply").style.border = "2px solid red";
      document.querySelector(".tweet-reply").style.borderRadius = "5px";

      console.log("empty");
    } else {
      onComment({ tweet, comment });
      setComment("");
      onClick();
    }
  };

  function date() {
    const newDate = tweet.tweeted.split("T");
    const tweetedDate = dateFormat(newDate[0], "dd mmm");
    return tweetedDate;
  }
  return (
    <>
      <div className="comment-tweet flex">
        <div className="profile">
          <Profile value={"tweet-profile-img"} src={"/profile.jpg"} />
        </div>
        <div className="comment-tweet-content">
          <div className="feed-header">
            <div className="feed-profile-info">
              <a className="profile-name">{tweet.user.name}</a>
              <a className="profile-at">@{tweet.user.userName}</a>
              <a className="posted-date">| {date()}</a>
            </div>
          </div>
          <div className="feed-content">{tweet.tweet}</div>
          <div className="reply-to">
            Replying to{" "}
            <a class="at" href="#">
              @{tweet.user.userName}
            </a>
          </div>
        </div>
      </div>
      <div className="comment-input flex">
        <div className="profile">
          <Profile value={"tweet-profile-img"} src={"/profile.jpg"} />
        </div>
        <input
          className="tweet-input tweet-reply"
          type="text"
          placeholder="Tweet your reply"
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className="comment-button">
        <button
          className="btn-tweet"
          type="submit"
          onClick={(e) => saveComment(e, tweet._id)}
        >
          Reply
        </button>
      </div>
    </>
  );
};

export default Comment;

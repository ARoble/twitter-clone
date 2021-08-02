import Profile from "../partials/Profile";
import { useState } from "react";
import { FaImage, FaChartBar, FaSmile, FaCalendarWeek } from "react-icons/fa";
const AddTweet = ({ onAdd }) => {
  const [tweet, setTweet] = useState("");

  const postTweet = (e) => {
    e.preventDefault();
    onAdd({ tweet });
    setTweet("");
  };

  return (
    <div className="tweet">
      <div className="tweet-profile">
        <Profile value={"tweet-profile-img"} src={"/profile.jpg"} />
      </div>
      <form className="tweet-section" onSubmit={postTweet}>
        <input
          className="tweet-input"
          type="text"
          placeholder="What's Happening?"
          onChange={(e) => setTweet(e.target.value)}
        />
        <div className="tweet-control">
          <div className="tweet-icons">
            <FaImage size={21} className="tweet-icon" />
            <FaChartBar size={21} className="tweet-icon" />
            <FaSmile size={21} className="tweet-icon" />
            <FaCalendarWeek size={21} className="tweet-icon" />
          </div>
          <div className="tweet-submit">
            <button className="btn-tweet" type="submit">
              Tweet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTweet;

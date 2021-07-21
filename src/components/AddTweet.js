import Profile from "./Profile";
import { FaImage, FaChartBar, FaSmile, FaCalendarWeek } from "react-icons/fa";
const AddTweet = () => {
  return (
    <div className="tweet">
      <div className="tweet-profile">
        <Profile value={"tweet-profile-img"} src={"/profile.jpg"} />
      </div>
      <div className="tweet-section">
        <input
          className="tweet-input"
          type="text"
          placeholder="What's Happening?"
        />
        <div className="tweet-control">
          <div className="tweet-icons">
            <FaImage size={21} className="tweet-icon" />
            <FaChartBar size={21} className="tweet-icon" />
            <FaSmile size={21} className="tweet-icon" />
            <FaCalendarWeek size={21} className="tweet-icon" />
          </div>
          <div className="tweet-submit">
            <button className="btn-tweet">Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTweet;

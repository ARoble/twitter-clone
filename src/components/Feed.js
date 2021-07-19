import {
  FaEllipsisH,
  FaHeart,
  FaComment,
  FaRetweet,
  FaAngleUp,
} from "react-icons/fa";
import Profile from "./Profile";
const Feed = () => {
  return (
    <div className="feed">
      <div className="tweet-profile">
        <Profile value={"tweet-profile-img"} src={"/silicon.jpg"} />
      </div>
      <div className="feed-section">
        <div className="feed-header">
          <div className="feed-profile-info">
            <a className="profile-name">Silicon Nomads</a>
            <a className="profile-at">@SiliconNomads</a>
            <a className="posted-date">| 14 Jul</a>
          </div>
          <div className="feed-control">
            <FaEllipsisH />
          </div>
        </div>
        <div className="feed-content">
          Yoo check out denmark!🔥 They killed it this Euros{" "}
          <a href="#">#Winners</a> will they win the world cup final 🤔
        </div>
        <div className="tweet-controls">
          <FaComment />
          <FaHeart />
          <FaRetweet />
          <FaAngleUp />
        </div>
      </div>
    </div>
  );
};

export default Feed;

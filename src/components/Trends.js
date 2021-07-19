import { FaCog, FaEllipsisH } from "react-icons/fa";

const Trends = () => {
  return (
    <div className="trends">
      <div className="search">
        <input
          type="text"
          placeholder="Search Twitter"
          className="search-txt"
        />
      </div>
      <div className="trends-section">
        <div className="trends-header">
          <h3>Trends For you</h3>
          <FaCog />
        </div>
        <div className="trend">
          <div className="trend-content">
            <a className="trend-text">Trending in Somalia</a>
            <h3>#EidAlAdha</h3>
            <a className="trend-text">58.2K Tweets</a>
          </div>
          <div className="trend-control">
            <FaEllipsisH />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trends;
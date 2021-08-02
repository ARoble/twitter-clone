import { FaEllipsisH } from "react-icons/fa";

const Trend = ({ hashtag, stats, geo }) => {
  return (
    <div className="trend">
      <div className="trend-content">
        <a className="trend-text">{geo}</a>
        <h3>{hashtag}</h3>
        <a className="trend-text">{stats}</a>
      </div>
      <div className="trend-control">
        <FaEllipsisH />
      </div>
    </div>
  );
};

export default Trend;

import { FaCog } from "react-icons/fa";
import Trend from "./Trend";

const Trends = () => {
  return (
    <div className="trends-section">
      <div className="trends-header">
        <h3>Trends For you</h3>
        <FaCog />
      </div>
      <Trend
        hashtag={"#arsenal🔴"}
        stats={"230k Tweets"}
        geo={"Trending in Somalia"}
      />
      <Trend
        hashtag={"#eidMubarak🕌"}
        stats={"500k Tweets"}
        geo={"Trending in Somalia"}
      />
      <Trend
        hashtag={"#somaliland"}
        stats={"52k Tweets"}
        geo={"Trending in Somalia"}
      />
      <div className="see-more"> See More ....</div>
    </div>
  );
};

export default Trends;

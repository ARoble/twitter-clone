import TrendSearch from "./TrendSearch";
import Trends from "../widgets/Trends";
const RightSection = () => {
  return (
    <div className="trends">
      <TrendSearch />
      <Trends />
    </div>
  );
};

export default RightSection;

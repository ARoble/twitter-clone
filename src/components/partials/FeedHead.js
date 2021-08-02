import { FaStar } from "react-icons/fa";
const FeedHead = ({ title }) => {
  return (
    <div className="head">
      <h3>{title}</h3>
      <FaStar className="blue" />
    </div>
  );
};

export default FeedHead;

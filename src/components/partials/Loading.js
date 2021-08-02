import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="tweet-loading">
      <div>
        <FaSpinner className="spinner" />
      </div>
    </div>
  );
}

export default Loading;

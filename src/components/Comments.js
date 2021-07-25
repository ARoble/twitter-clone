import { FaSpinner } from "react-icons/fa";
import FeedHead from "./FeedHead";
const Comments = () => {
  return (
    <div className="main">
      <FeedHead />

      <div className="division"></div>
      <div className="tweet-loading">
        <div>
          <FaSpinner className="spinner" />
        </div>
      </div>
      {/* {tweets.map((tweet) => (
          <a
            href={`/tweet/${tweet._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Feed
              key={tweet._id}
              tweet={tweet}
              onLike={onLike}
              onComment={onComment}
            />
          </a>
        ))} */}
    </div>
  );
};

export default Comments;

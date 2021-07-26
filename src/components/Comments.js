import { FaSpinner, FaEllipsisH } from "react-icons/fa";
import FeedHead from "./FeedHead";
import Feed from "./Feed";
import axios from "axios";
import { BrowserRouter as useParams } from "react-router-dom";
const commentTweet = (comment) => {
  axios
    .post("http://localhost:8080/api/v1/comment", comment)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const likeTweet = ({ id }) => {
  const newtweet = {
    tweet: id,
    user: "60f82be3bca534750cf257e4",
  };
  axios
    .post("http://localhost:8080/api/v1/like", newtweet)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
const Comments = ({ tweet }) => {
  // let { id } = useParams();
  return (
    <div className="main">
      <FeedHead title={"Tweet"} />
      {/* {id} */}
      <Feed
        key={tweet._id}
        tweet={tweet}
        onLike={likeTweet}
        onComment={commentTweet}
      />
      <div className="division"></div>
      <div className="tweet-loading">
        <div>
          <FaSpinner className="spinner" />
        </div>
      </div>
      {tweet.map((tweet) => (
        <p>{tweet.tweet}</p>
      ))}
    </div>
  );
};

export default Comments;

import { useState, useEffect } from "react";
import FeedHead from "../partials/FeedHead";
import Loading from "../partials/Loading";
import Feed from "./Feed";
import CommentFeed from "./CommentFeed";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const parmas = useParams();
  const [oneTweet, setOneTweet] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTweet() {
      const res = await axios.get(
        `http://localhost:8080/api/v1/tweet/${parmas.id}`
      );
      const tweet = res.data.tweet;

      //  const data = tweets.find((tweet) => tweet._id === parmas.id);
      console.log(tweet);
      setOneTweet(tweet);
      setLoading(false);
    }

    fetchTweet();

    async function fetchComment() {
      const res = await axios.get(
        `http://localhost:8080/api/v1/comment/${parmas.id}`
      );
      const comment = res.data.comment;

      //  const data = tweets.find((tweet) => tweet._id === parmas.id);
      console.log(comment);
      setComments(comment);
      // setLoading(false);
    }

    fetchComment();
  }, []);

  return (
    <div className="main">
      <FeedHead title={"Single Tweet"} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Feed tweet={oneTweet} />

          <div className="division"></div>
          <div className="comment-section">
            <h3>Comments</h3>
            {comments.map((comment) => (
              <CommentFeed comment={comment} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Comments;

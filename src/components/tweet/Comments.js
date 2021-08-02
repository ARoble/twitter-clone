import { useState, useEffect } from "react";
import FeedHead from "../partials/FeedHead";
import Loading from "../partials/Loading";
import Feed from "./Feed";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  const parmas = useParams();
  const [oneTweet, setOneTweet] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/api/v1/tweet");
      const tweets = res.data.data;

      const data = tweets.find((tweet) => tweet._id === parmas.id);
      console.log(data);
      setOneTweet(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <div className="main">
      <FeedHead title={"Single Tweet"} />
      {loading ? <Loading /> : ""}
      <Feed tweet={oneTweet} />

      <div className="division"></div>
      <h3>Comments</h3>
    </div>
  );
};

export default Comments;

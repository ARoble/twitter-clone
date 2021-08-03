import { useState, React, useEffect } from "react";
import SideNav from "./components/sidebars/SideNav";
import Main from "./components/Main";
import RightSection from "./components/sidebars/RightSection";
import Comments from "./components/tweet/Comments";
import axios from "axios";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

function App() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/api/v1/tweet");
      const data = res.data.data;
      setLoading(false);
      setTweets(data);
    }

    fetchData();
  }, [tweets]);

  const AddTweet = ({ tweet }) => {
    const newtweet = {
      tweet,
      user: "60f82be3bca534750cf257e4",
    };
    axios
      .post("http://localhost:8080/api/v1/tweet", newtweet)
      .then(function (response) {
        setTweets([...tweets, response.data.data.newTweet]);
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
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const commentTweet = ({ tweet, comment }) => {
    const newComment = {
      tweet_id: tweet,
      tweet: comment,
      user: "60f82be3bca534750cf257e4",
    };
    console.log(newComment);
    axios
      .post("http://localhost:8080/api/v1/comment", newComment)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Router>
        <SideNav />
        {/* routes for the middle div */}
        <Switch>
          <Route exact path="/">
            <Main
              tweets={tweets}
              onAdd={AddTweet}
              onLike={likeTweet}
              onComment={commentTweet}
              loading={loading}
            />
          </Route>

          <Route path="/tweet/:id">
            <Comments />
          </Route>
        </Switch>
        {/* routes for the middle div */}
        <RightSection />
      </Router>
    </div>
  );
}

export default App;

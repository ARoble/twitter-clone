import { useState, React, useEffect } from "react";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import RightSection from "./components/RightSection";
import Comments from "./components/Comments";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // document.querySelector(".tweet-loading").style.display = "display";
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/api/v1/tweet");
      const data = res.data.data;
      // document.querySelector(".tweet-loading").style.display = "none";
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
        console.log(response.data.data.newTweet);
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
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
  return (
    <div className="container">
      <SideNav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Main
              tweets={tweets}
              onAdd={AddTweet}
              onLike={likeTweet}
              onComment={commentTweet}
            />
          </Route>
          <Route path="/go">
            <Comments />
          </Route>
        </Switch>
      </Router>

      <RightSection />
    </div>
  );
}

export default App;

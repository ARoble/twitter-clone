import { useState, React, useEffect } from "react";
import SideNav from "./components/SideNav";
import Main from "./components/Main";
import RightSection from "./components/RightSection";

import axios from "axios";

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:8080/api/v1/tweet");
      const data = res.data.data;
      setTweets(data);
    }

    fetchData();
  }, [tweets]);

  const AddTweet = ({ tweet }) => {
    // const newtweet = {
    //   id: 3,
    //   tweet: tweet,
    //   hashtags: ["itsComingDK"],
    //   likes: 23,
    //   comments: 43,
    //   retweets: 100,
    //   tweeted: "1 Jul",
    //   user: {
    //     profileName: "Abdulladif Roble",
    //     profileAt: "@a_rooble",
    //     profileImage: "/profile.jpg",
    //   },
    // };

    // setTweets([...tweets, newtweet]);

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
    // async function postTweet() {
    //   const newtweet = {
    //     tweet,
    //     user: "60f82be3bca534750cf257e4",
    //   };
    //   const res = await axios.post(
    //     "http://localhost:8080/api/v1/tweet",
    //     newtweet
    //   );
    //   setTweets(...tweets, res);
    // }
    // postTweet();
  };

  return (
    <div className="container">
      <SideNav />
      <Main tweets={tweets} onAdd={AddTweet} />
      <RightSection />
    </div>
  );
}

export default App;

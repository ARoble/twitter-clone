import Tweet from "./Tweet";

const Tweets = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
};

export default Tweets;

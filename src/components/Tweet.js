const Tweet = ({ tweet }) => {
  return (
    <>
      <h1 key={tweet.id}>{tweet.tweet}</h1>
    </>
  );
};

export default Tweet;

import Feed from "./Feed";

function CommentFeed({ comment }) {
  return (
    <div>
      {/* <h1>{comment.comment}</h1>
      <h1>{comment.user.name}</h1> */}
      <Feed tweet={comment} />
    </div>
  );
}

export default CommentFeed;

import useUser from '../hooks/useUser';

const CommentsList = ({ comments }) => {
  const { user } = useUser();

  const deleteComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
  };

  return (
    <>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div
          className="comment"
          key={comment.postedBy + ': ' + comment.text}
        >
          <h4>{comment.postedBy}</h4>
          <p>{comment.text}</p>
          <button onClick={deleteComment}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default CommentsList;

// I'm attempting to create a delete button that shows up ONLY
// on the users comments
// when pressed the delete button will delete it's parent
// which is the comment container the button is contained in

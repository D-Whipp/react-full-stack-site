import useUser from '../hooks/useUser';

const CommentsList = ({ comments }) => {
  const { user } = useUser();
  // referencing -> https://github.com/D-Whipp/knights-radiant-list/blob/main/assets/js/app.js
  const deleteComment = async (e) => {
    const delBtnNode = document.querySelector('#delete-button');
    const commentNode = delBtnNode.parentNode;
    const commentParent = commentNode.parentNode;
    const children = commentParent.childNodes;
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'comment') {
        if (e.target.parentNode.innerHTML === children[i].innerHTML) {
          console.log(
            'E.TARGET: ',
            e.target.parentNode.innerHTML + ' KEY: ',
            children[i].innerHTML
          );
          e.target.parentNode.remove();
        }
      }
    }
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
          {user ? (
            <button id="delete-button" onClick={deleteComment}>
              Delete
            </button>
          ) : (
            <button>Log in to delete comments</button>
          )}
        </div>
      ))}
    </>
  );
};

export default CommentsList;

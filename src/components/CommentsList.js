import useUser from '../hooks/useUser';
// import {useState} from 'react';

const CommentsList = ({ comments }) => {
  const { user } = useUser();
  // const [name, setName] = useState('');
  // const [commentText, setCommentText] = useState('');

  // referencing -> https://github.com/D-Whipp/knights-radiant-list/blob/main/assets/js/app.js
  const deleteComment = async (e) => {
    // const token = user && (await user.getIdToken());
    // const headers = token ? { authtoken: token } : {};
    const delBtnNode = document.querySelector('#delete-button');
    console.log(e);
    console.log(e.target.id);
    console.log(e.target.id.parentNode);
    // const commentNum = Number(
    //   delBtnNode.parentNode.getAttribute('delete-button')
    // );
    const commentNode = delBtnNode.parentNode;
    const commentParent = commentNode.parentNode;
    const children = commentParent.childNodes;
    // console.log(children);
    // for (const child of children) {
    // console.log('child: ' + child);
    // console.log(child);
    // }
    // for (const comment in commentParent) {
    //   console.log(comment);
    // }
    // commentParent.forEach(() => {
    //   console.log('hi');
    // });
    // commentNode.remove();
    // delBtnNode.parentElement.remove();
    // const commentParent = commentNode.parentNode;
    // commentParent.removeChild(commentNode);
    // const delBtnNode =
    //   e.target.parentNode.getAttribute('delete-button');
    // console.log(delBtnNode);
    // console.log(commentNode);
    // console.log(commentParent);
    // console.log(commentNum); // returns 0;
    // console.log(commentParent);
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

// I'm attempting to create a delete button that shows up ONLY
// on the users comments
// when pressed the delete button will delete it's parent
// which is the comment container the button is contained in

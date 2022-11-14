import axios from 'axios';
// import {useState} from 'react';
import useUser from '../hooks/useUser';

// deleteComments => artcileName
const CommentsList = ({ comments, articleName }) => {
  const { user } = useUser();

  const deleteComment = async (e) => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const delBtnNode = document.querySelector('#delete-button');
    const commentNode = delBtnNode.parentNode;
    const commentParent = commentNode.parentNode;
    const children = commentParent.childNodes;



    // COMMENT NODE FOR LOOP
    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'comment') {
        if (e.target.parentNode.innerHTML === children[i].innerHTML) {
      
          e.target.parentNode.remove();
          const commentNode = e.target.parentNode;
          const payload = commentNode;
          console.log(payload);

          try {
            const response = await axios.delete(
              `/api/articles/${articleName}/deleteComments`,
              { headers },
              {
                data: {
                  source: payload,
                },
              }
            );
            if (response.data.success) {
              alert(response.data.msg);
            }
          } catch (err) {
            console.log(err);
          }
          // return targetKey;
        }
      }
    }
    // console.log(targetKey);
  };

  return (
    <>
      <h3>Comments:</h3>
      {comments.map((comment) => (
        <div
          id={Math.random() * 1000000000}
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

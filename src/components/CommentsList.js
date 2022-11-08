import axios from 'axios';
// import {useState} from 'react';
import useUser from '../hooks/useUser';

// deleteComments => artcileName
const CommentsList = ({ comments, articleName }) => {
  const { user } = useUser();
  // const [name, setName] = useState('');
  // const [commentText, setCommentText] = useState('');
  // referencing -> https://github.com/D-Whipp/knights-radiant-list/blob/main/assets/js/app.js
  const deleteComment = async (e) => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const delBtnNode = document.querySelector('#delete-button');
    const commentNode = delBtnNode.parentNode;
    const commentParent = commentNode.parentNode;
    const children = commentParent.childNodes;

    // console.log('ID: ', id);
    // console.log('E: ', e);
    // axios delete res

    for (let i = 0; i < children.length; i++) {
      if (children[i].className === 'comment') {
        if (e.target.parentNode.innerHTML === children[i].innerHTML) {
          // console.log(
          //   'E.TARGET: ',
          //   e.target.parentNode.innerHTML + ' KEY: ',
          //   children[i].innerHTML
          // );
          // console.log(`Article Name: ${articleName}`);
          // e.target.parentNode.remove();
          const commentNode = e.target.parentNode;
          const payload = commentNode;
          // const postedBy = e.target.parentNode.innerHTML;
          // if (){}
          // const titleContent =
          //   document.querySelector('#commentTitle');
          // for (let j = 0; j < commentNode.length; j++) {
          //   console.log('j: ', j);
          // }
          // const commentContent = document.querySelector('p');
          // console.log('postedBY: ', postedBy);
          console.log('commentNode: ', commentNode);
          // console.log('titleContent: ', titleContent);
          // console.log('commentContent: ', commentContent);
          // name = '';

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

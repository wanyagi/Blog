import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { submitComments } from '../redux/commentsSlice';
import './Comments.css';


const Comments = () => {

  const [ comment, setComment ] = useState(''); 
  const [ textarea, setTextarea ] = useState(false); 
  const isLogged = useSelector((state) => state.userAuthentication.loggedIn);  
  const dispatch = useDispatch(); 
  const { id } = useParams(); 

  const handleComment = (event) => {
    setComment(event.target.value);
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }; 

  const handleCommentSubmission = (event) => {

    event.preventDefault(); 

    if (!isLogged) {
      setTextarea(true); 
      return; 
    }; 

    dispatch(submitComments({id, comment}));
    setComment('');

  }; 

  const handleTextareaFocues = () => {

    if (!isLogged) {
      setTextarea(true); 
    }; 

  }; 

    return (
      <form className="comment--section" onSubmit={handleCommentSubmission}>
        {!isLogged && textarea && <div className="comments--error--state">Connecte-toi afin de poster ton commentaire</div>}
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" value={comment} onChange={handleComment} onFocus={handleTextareaFocues} />
        <div id="comment--section--button">
          <button className="comment--section--button" type="submit">Valider</button>
        </div>
      </form>
    )
}; 

export default Comments; 
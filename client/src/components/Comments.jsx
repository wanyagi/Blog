import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import { submitComments } from '../redux/commentsSlice'; 
import './Comments.css';


const Comments = () => {

  const [ comment, setComment ] = useState(''); 
  const [ textarea, setTextarea ] = useState(false); 
  const {loggedIn, loading} = useSelector((state) => state.userAuthentication);  
  const { id } = useParams(); 
  const dispatch = useDispatch(); 

  const handleComment = (event) => {
    setComment(event.target.value);
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }; 

  const handleTextareaFocus = () => {
    setTextarea(true); 
  }; 

  const handleCommentSubmission = async (event) => {

    event.preventDefault(); 

    if (!loggedIn) {
      setTextarea(true); 
      return; 
    }; 

    dispatch(submitComments({id, comment})); 
    setComment('')


    const textarea = document.getElementById("comments");
    if (textarea) {
      textarea.style.height = 'initial';
    }

  }; 

    return (
      <form className="comment--section" onSubmit={handleCommentSubmission}>
        {!loggedIn && textarea ? <div className="comments--error--state"><NavLink to="/login">Connecte-toi</NavLink> et post ton commentaire</div> : ""}
        {loading ? <div className="comments--loading--state"></div> : ""}
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" value={comment} onChange={handleComment} onFocus={handleTextareaFocus} />
        <div id="comment--section--button">
          <button className="comment--section--button" type="submit">Valider</button>
        </div>
      </form>
    )
}; 

export default Comments; 
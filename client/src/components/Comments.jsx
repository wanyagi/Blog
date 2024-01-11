import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { comments } from '../redux/commentsSlice';
import './Comments.css';


const Comments = () => {

  const [ comment, setComment ] = useState(''); 
  const { error } = useSelector((state) => state.comments); 
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

    dispatch(comments({id, comment}));  
    setComment('')
  }; 


    return (
      <form className="comment--section" onSubmit={handleCommentSubmission}>
        {error ? <div>{error}</div> : ""}
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" value={comment} onChange={handleComment}/>
        <div id="comment--section--button">
          <button className="comment--section--button" type="submit">Valider</button>
        </div>
      </form>
    )
}; 

export default Comments; 
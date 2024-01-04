import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 
import { addComment } from '../redux/commentsSlice';
import './Comments.css';

const Comments = () => {

  const [ comment, setComment ] = useState(''); 
  const dispatch = useDispatch(); 
  const { id } = useParams(); 
  console.log(useParams()); 
  console.log(id); 

  const handleComment = (event) => setComment(event.target.value); 

  const handleCommentSubmission = (event) => {
    event.preventDefault(); 

    dispatch(addComment({id, comment})); 
    setComment('')
  }; 


    return (
      <form className="comment--section" onClick={handleCommentSubmission}>
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" cols="30" rows="10" value={comment} onChange={handleComment}/>
        <div className="comment--section--button">
          <button type="submit">Poster</button>
        </div>
      </form>
    )
}; 

export default Comments; 
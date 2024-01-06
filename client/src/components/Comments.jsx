import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { addComment } from '../redux/commentsSlice';
import { fetchNewAccesToken } from '../redux/refreshAccesTokenSlice';
import './Comments.css';

const Comments = () => {

  const [ comment, setComment ] = useState(''); 
  const { error } = useSelector((state) => state.accesToken); 
  const dispatch = useDispatch(); 
  const { id } = useParams(); 
  console.log(useParams()); 
  console.log(id); 

  const handleComment = (event) => setComment(event.target.value); 

  useEffect(() => {
    if (error === "Token expired") {
      dispatch(fetchNewAccesToken()); 
    }
  }, [error, dispatch]); 

  const handleCommentSubmission = (event) => {

    event.preventDefault(); 

    dispatch(addComment({id, comment})); 
    setComment('')
  }; 


    return (
      <form className="comment--section" onClick={handleCommentSubmission}>
        {error ? <div>{error.message}</div> : ""}
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" cols="30" rows="10" value={comment} onChange={handleComment}/>
        <div className="comment--section--button">
          <button type="submit">Poster</button>
        </div>
      </form>
    )
}; 

export default Comments; 
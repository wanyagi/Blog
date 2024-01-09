import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchComments } from '../redux/getCommentsSlice';
import './Comments.css';

const CommentsDisplay = () => {

  const {comments, loading, error } = useSelector((state) => state.comments); 
  const dispatch = useDispatch(); 
  const { id } = useParams(); 

  useEffect(() => {
    dispatch(fetchComments(id)); 
  }, [dispatch, id])

  if (loading) { return <div className="comments--loading--state">Patientez...</div> };
  if (error) { return <div className="comments--error--state">Il n'y a pas de commentaire.</div> };


    return (
        <section className="comments--display--section">
            {comments.map((comment) => (
                <div className="displayed" key={comment.comment_id}>
                    <div className="comment--container">
                      <h6>{comment.comment_username}</h6>
                      <p>{comment.comment}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}; 

export default CommentsDisplay; 
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchComments } from '../redux/getCommentsSlice';
import './Comments.css';

const CommentsDisplay = () => {

  const {comments, loading, error } = useSelector((state) => state.comments); 
  const dispatch = useDispatch(); 
  const { id } = useParams(); 
  console.log(`dispatch : ${id}`);
  console.log(useParams());

  useEffect(() => {
    dispatch(fetchComments(id)); 
  }, [dispatch, id])

  if (loading) { return <div className="loading--state">Patientez...</div> };
  if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };


    return (
        <section className="display--section">
            {!comments ? <div className="loading--state">Il n'y a pas de commentaire</div> : comments.map((comment) => (
                <div key={comment.comment_id}>
                    <h6>{comment.comment_username}</h6>
                    <p>{comment.comment}</p>
                </div>
            ))}
        </section>
    )
}; 

export default CommentsDisplay; 
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchComments } from '../redux/getCommentsSlice';
import { deleteComment } from '../redux/deleteCommentsSlice';
import { MdDelete } from 'react-icons/md';
import './CommentsDisplay.css';

const CommentsDisplay = () => {

  const { comments, loading, error } = useSelector((state) => state.comments);
  const dispatch = useDispatch(); 
  const { id } = useParams();
  const user = localStorage.getItem('users_role'); 

  useEffect(() => {
    dispatch(fetchComments(id)); 
  }, [dispatch, id]); 

  const handleDelete = async (comments_id) => {
    dispatch(deleteComment({id: comments_id, postID: id}))
  }; 

  if (loading) { return <div className="comments--loading--state"></div> };
  if (error) { return <div className="comments--error--state">Il n'y a pas de commentaire.</div> };


  return (
      <section className="comments--display--section">
          {comments.map((comment, index) => (
              <div className="displayed" key={comment.comments_id || index}>
                <h6 className="c--title">{comment.comment_username}</h6>
                <p className="c--paragraphe">{comment.comment}</p>
                {user === 'admin' && (<MdDelete className="delete--icon" size={20} onClick={() => handleDelete(comment.comments_id)}/>)}
              </div>
          ))}
      </section>
  )
}; 

export default CommentsDisplay; 
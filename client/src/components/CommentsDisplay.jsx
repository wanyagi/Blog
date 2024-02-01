import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { deleteComment } from '../redux/deleteCommentsSlice';
import { MdDelete } from 'react-icons/md';
import './CommentsDisplay.css';

const CommentsDisplay = ({ comments, loading, handleCommentDelete }) => {

  const dispatch = useDispatch(); 
  const { id } = useParams();
  const user = localStorage.getItem('users_role'); 

  const handleDelete = async (comments_id) => {
    const result = await dispatch(deleteComment({id: comments_id, postId: id}));
    if (result.meta.requestStatus === 'fulfilled') {
      handleCommentDelete(comments_id); 
    }; 
  }; 

  if (loading) return <div className="comments--loading--state"></div>;


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
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { deleteComment } from '../redux/deleteCommentsSlice';
import { MdDelete } from 'react-icons/md';
import './CommentsDisplay.css';


const CommentsDisplay = ({comments, removeComment}) => {

  const dispatch = useDispatch(); 
  const { id } = useParams();
  const user = localStorage.getItem('users_role'); 

  const handleDelete = async (comments_id) => {
    await dispatch(deleteComment({id: comments_id, postID: id}));
    removeComment(comments_id); 
  }; 

    return (
        <section className="comments--display--section">
            {comments.map((comment, index) => (
                <div className="displayed" key={comment.comment_id || index}>
                  <h6 className="c--title">{comment.comment_username}</h6>
                  <p className="c--paragraphe">{comment.comment}</p>
                  {user === 'admin' && (<MdDelete className="delete--icon" size={20} onClick={() => handleDelete(comment.comments_id)}/>)}
                </div>
            ))}
        </section>
    )
}; 

export default CommentsDisplay; 
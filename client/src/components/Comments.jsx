import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import './Comments.css';


const Comments = ({addComment}) => {

  const [ comment, setComment ] = useState(''); 
  const [ textarea, setTextarea ] = useState(false); 
  const {loggedIn, loading} = useSelector((state) => state.userAuthentication);  
  const { id } = useParams(); 

  const handleComment = (event) => {
    setComment(event.target.value);
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }; 

  const handleTextareaFocues = () => {
    if (!loggedIn) {
      setTextarea(true); 
    }; 
  }; 

  const handleCommentSubmission = async (event) => {

    event.preventDefault(); 

    if (!loggedIn) {
      setTextarea(true); 
      return; 
    }; 

    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER}/comments`, {
        method: 'POST', 
        body: JSON.stringify({id, comment}), 
        headers: { 'Content-Type' : 'application/json' }, 
        credentials: 'include', 
      }); 
      const responseData = await response.json(); 
      console.log(responseData); 
      if (!response.ok) {
        throw new Error(); 
      } else {
        setComment(''); 
        addComment(responseData); 
      }
    } catch (error) {
      console.error(error); 
    }

  }; 

    return (
      <form className="comment--section" onSubmit={handleCommentSubmission}>
        {!loggedIn && textarea && <div className="comments--error--state"><NavLink to="/login">Connecte-toi</NavLink> et post ton commentaire</div>}
        {loading && <div className="comments--loading--state"></div>}
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" value={comment} onChange={handleComment} onFocus={handleTextareaFocues} />
        <div id="comment--section--button">
          <button className="comment--section--button" type="submit">Valider</button>
        </div>
      </form>
    )
}; 

export default Comments; 
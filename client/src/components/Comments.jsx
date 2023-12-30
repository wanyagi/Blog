import React from 'react';
import './Comments.css';

const Comments = () => {
    return (
      <form className="comment--section">
        <textarea placeholder="Laisse un commentaire..." name="comments" id="comments" cols="30" rows="10" />
        <div className="comment--section--button">
          <button>Valider</button>
        </div>
      </form>
    )
}; 

export default Comments; 
import React from 'react';
import './Comments.css';

const Comments = () => {
    return (
        <form className="comment--section">
          <label htmlFor="comments" className="articles--comments">Qu'en pensez vous ?</label>
          <textarea name="comments" id="comments" cols="30" rows="10" />
        <button>Poster</button>
      </form>
    )
}; 

export default Comments; 
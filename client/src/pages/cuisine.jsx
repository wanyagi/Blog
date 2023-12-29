import React from 'react'; 
import { Link } from 'react-router-dom';
import Formulaire from '../assets/Formulaire.jpeg'; 


const Cuisine = () => {


  return (
    <article className="posts--container">
      <div className="posts" key="/posts:/id">
          <img className="posts--image" src={Formulaire} alt=""/>
        <div className="posts--description">
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
          <span className="date">02.03.2023</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo.</p>
        </div>
          <button>
            <Link to={'/post/posts.id'}>
              Lire l'article
            </Link>
          </button>
      </div>
    </article>

  )
}; 

export default Cuisine; 
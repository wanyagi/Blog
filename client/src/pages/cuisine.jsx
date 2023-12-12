import React from 'react'; 
import { Link } from 'react-router-dom';


const Cuisine = () => {


  return (
          <article className="posts--container">
            <div className="posts" key="/posts:/id">
                <img className="posts--image" src="{posts.image}" alt=""/>
              <div className="posts--description">
                <h3>""</h3>
                <span className="date">02.03.2023</span>
                <p>""</p>
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
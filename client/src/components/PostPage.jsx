import React from 'react'; 
import { NavLink, Link } from "react-router-dom"; 
import { MdDelete } from 'react-icons/md'; 
import { CiEdit } from "react-icons/ci"; 
import Comments from './Comments';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './PostPage.css'; 

const Posts = () => {
  return (
    <article className="article--section">
          <img src={Formulaire} alt="articlesimage"/>
        <div className="articles--title">
          <h4>Bien-Être</h4>
        </div>
        <div className="articles--content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
        </div>
        <div className="article--review">
            <Link to="/article?edit=id">
              <MdDelete size={20} />
            </Link>
              <CiEdit size={20} />
        </div>
        <div className="articles--navigation">
            <button>
              <NavLink to="/">
                Articles
              </NavLink>
            </button>
            <button>
              <NavLink to="/">
                Suivant
              </NavLink>
            </button>
        </div>
        <Comments />
    </article>
  )
}

export default Posts; 
import React from 'react'; 
import { Link } from "react-router-dom"; 
import { MdDelete } from 'react-icons/md'; 
import { CiEdit } from "react-icons/ci"; 
import Comments from './Comments';
import Formulaire from '../assets/Formulaire.jpeg'; 
import './ArticlePage.css'; 

const ArticlePage = () => {
  return (
    <article className="article--section">
      <div className="articles--image">
          <img className="article--image" src={Formulaire} alt="articlesimage"/>
      </div>
        <div className="articles--content">
          <div>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
          <div>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <img src={Formulaire} alt="articlesimage"/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quos ratione doloremque voluptate nam optio accusamus, facere fugit recusandae temporibus dolor provident, ex voluptatum ducimus quibusdam odit quas possimus explicabo. Dignissimos sequi veniam fuga corrupti eum debitis asperiores nisi, laudantium, itaque voluptatem amet deserunt. Voluptatibus, odio. Adipisci dignissimos exercitationem sapiente! Labore aliquid exercitationem quo quia est tempora itaque optio autem.
          </p>
          <div className="article--review">
            <Link to="/article?edit=id">
              <MdDelete size={30} style={{color: "red"}} />
            </Link>
            <Link to="/article?edit=id">
              <CiEdit size={30} style={{color: "blue"}} />
            </Link>
        </div>
        </div>
          <Comments />
    </article>
  )
}

export default ArticlePage; 
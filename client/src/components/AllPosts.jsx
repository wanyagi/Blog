import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { NavLink } from 'react-router-dom'; 
import './Posts.css'; 

const Posts = () => {

  const dispatch = useDispatch(); 
  const {posts, loading, error} = useSelector((state) => state.posts); 

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };



    return (
      <article className="posts--container">
       {posts.map(post => (
          <div className="posts" key={post.posts_id}>
          <img className="posts--image" src={post.posts_image} alt=""/>
          <div className="posts--description">
          <h3>{post.posts_title}</h3>
          <span className="date">{post.posts_date}</span>
          <p>{post.posts_category}</p>
          <p>{post.posts_description}</p>
          </div>
           <button>
            <NavLink to={`/posts/${post.posts_id}`}>
              Lire l'article
            </NavLink>
           </button>
          </div>
        ))}
      </article>
    )
}; 

export default Posts; 
import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { NavLink } from 'react-router-dom'; 
import './AllPosts.css'; 

const Posts = () => {

  const dispatch = useDispatch(); 
  const posts = useSelector((state) => state.posts.posts); 
  const loading = useSelector ((state) => state.posts.loading); 
  const error = useSelector ((state) => state.posts.error); 

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };



    return (
        <article className="posts--container">
            {posts.articles?.map(posts => (
            <div className="posts" key={posts.id}>
                <img className="posts--image" src={posts.urlToImage} alt=""/>
              <div className="posts--description">
                <h3>{posts.title}</h3>
                <span className="date">{posts.publishedAt}</span>
                <p>{posts.description}</p>
              </div>
                <button>
                  <NavLink to={posts.url}>
                    Lire l'article
                  </NavLink>
                </button>
              </div>
            ))}
        </article>
    )
}; 

export default Posts; 
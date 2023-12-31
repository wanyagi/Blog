import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { NavLink } from 'react-router-dom'; 
import moment from 'moment'; 
import './Posts.css'; 

const Posts = () => {

  const formatDate = (date) => {
    return moment(date).format("DD.MM.YYYY"); 
  }

  const dispatch = useDispatch(); 
  const {posts, loading, error} = useSelector((state) => state.posts); 

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]); 

    const sortedPosts = posts.slice().sort((recent, ancient) => moment(ancient.posts_date) - moment(recent.posts_date)); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Un article arrivera bientôt.</div> };



    return (
      <article className="posts--container">
       {sortedPosts.map((post, index) => (
          <div className={`posts ${index === 0 ? 'posts--recent' : ''}`} key={post.posts_id}>
          <img className="posts--image" src={post.posts_image} alt=""/>
          <div className="posts--description">
          <h2>{post.posts_title}</h2>
          <span className="date">{formatDate(post.posts_date)}</span>
          <p>{post.posts_category}</p>
          <p>{post.posts_description}</p>
          </div>
           <button className="posts--button">
            <NavLink to={`/post/${post.posts_id}`}>
              Lire l'article
            </NavLink>
           </button>
          </div>
        ))}
      </article>
    )
}; 

export default Posts; 
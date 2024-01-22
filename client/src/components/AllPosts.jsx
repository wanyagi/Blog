import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { NavLink } from 'react-router-dom'; 
import moment from 'moment'; 
import 'moment/locale/fr'; 
import './Posts.css'; 

const Posts = () => {

  const formatDate = (date) => {
    moment.locale('fr');
    return moment(date).format("DD MMMM YYYY"); 
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
          <div className='posts' key={post.posts_id}>
          <img className="posts--image" src={post.posts_image} alt=""/>
          <div className="posts--description">
          <h2>{post.posts_title}</h2>
          <div className="posts--info">
          <span className="date">{formatDate(post.posts_date)}</span>
          <p className='posts--cat'>{post.posts_category}</p>
          </div>
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
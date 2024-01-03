import React, { useEffect } from 'react'; 
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsByCategory } from '../redux/postsByCategorySlice';
import { NavLink } from 'react-router-dom'; 
import moment from 'moment'
import './Posts.css'; 

const PostsByCategory = () => {

  const formatDate = (date) => {
    return moment(date).format("DD.MM.YYYY"); 
  }

  const dispatch = useDispatch(); 
  const {posts, loading, error} = useSelector((state) => state.postsbycategory); 
  const category = useLocation().pathname.split("/").pop(); 

    useEffect(() => {
      dispatch(fetchPostsByCategory(category))
    }, [dispatch, category]); 

    const sortPost = posts.slice().sort((recent, ancient) => moment(ancient.posts_date) - moment(recent.posts_date)); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };



    return (
      <div className="posts--gcontainer">
        <article className="posts--container">
          {sortPost.map(post => (
            <div className="posts" key={post.posts_id}>
            <img className="posts--image" src={post.posts_image} alt=""/>
            <div className="posts--description">
            <h3>{post.posts_title}</h3>
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
      </div>
    )
}; 

export default PostsByCategory; 
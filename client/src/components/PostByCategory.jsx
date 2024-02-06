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

    if (loading) { return <div className="loading--state"><div className='article--loading'></div></div> };
    if (error) { return <div className="error--state">Un article arrivera bientôt.</div> };

    return (
      <div className="posts--container">
        <article className="posts--container--cat">
          {sortPost.map(post => (
            <div className="posts" key={post.posts_id}>
            <NavLink to={`/post/${post.posts_id}`}>
            <img className="posts--image" src={post.posts_image} alt=""/>
            <span className="article--date">{formatDate(post.posts_date)}</span>
            <div className="posts--description">
            <h3>{post.posts_title}</h3>
            </div>
              </NavLink>
            </div>
          ))}
        </article>
      </div>
    )
}; 

export default PostsByCategory; 
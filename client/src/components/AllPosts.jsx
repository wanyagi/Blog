import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { NavLink } from 'react-router-dom'; 
import moment from 'moment';
import 'moment/locale/fr';
import './Posts.css'; 

const Posts = () => {

  const dispatch = useDispatch(); 
  const {posts, loading, error} = useSelector((state) => state.posts); 

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]); 

    const formatDate = (date) => {
      moment.locale('fr');
      return moment(date).format("DD-MM-YYYY"); 
    }

    const sortedPosts = posts.slice().sort((recent, ancient) => moment(ancient.posts_date) - moment(recent.posts_date)); 

    if (loading) { return <div className="loading--state"><div className='article--loading'></div></div> };
    if (error) { return <div className="error--state">Un article arrivera bientôt.</div> };



    return (
      <article className="posts--container">
       {sortedPosts.map((post) => (
          <div className='posts' key={post.posts_id}>
            <NavLink to={`/post/${post.posts_id}`}>
              <img className="posts--image" src={post.posts_image} alt=""/>
              <span className='article--date'>{formatDate(post.posts_date)}</span>
              <div className="posts--info">
              </div>
              <div className="posts--description">
                <h2>{post.posts_title}</h2>
              </div>
            </NavLink>
          </div>
        ))}
      </article>
    )
}; 

export default Posts; 
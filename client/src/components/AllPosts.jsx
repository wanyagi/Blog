import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postSlice';
import { Link } from 'react-router-dom'; 
import './AllPosts.css'; 

const Posts = () => {

  const dispatch = useDispatch(); 
  const blogposts = useSelector((state) => state.blogposts.posts); 
  const loading = useSelector ((state) => state.blogposts.loading); 
  const error = useSelector ((state) => state.blogposts.error); 

    useEffect(() => {
      dispatch(fetchPosts())
    }, [dispatch]); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };



    return (
        <article className="posts--container">
            {blogposts.articles?.map(blogpost => (
            <div className="posts" key={blogpost.id}>
                <img className="posts--image" src={blogpost.blogs_file} alt=""/>
              <div className="posts--description">
                <h3>{blogpost.blogs_titre}</h3>
                <span className="date">{blogpost.blogs_date}</span>
                <p>{blogpost.blogs_description}</p>
              </div>
                <button>
                  <Link to={`/posts/${blogpost.blogs_content}`}>
                    Lire l'article
                  </Link>
                </button>
              </div>
            ))}
        </article>
    )
}; 

export default Posts; 
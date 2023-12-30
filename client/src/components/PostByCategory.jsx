import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsByCategory } from '../redux/postsByCategorySlice';
import { Link } from 'react-router-dom'; 
import './Posts.css'; 

const Posts = () => {

  const dispatch = useDispatch(); 
  const {blogpostsbycategory, loading, error} = useSelector((state) => state.blogpostsbycategory); 

    useEffect(() => {
      dispatch(fetchPostsByCategory())
    }, [dispatch]); 

    if (loading) { return <div className="loading--state">Patientez...</div> };
    if (error) { return <div className="error--state">Veuillez réessayez plustard.</div> };



    return (
        <article className="posts--container">
            {blogpostsbycategory.posts?.map(blogpost => (
            <div className="posts" key={blogpost.id}>
                <img className="posts--image" src={blogpost.blogs_file} alt=""/>
              <div className="posts--description">
                <h3>{blogpost.blogs_titre}</h3>
                <span className="category">{blogpost.blogs_category}</span>
                <span className="date">{blogpost.blogs_date}</span>
                <p>{blogpost.blogs_description}</p>
              </div>
                <button>
                  <Link to={`/posts/${blogpost.id}`}>
                    Lire l'article
                  </Link>
                </button>
              </div>
            ))}
        </article>
    )
}; 

export default Posts; 
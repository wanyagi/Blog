import React, { useEffect } from 'react'; 
import { Link, useParams } from "react-router-dom"; 
import { fetchPostsByID } from '../redux/postsByIDSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md'; 
import { CiEdit } from "react-icons/ci"; 
import Comments from './Comments';
import CommentsDisplay from './CommentsDisplay'; 
import './ArticlePage.css'; 

const ArticlePage = () => {

  const { id } = useParams(); 
  const dispatch = useDispatch(); 
  const { post, loading, error } = useSelector((state) => state.postsbyid); 

  useEffect(() => {
    console.log('dispatch id', id)
    dispatch(fetchPostsByID(id)); 
  }, [dispatch, id]);  

  if (loading) {return <div className="loading--state">Patientez...</div>}
  if (error) {return <div className="error--state">Réessayez plustard...</div>}
  if (!post) return <div>Article not found or loading...</div>

  return (
    <article className="article--section">
      <div className="articles--image">
          <img className="article--image" src={post.posts_image} alt="articlesimage"/>
      </div>
        <div className="articles--content">
          <div>
            <h1>{post.posts_title}</h1>
          </div>
          <div>
            <h2>{post.posts_title}</h2>
          </div>
          <div dangerouslySetInnerHTML={{__html: post.posts_content}}/>
          <div className="article--review">
            <Link to="/article?edit=id">
              <MdDelete size={30} style={{color: "red"}} />
            </Link>
            <Link to="/article?edit=id">
              <CiEdit size={30} style={{color: "blue"}} />
            </Link>
        </div>
        </div>
          <CommentsDisplay />
          <Comments />
    </article>
  )
}

export default ArticlePage; 
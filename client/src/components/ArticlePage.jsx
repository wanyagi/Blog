import React, { useEffect } from 'react'; 
import { Link, useParams } from "react-router-dom"; 
import { fetchPostsByID } from '../redux/postsByIDSlice';
import { deletePost } from '../redux/deletePostSlice';
import { fetchPostToUpdate } from '../redux/getPostToUpdateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md'; 
import { CiEdit } from "react-icons/ci";  
import './ArticlePage.css';
import Comments from './Comments'; 
import CommentsDisplay from './CommentsDisplay';

const ArticlePage = () => {

  const { id } = useParams(); 
  const dispatch = useDispatch(); 
  const { post, loading, error } = useSelector((state) => state.postsbyid); 

  useEffect(() => {
    dispatch(fetchPostsByID(id)); 
  }, [dispatch, id]);  

  const handleEdit = () => {
    dispatch((fetchPostToUpdate(id))); 
  }

  const handleDelete = () => {
    dispatch(deletePost({id})); 
  };

  if (loading) {return <div className="loading--state">Patientez...</div>}
  if (error) {return <div className="error--state">Un article arrivera bientôt.</div>}
  if (!post) return <div>Article not found or loading...</div>

  return (
    <article className="article--section">
        <img className="article--image" src={post.posts_image} alt="articlesimage"/>
        <div className="articles--content">
          <div>
            <h1>{post.posts_title}</h1>
          </div>
          <div>
            <h2>{post.posts_description}</h2>
          </div>
          <div dangerouslySetInnerHTML={{__html: post.posts_content}}/>
          <div className="article--review" state={post}>
            <Link to={`/article?edit=${id}`} onClick={handleEdit}>
              <CiEdit size={30} style={{color: "blue"}} />
            </Link>
            <Link to={`/article?delete=${id}`} onClick={handleDelete}>
              <MdDelete size={30} style={{color: "red"}} />
            </Link>
          </div>
          <CommentsDisplay />
          <Comments />
        </div>
    </article>
  )
}

export default ArticlePage; 
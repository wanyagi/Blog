import React, { useEffect } from 'react'; 
import { Link, useParams, useNavigate } from "react-router-dom"; 
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
  const navigate = useNavigate(); 
  const user = localStorage.getItem('users_role'); 

  useEffect(() => {
    dispatch(fetchPostsByID(id)); 
  }, [dispatch, id]);  

  const handleEdit = () => {dispatch((fetchPostToUpdate(id)))}; 

  const handleDelete = async () => {
    await dispatch(deletePost({id})); 
    navigate('/'); 
  };

  if (loading) {return <div className="loading--state"><div className='article--loading'></div></div>}
  if (error) {return <div className="error--state">Un article arrivera bientôt.</div>}
  if (!post) return <div>Article not found or loading...</div>

  return (
    <article className="article--section">
        <div className="articles--content">
          <div>
            <h1>{post.posts_title}</h1>
          </div>
          <div>
            <h2>{post.posts_description}</h2>
          </div>
          <img className="article--image" src={post.posts_image} alt="articlesimage"/>
          <div dangerouslySetInnerHTML={{__html: post.posts_content}}/>
          {user === 'admin' && (<div className="article--review" state={post}>
            <Link to={`/article/${id}`} onClick={handleEdit}>
              <CiEdit size={30} style={{color: "blue"}} />
            </Link>
            <MdDelete className="delete--icon" size={30} style={{color: "red"}} onClick={handleDelete}/>
          </div>)}
          <div className="comments-header"><hr /><h3>Commentaires</h3><hr /></div>
          <CommentsDisplay />
          <Comments />
        </div>
    </article>
  )
}

export default ArticlePage; 
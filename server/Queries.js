//Queries for registering a new user
const addCredentials = 'INSERT INTO users (users_name, username, users_email, users_password) VALUES ($1, $2, $3, $4)'; 
const getEmail = 'SELECT * FROM users WHERE users_email = $1'; 
//queries for authentication
const getUsername = 'SELECT * FROM users WHERE username = $1';
const getUsersId = 'SELECT * FROM users WHERE id = $1'; 
//Queries for handling posts
const NewPost = 'INSERT INTO Posts (posts_image, posts_title, posts_date, posts_description, posts_category, posts_content) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
const getPosts = 'SELECT * FROM Posts'; 
const getPostsByCategory = 'SELECT * FROM Posts WHERE LOWER(posts_category) = LOWER($1)';
const getPostsByID = 'SELECT * FROM Posts WHERE posts_id = $1';
const editPostByID = 'UPDATE Posts SET posts_image = $1, posts_title = $2, posts_date = $3, posts_description = $4, posts_category = $5, posts_content = $6 WHERE posts_id = $7';
const deletePostByID = 'DELETE FROM Posts WHERE posts_id = $1';
//Queries for handling comments
const NewComment = 'INSERT INTO comments (users_id, posts_id, comment_username, comment) VALUES ($1, $2, $3, $4) RETURNING *';
const getComments = 'SELECT comments.*, users.username FROM comments JOIN users ON comments.users_id = users.users_id WHERE comments.posts_id = $1'; 
const deleteComment = 'DELETE FROM comments WHERE comments_id = $1';

module.exports = { getEmail, getUsersId, addCredentials, getUsername, NewPost, getPosts, getPostsByCategory, getPostsByID, NewComment, getComments, deletePostByID, editPostByID, deleteComment}; 
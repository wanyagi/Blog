//Queries for registering a new user
const addCredentials = 'INSERT INTO users (users_name, username, users_email, users_password) VALUES ($1, $2, $3, $4)'; 
const getEmail = 'SELECT * FROM users WHERE users_email = $1'; 
//queries for authentication
const getUsername = 'SELECT * FROM users WHERE username = $1';
const getUsersId = 'SELECT * FROM users WHERE id = $1'; 
//Queries for handling posts
const postNewPost = 'INSERT INTO blogposts (blogs_file, blogs_titre, blogs_date, blogs_description, blogs_category, blogs_content) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
const getAllPosts = 'SELECT category, id FROM posts WHERE id = $1'; 
const getCategory = 'SELECT * FROM poststest WHERE category = $1'; 
//ImageUrl database insertion 
const insertImageUrl = 'INSERT INTO blogposts (blogs_file, blogs_content) VALUES ($1, $2) RETURNING *';


module.exports = { getEmail, getUsersId, addCredentials, getUsername, postNewPost, getAllPosts, getCategory, insertImageUrl }; 
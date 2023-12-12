//Queries for registering a new user
const getCredentials = 'INSERT INTO users (name, username, email, password) VALUES ($1, $2, $3, $4)'; 
const getEmail = 'SELECT * FROM users WHERE email = $1'; 
//queries for authentication
const getUsername = 'SELECT * FROM users WHERE username = $1';
const getUsersId = 'SELECT * FROM users WHERE id = $1'; 
//Queries for handling posts
const postNewPost = 'INSERT INTO poststest (blogs_file, blogs_titre, blogs_date, blogs_description, blogs_category, blogs_content) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
const getAllPosts = 'SELECT category, id FROM posts WHERE id = $1'; 
const getCategory = 'SELECT * FROM poststest WHERE category = $1'; 



module.exports = { getEmail, getUsersId, getCredentials, getUsername, postNewPost, getAllPosts, getCategory }; 
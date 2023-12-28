CREATE DATABASE BlogSayfemums; 

CREATE TABLE poststest (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    blogs_file BYTEA,
    blogs_titre TEXT,
    blogs_date DATE, 
    blogs_description TEXT,
    blogs_category VARCHAR(255), 
    blogs_content TEXT
); 

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    users_role VARCHAR(50) NOT NULL DEFAULT 'user',
    users_name VARCHAR(255) UNIQUE ,
    username VARCHAR(255) UNIQUE,
    users_email VARCHAR(255) UNIQUE ,
    users_password VARCHAR(255) UNIQUE
); 

CREATE TABLE comments (
    username VARCHAR(255),
    comment VARCHAR(1000)
); 

CREATE TABLE blogposts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    blogs_file BYTEA,
    blogs_titre TEXT,
    blogs_date DATE, 
    blogs_description TEXT,
    blogs_category VARCHAR(255), 
    blogs_content TEXT
);
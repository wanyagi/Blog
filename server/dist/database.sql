CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    users_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    users_role VARCHAR(50) NOT NULL DEFAULT 'user',
    users_name VARCHAR(255) UNIQUE ,
    username VARCHAR(255) UNIQUE,
    users_email VARCHAR(255) UNIQUE ,
    users_password VARCHAR(255) UNIQUE
);

CREATE TABLE Posts (
    posts_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    posts_image VARCHAR,
    posts_title TEXT,
    posts_date DATE, 
    posts_description TEXT,
    posts_category VARCHAR(255), 
    posts_content TEXT
);

CREATE TABLE comments (
    comments_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    users_id uuid REFERENCES users(users_id),
    posts_id uuid REFERENCES Posts(posts_id), 
    comment_username VARCHAR(255),
    comment VARCHAR(1000)
);
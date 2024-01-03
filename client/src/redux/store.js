import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import registerReducer from './registerSlice'; 
import authenticationReducer from './authenticationSlice'; 
import commentReducer from './commentsSlice';
import postsByCategoryReducer from './postsByCategorySlice';
import postsByIDReducer from './postsByIDSlice';
import getCommentsReducer from './getCommentsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer, 
        register: registerReducer, 
        userAuthentication: authenticationReducer, 
        newComment: commentReducer,  
        postsbycategory: postsByCategoryReducer,
        postsbyid: postsByIDReducer, 
        comments: getCommentsReducer,  
    }
}); 

export default store; 
import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import registerReducer from './registerSlice'; 
import authenticationReducer from './authenticationSlice'; 
import commentReducer from './commentsSlice';
import postsByCategoryReducer from './postsByCategorySlice';

export const store = configureStore({
    reducer: {
        blogposts: postsReducer, 
        register: registerReducer, 
        userAuthentication: authenticationReducer, 
        newComment: commentReducer,  
        blogpostsbycategory: postsByCategoryReducer,  
    }
}); 

export default store; 
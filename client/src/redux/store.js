import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import registerReducer from './registerSlice'; 
import authenticationReducer from './authenticationSlice'; 
import commentReducer from './commentsSlice'; 

export const store = configureStore({
    reducer: {
        posts: postsReducer, 
        register: registerReducer, 
        userAuthentication: authenticationReducer, 
        newComment: commentReducer,   
    }
}); 

export default store; 
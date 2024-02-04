import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postSlice';
import registerReducer from './registerSlice'; 
import authenticationReducer from './authenticationSlice'; 
import commentReducer from './commentsSlice';
import postsByCategoryReducer from './postsByCategorySlice';
import postsByIDReducer from './postsByIDSlice';
import getCommentsReducer from './getCommentsSlice';
import newTokenReducer from './refreshAccesTokenSlice'; 
import deleteTokenReducer from './deleteTokenSlice';
import deletePostReducer from './deletePostSlice'; 
import updatedPostReducer from './updatedPostSlice';
import getPostToUpdateReducer from './getPostToUpdateSlice';
import deleteCommentReducer from './deleteCommentsSlice';
import interactionReducer  from './interactionSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer, 
        register: registerReducer, 
        userAuthentication: authenticationReducer, 
        newComment: commentReducer,  
        postsbycategory: postsByCategoryReducer,
        postsbyid: postsByIDReducer, 
        comments: getCommentsReducer,  
        newToken: newTokenReducer, 
        deleteToken: deleteTokenReducer,
        deletePost: deletePostReducer,
        updatedPost: updatedPostReducer,
        posttoupdate: getPostToUpdateReducer,
        deleteComment: deleteCommentReducer, 
        interactions: interactionReducer,
    }
}); 

export default store; 
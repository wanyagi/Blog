import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import DOMPurify from 'dompurify'; 


const URL = process.env.REACT_APP_BLOGPOSTS;

export const fetchPostsByID = createAsyncThunk("posts/fetchPostsByID", async (id, thunkAPI) => {
    try {

      const response = await fetch(`${URL}/${id}`);

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      const sanitize = DOMPurify.sanitize(responseData.posts_content); 
      return {...responseData, posts_content: sanitize}; 


    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {post: null, loading: false, error: ""}; 

export const postsByIDSlice = createSlice({
    name: "postsbyid", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchPostsByID.pending,  (state) => {  
            state.loading = true; 
          })
          .addCase(fetchPostsByID.fulfilled,  (state, action) => {
            state.loading = false; 
            state.post = action.payload; 
          })
          .addCase(fetchPostsByID.rejected, (state,action) => {
            state.error = action.payload; 
          })
    }
}); 

export default postsByIDSlice.reducer; 
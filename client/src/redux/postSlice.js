import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

//const URL = process.env.REACT_APP_BLOGPOSTS; 

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (thunkAPI) => {
    try {

      const response = await fetch("http://localhost:5000/posts");

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      return responseData; 

    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {posts: [], loading: false, error: ""}; 

export const postsSlice = createSlice({
    name: "posts", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(fetchPosts.fulfilled,  (state, action) => {
            state.loading = false;
            state.posts = action.payload; 
            state.error = "";
          })
          .addCase(fetchPosts.rejected, (state,action) => {
            state.loading = false; 
            state.error = action.payload; 
          })
    }
}); 

export default postsSlice.reducer; 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

const URL = process.env.REACT_APP_BLOGPOSTS; 

export const deletePost = createAsyncThunk("post/deletePost", async ({id}, thunkAPI) => {
    try {

      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE", 
        headers: { "Content-Type" : "application/json", }, 
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      return responseData; 

    } catch (error) { 
      console.error(error); 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {posts: [], loading: false, error: ""}; 

export const deletePostSlice = createSlice({
    name: "deletepost", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(deletePost.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(deletePost.fulfilled,  (state, action) => {
            state.loading = false;
            state.posts = action.payload; 
            state.error = "";
          })
          .addCase(deletePost.rejected, (state,action) => {
            state.loading = false; 
            state.error = action.payload; 
          })
    }
}); 

export default deletePostSlice.reducer; 
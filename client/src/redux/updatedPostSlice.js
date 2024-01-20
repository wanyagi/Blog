import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

const URL = `${process.env.REACT_APP_SERVER}/article`; 

export const updatedPost = createAsyncThunk("post/updatedPost", async ( {id, post }, thunkAPI) => {
    try {

      console.log(`${URL}/${id}`)
      const response = await fetch(`${URL}/${id}`, {
        method: "PUT", 
        credentials: "include", 
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(post),  
      });

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      return responseData; 

    } catch (error) { 
      return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {posts: {}, loading: false, error: ""}; 

export const updatedPostSlice = createSlice({
    name: "updatedpost", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(updatedPost.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(updatedPost.fulfilled,  (state, action) => {
            state.loading = false;
            state.updatedpost = action.payload; 
          })
          .addCase(updatedPost.rejected, (state,action) => {
            state.loading = false; 
            state.error = action.payload; 
          })
    }
}); 

export default updatedPostSlice.reducer; 
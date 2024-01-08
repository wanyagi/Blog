import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

const URL = process.env.REACT_APP_BLOGPOSTS; 

export const editPost = createAsyncThunk("post/editPost", async ( {id}, thunkAPI) => {
    try {

      const response = await fetch(`${URL}/${id}`, {
        method: "PUT", 
        credentials: "include", 
        headers: {'Content-Type': "application/json"}, 
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

export const editPostSlice = createSlice({
    name: "editpost", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(editPost.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(editPost.fulfilled,  (state, action) => {
            state.loading = false;
            state.editpost = action.payload; 
            state.error = "";
          })
          .addCase(editPost.rejected, (state,action) => {
            state.loading = false; 
            state.error = action.payload; 
          })
    }
}); 

export default editPostSlice.reducer; 
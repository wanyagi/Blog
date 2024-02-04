import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { fetchComments } from "./getCommentsSlice";

const URL = `${process.env.REACT_APP_SERVER}/comments`; 

export const deleteComment = createAsyncThunk("comment/deleteComment", async ({id, postID}, thunkAPI) => {

    try {
      const response = await fetch(`${URL}/${id}`, {
        method: "DELETE", 
        headers: { "Content-Type" : "application/json", }, 
        credentials: "include",
      });
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error('Network HS');
      } else {
        thunkAPI.dispatch(fetchComments(postID));
        return responseData; 
      }

    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {comment: [], loading: false, error: ""}; 

export const deleteCommentSlice = createSlice({
    name: "deletecomment", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(deleteComment.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(deleteComment.fulfilled,  (state, action) => {
            state.loading = false;
            state.comment = action.payload; 
            state.error = "";
          })
          .addCase(deleteComment.rejected, (state,action) => {
            state.loading = false; 
            state.error = action.payload; 
          })
    }
}); 

export default deleteCommentSlice.reducer; 
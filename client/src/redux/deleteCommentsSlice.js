import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 

const URL = process.env.REACT_APP_COMMENTS; 

export const deleteComment = createAsyncThunk("comment/deleteComment", async ({id}, thunkAPI) => {

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
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_COMMENTS; 

export const comments = createAsyncThunk("comments/addComments", async ({id, comment,}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({ id, comment }),
            headers: { "Content-Type" : "application/json",},
            credentials: "include", 
        }); 
        const responseData = await response.json(); 

        if (!response.ok) {
            throw new Error()
        } else {
            return responseData; 
        }
    } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.message); 
    }
}); 


const initialState = {comments: [], loading: false, error: null, }; 

export const commentSlice = createSlice({
    name: "comments", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(comments.pending, (state) => {
            state.loading = true; 
            state.comments = []; 
            state.error = null; 
          }) 
          .addCase(comments.fulfilled, (state, action) => {
            state.comments = [...state.comments, action.payload];
            state.loading = false;  
            state.error = null; 
          })
          .addCase(comments.rejected, (state, action) => {
            state.loading = false; 
            state.comments = []; 
            state.error = action.payload; 
          })
    }  
}); 

export default commentSlice.reducer; 
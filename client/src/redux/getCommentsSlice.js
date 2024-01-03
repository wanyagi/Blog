import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
//import { fetchPosts } from './postSlice';

const URL = process.env.REACT_APP_COMMENTS; 

export const fetchComments = createAsyncThunk("comments/fetchComments", async (id, thunkAPI) => {
    try {
        const response = await fetch(`${URL}/${id}`); 

        if (!response.ok) {
            throw new Error()
        } 

        const responseData = response.json(); 
        return responseData;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }
}); 


const initialState = {comments: [], loading: false, error: null, }; 

export const getCommentsSlice = createSlice({
    name: "comments", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchComments.pending, (state) => {
            state.loading = true; 
            state.comments = []; 
            state.error = null; 
          }) 
          .addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false; 
            state.comments = action.payload.comment; 
            state.error = null; 
          })
          .addCase(fetchComments.rejected, (state) => {
            state.loading = false; 
            state.comments = []; 
            state.error = "There was an error. Please make sur you're signed in..."
          })
    }  
}); 

export default getCommentsSlice.reducer; 
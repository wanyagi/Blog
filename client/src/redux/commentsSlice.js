import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { fetchComments } from './getCommentsSlice';

const URL = `${process.env.REACT_APP_SERVER}/comments`; 

export const submitComments = createAsyncThunk("submitComments/addComments", async ({id, comment,}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({ id, comment }),
            headers: { "Content-Type" : "application/json",},
            credentials: "include", 
        }); 
        const responseData = await response.json(); 
        console.log(responseData); 

        if (!response.ok) {
            throw new Error()
        } else {
            thunkAPI.dispatch(fetchComments(id))
            return responseData; 
        }
    } catch (error) {
        console.log(error); 
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
    .addCase(submitComments.pending, (state) => {
        state.loading = true; 
        state.comments = []; 
        state.error = null; 
    }) 
        .addCase(submitComments.fulfilled, (state, action) => {
        state.comments = action.payload;  
        state.loading = false;    
        state.error = null; 
    })
    .addCase(submitComments.rejected, (state, action) => {
        state.loading = false; 
        state.comments = []; 
        state.error = action.payload; 
    })
    }  
}); 

export default commentSlice.reducer; 
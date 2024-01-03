import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_COMMENTS; 

export const comments = createAsyncThunk("comments/addComments", async ({posts_id, userId, username, comment}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({posts_id, user: userId, username, comment}), 
            headers: { "Content-Type" : "application/json"}
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
    reducers: {
        addComment: (state, action) => {
            state.comments.push(action.payload); 
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(comments.pending, (state) => {
            state.loading = true; 
            state.comments = []; 
            state.error = null; 
          }) 
          .addCase(comments.fulfilled, (state, action) => {
            state.loading = false; 
            state.comments = action.payload.comment; 
            state.error = null; 
          })
          .addCase(comments.rejected, (state) => {
            state.loading = false; 
            state.comments = []; 
            state.error = "There was an error. Please make sur you're signed in..."
          })
    }  
}); 

export const { addComment } = commentSlice.actions;

export default commentSlice.reducer; 
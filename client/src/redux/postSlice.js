import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = process.env.REACT_APP_API_KEY; 

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (thunkAPI) => {
    try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Network HS');
        }

        const responseData = await response.json();
        console.log(responseData)
        return responseData; 


    } catch (error) {
        console.error(error);
        return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {posts: {}, loading: false, error: ""}; 

export const postsSlice = createSlice({
    name: "posts", 
    initialState, 
    reducers: {
        addPost: (state, action) => {
            state.posts.push(action.payload); 
        }
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchPosts.pending,  (state) => {
            state.loading = true; 
          })
          .addCase(fetchPosts.fulfilled,  (state, action) => {
            state.loading = false; 
            state.posts = action.payload; 
            state.error = ""
          })
          .addCase(fetchPosts.rejected, (state,action) => {
            state.loading = false; 
            state.posts = []; 
            state.error = action.payload; 
          })
    }
}); 

export const { addPost } = postsSlice.actions; 

export default postsSlice.reducer; 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_BLOGPOSTS; 

export const fetchPostToUpdate = createAsyncThunk("posttoupdate/fetchPostToUpdate", async (id, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/${id}`); 

      if (!response.ok) {
          throw new Error()
      } 

      const responseData = await response.json(); 
      return responseData;

    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
}); 


const initialState = {post: {}, loading: false, error: null, }; 

export const getPostToUpdateSlice = createSlice({
    name: "posttoupdate", 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchPostToUpdate.pending, (state) => {
            state.loading = true; 
            state.post = {}; 
            state.error = null; 
          }) 
          .addCase(fetchPostToUpdate.fulfilled, (state, action) => {
            state.loading = false; 
            state.post = action.payload; 
            state.error = null; 
          })
          .addCase(fetchPostToUpdate.rejected, (state, action) => {
            state.loading = false; 
            state.post = {}; 
            state.error = action.payload;
          })
    }  
}); 

export default getPostToUpdateSlice.reducer; 
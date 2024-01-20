import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = `${process.env.REACT_APP_SERVER}/category`;

export const fetchPostsByCategory = createAsyncThunk("posts/fetchPostsByCategory", async (category, thunkAPI) => {
    try {

      const response = await fetch(`${URL}/${category}`);

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      return responseData; 

    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {posts: [], loading: false, error: ""}; 

export const postsByCategorySlice = createSlice({
    name: "postsbycategory", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchPostsByCategory.pending,  (state) => {  
            state.loading = true; 
          })
          .addCase(fetchPostsByCategory.fulfilled,  (state, action) => {
            state.loading = false; 
            state.posts = action.payload.sort((nouveau, vieux) => {
              const récent = new Date(nouveau.date);
              const ancien = new Date(vieux.date);
              return récent - ancien; 
            }); 
            state.error = ""
          })
          .addCase(fetchPostsByCategory.rejected, (state,action) => {
            state.loading = false; 
            state.posts = []; 
            state.error = action.payload; 
          })
    }
}); 

export default postsByCategorySlice.reducer; 
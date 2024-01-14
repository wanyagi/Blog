import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = process.env.REACT_APP_REFRESHTOKEN;

export const deleteToken = createAsyncThunk("accessToken/deleteToken", async (thunkAPI) => {
  try {
    const response = await fetch(URL, {
      method: "DELETE", 
      credentials: "include", 
    }); 

    if(!response.ok) {
      throw new Error("something went wrong"); 
    }; 

  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); 
  }
}); 

const initialState = {authenticated: true, loading: false, error: false};

export const deleteTokenSlice = createSlice({
  name: "deleteToken", 
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder 
    .addCase(deleteToken.pending, (state) => {
      state.loading = true; 
    })
    .addCase(deleteToken.fulfilled, (state) => {
      state.authenticated = false; 
    })
    .addCase(deleteToken.rejected, (state, action) => {
      state.error = action.payload; 
    }); 
  }
}); 

export default deleteTokenSlice.reducer; 
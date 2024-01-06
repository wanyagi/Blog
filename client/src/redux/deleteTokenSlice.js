import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = process.env.REACT_APP_REFRESHTOKEN;

export const deleteTokens = createAsyncThunk("accessToken/deletesTokesn", async (thunkAPI) => {
  try {
    const response = await fetch(URL, {
      method: "DELETE", 
      credentials: "include", 
    }); 

    if(!response.ok) {
      throw new Error("aurevoir"); 
    }

    const responsedata = await response.json(); 
    return responsedata; 
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
    .addCase(deleteTokens.pending, (state) => {
      state.loading = true; 
    })
    .addCase(deleteTokens.fulfilled, (state) => {
      state.loading = false; 
      state.authenticated = null; 
    })
    .addCase(deleteTokens.rejected, (state, action) => {
      state.loading = true;
      state.error = action.payload; 
    }); 
  }
}); 

export default deleteTokenSlice.reducer; 
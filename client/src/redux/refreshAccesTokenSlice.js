import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = process.env.REACT_APP_REFRESHTOKEN;

export const fetchNewAccesToken = createAsyncThunk("accessToken/fetchNewAccessToken", async (thunkAPI) => {
  try {
    const response = await fetch(URL, {
      method: "POST", 
      credentials: "include", 
    }); 

    if(!response.ok) {
      throw new Error("Connectes toi"); 
    };

  } catch (error) {
    console.error(error); 
    return thunkAPI.rejectWithValue(error.message); 
  }
}); 

const initialState = {accesToken: null, loading: false, error: false};

export const newTokenSlice = createSlice({
  name: "accessToken", 
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder 
    .addCase(fetchNewAccesToken.pending, (state) => {
      state.loading = true; 
    })
    .addCase(fetchNewAccesToken.fulfilled, (state, action) => {
      state.loading = false; 
    })
    .addCase(fetchNewAccesToken.rejected, (state, action) => {
      state.error = action.payload; 
    }); 
  }
}); 

export default newTokenSlice.reducer; 
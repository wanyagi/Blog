import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const URL = `${process.env.REACT_APP_SERVER}/register`;

export const registerUser = createAsyncThunk("user/registerUser", async ({name, username, email, password}, thunkAPI) => {
    try {
      const response = await fetch(URL, {
        method: "POST",  
        body: JSON.stringify({name, username, email, password}),
        headers: {'Content-Type': 'application/json'},
      }); 

      if (!response.ok) {
        throw new Error("tu es ici");
      }; 

      const responseData = await response.json(); 
      return responseData;

    } catch (error) { 
      return thunkAPI.rejectWithValue(error.message); 
    }
}); 

const initialState = {user: {}, loading: false, error: "",  }; 

export const registerSlice = createSlice({
    name: "newUser", 
    initialState, 
    reducers: {}, 
    extraReducers: (builder) => {
        builder 
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false; 
            state.error = false; 
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload; 
          })
    }, 
}); 

console.log(registerSlice); 

export default registerSlice.reducer; 
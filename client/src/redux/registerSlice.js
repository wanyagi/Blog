import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const URL = process.env.REACT_APP_REGISTER;

export const registerUser = createAsyncThunk("user/registerUser", async ({name, username, email, password}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
          method: "POST",  
          body: JSON.stringify({name, username, email, password}),
          headers: {'Content-Type': 'application/json'},
        }); 
        const responseData = await response.json(); 

        if (!response.ok) {
          console.log(responseData.errors); 
          return thunkAPI.rejectWithValue(responseData.errors);
        }
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
            if (action.payload && Array.isArray(action.payload)) {
              state.error = action.payload.reduce((accumulator, error) => {
                  accumulator[error.param] = error.msg;
                  return accumulator;
              }, {});
          } else {
            state.error = { general: "Réessayez plus tard" };
          } 
          })
    }, 
}); 

console.log(registerSlice); 

export default registerSlice.reducer; 
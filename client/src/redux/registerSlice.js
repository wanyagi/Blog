import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const URL = process.env.REACT_APP_SERVER;

export const fetchUser = createAsyncThunk("user/fetchUser", async ({name, username, email, password}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
          method: "POST",  
          body: JSON.stringify({name, username, email, password}),
          headers: {'Content-Type': 'application/json'},
        }); 
        const responseData = await response.json(); 

        if (!response.ok) {
          throw new Error("vérifier vos coordonées")
        }
        return responseData; 
    } catch (error) {
        console.error(error.message);  
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
          .addCase(fetchUser.pending, (state) => {
            state.loading = true;
          })
          .addCase(fetchUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.loading = false; 
            state.error = false; 
          })
          .addCase(fetchUser.rejected, (state, action) => {
            state.error = action.payload; 
            state.user = ""; 
            state.loading = false; 
          })
    }, 
}); 

console.log(registerSlice); 

export default registerSlice.reducer; 
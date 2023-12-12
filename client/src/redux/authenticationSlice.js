import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_SERVER; 

export const Authentication = createAsyncThunk("user/authentication", async ({username, password}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
        }); 
        const responseData = await response.json(); 
         
        if (!response.ok) {
            throw new Error("vérifiez vos corrdonnées...")
        }
        return responseData; 
    } catch (error) {
        //console.error(error.message); 
        return thunkAPI.rejectWithValue(error.message); 
    }; 
}); 

const initialState = { user: "", loggedIn: false, loading: "", error: "", };

export const authenticationSlice = createSlice({
    name: "userAuthentication", 
    initialState, 
    reducers: {
        loggout: (state) => {
            state.user = ""; 
            state.loggedIn = false; 
            state.loading = false; 
            state.error = null;
        }, 
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(Authentication.pending, (state) => {
              state.loading = true; 
          }) 
          .addCase(Authentication.fulfilled, (state, action) => {
            state.user = action.payload.username; 
            state.loggedIn = true;
            state.loading = false;
            state.error = null; 
          })
          .addCase(Authentication.rejected, (state) => {
            state.loading = false; 
            state.loggedIn = false; 
            state.error = "Il y a eu une erreur... rééssayez plus tard."; 
          })
    }, 
}); 

export const { loggout } = authenticationSlice.actions; 

export default authenticationSlice.reducer; 
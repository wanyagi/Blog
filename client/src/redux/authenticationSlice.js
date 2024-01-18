import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_LOGIN;

export const Authentication = createAsyncThunk("user/authentication", async ({username, password}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: "include", 
        }); 
        const responseData = await response.json(); 
        
         
        if (response.ok) { 
            localStorage.setItem('users_role', responseData.users_role); 
            return responseData; 
        } else {
            throw new Error("vérifiez vos corrdonnées..."); 
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }; 
}); 

const initialState = { user: "", loggedIn: false, loading: "", error: "", users_role: '', };

export const authenticationSlice = createSlice({
    name: "userAuthentication", 
    initialState, 
    reducers: {
        logIn: (state) => {
            state.loggedIn = true; 
            localStorage.setItem('loggedIn', 'true'); 
        }, 
        logOut: (state) => {
            state.user = ""; 
            state.loggedIn = false; 
            state.loading = false; 
            state.error = null;
            localStorage.removeItem('loggedIn'); 
        }, 
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(Authentication.pending, (state) => {
            state.loading = true; 
          }) 
          .addCase(Authentication.fulfilled, (state, action) => {
            state.user = action.payload; 
            state.loggedIn = true;
            state.loading = false;
            state.error = null;
            state.users_role = action.payload.users_role; 
            localStorage.setItem('loggedIn', 'true'); 
          })
          .addCase(Authentication.rejected, (state, action) => {
            state.error = action.payload; 
          })
    }, 
}); 

export const { logOut, logIn } = authenticationSlice.actions; 

export default authenticationSlice.reducer; 
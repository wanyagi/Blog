import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = `${process.env.REACT_APP_SERVER}/login`;

export const Authentication = createAsyncThunk("user/authentication", async ({username, password}, thunkAPI) => {
    try {
        const response = await fetch(URL, {
            method: "POST", 
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: "include", 
        }); 
        const responseData = await response.json(); 
        
         
        if (!response.ok) { 
            return thunkAPI.rejectWithValue(responseData); 
        } else {
            return responseData;
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.toString()); 
    }; 
}); 

const initialState = { user: "", loggedIn: false, loading: "", error: "", users_role: '', };

export const authenticationSlice = createSlice({
    name: "userAuthentication", 
    initialState, 
    reducers: {
        logIn: (state, action) => {
            if (action.payload && action.payload.users_role !== undefined) {
              state.users_role = action.payload.users_role;   
            };
            state.loggedIn = true; 
        }, 
        logOut: (state) => {
            state.user = ""; 
            state.loggedIn = false; 
            state.loading = false; 
            state.error = null;
            localStorage.clear(); 
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
            localStorage.setItem('users_role', action.payload.users_role); 
          })
          .addCase(Authentication.rejected, (state, action) => {
            state.error = action.payload; 
          })
    }, 
}); 

export const { logOut, logIn } = authenticationSlice.actions; 

export default authenticationSlice.reducer; 
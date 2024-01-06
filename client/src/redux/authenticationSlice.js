import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 

const URL = process.env.REACT_APP_LOGIN;
const tokenURL = process.env.REACT_APP_REFRESHTOKEN

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
            console.log(responseData); 
            return responseData; 
        } else {
            throw new Error("vérifiez vos corrdonnées..."); 
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }; 
}); 

export const refreshToken = createAsyncThunk("user/refreshToken", async (thunkAPI) => {
    try {
        const response = await fetch(tokenURL, {
            method: "POST", 
            credentials: "include", 
        }); 
        const responseData = await response.json(); 
        
         
        if (response.ok) {
            return {...responseData, accessTokenExpiryTime: responseData.exp};  
        } else {
            throw new Error("pas de token"); 
        }
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message); 
    }; 
}); 

const initialState = { user: "", loggedIn: false, loading: "", error: "", users_role: '', accessTokenExpiryTime: null };

export const authenticationSlice = createSlice({
    name: "userAuthentication", 
    initialState, 
    reducers: {
        loggout: (state) => {
            state.user = ""; 
            state.loggedIn = false; 
            state.loading = false; 
            state.error = null;
            state.accessTokenExpiryTime = null; 
            localStorage.removeItem('users_role'); 
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
            state.accessTokenExpiryTime = action.payload.accessTokenExpiryTime; 
            state.users_role = action.payload.users_role; 
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
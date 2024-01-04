import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


const URL = process.env.REACT_APP_REFRESHTOKEN;

export const fetchRefreshToken = createAsyncThunk("tokenrefresh/fetchRefreshToken", async (thunkAPI) => {
    try {

        const state = getState();
        const refreshToken = state.freshtoken.refreshToken;  

      const response = await fetch(URL, {method: 'GET', credentials: 'include'  });

      if (!response.ok) {
        throw new Error('Network HS');
      }

      const responseData = await response.json();
      return responseData.accessToken; 


    } catch (error) { 
       return thunkAPI.rejectWithValue(error.message);  
    }
})


const initialState = {accsesToken: null, refreshTokenSlice: null, loading: false, error: ""}; 

export const refreshTokenSlice = createSlice({
    name: "freshToken", 
    initialState, 
    reducers: {
        setAccessToken : (state, action) => {
            state.accsesToken = action.payload
        },
        setRefreshToken : (state, action) => {
            state.refreshToken = action.payload
        },
        clearToken : (state) => {
            state.accsesToken = null
            state.refreshToken = null
        },
    }, 
    extraReducers: (builder) => {
        builder
          .addCase(fetchRefreshToken.pending,  (state) => {  
            state.loading = true; 
          })
          .addCase(fetchRefreshToken.fulfilled,  (state, action) => {
            state.loading = false; 
            state.freshToken = action.payload; 
          })
          .addCase(fetchRefreshToken.rejected, (state,action) => {
            state.error = action.payload; 
          })
    }
}); 

export const { setAccessToken, setRefreshToken, clearToken } = refreshTokenSlice.actions; 
export default refreshTokenSlice.reducer; 
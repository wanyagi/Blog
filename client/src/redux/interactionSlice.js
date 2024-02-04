import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {likes: parseInt(localStorage.getItem('likes')) ||  0, claps: parseInt(localStorage.getItem('claps')) ||  0,  loading: false, error: ""}; 

export const interactionSlice = createSlice({
  name: "interactions", 
  initialState, 
  reducers: {
    addLike: (state) => {state.likes += 1; localStorage.setItem('likes', state.likes.toString());}, 
    addClap: (state) => {state.claps += 1; localStorage.setItem('claps', state.claps.toString());}, 
    setLoading: (state, action) => {state.loading = action.payload}, 
    setError: (state, action) => {state.error = action.payload}, 
  }, 
}); 

export const { addLike, addClap, setLoading, setError } = interactionSlice.actions; 

export const likes = (state) => state.interactions.likes;
export const claps = (state) => state.interactions.claps;

export default interactionSlice.reducer; 
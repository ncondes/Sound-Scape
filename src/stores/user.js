import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      isUserLoggedIn: false,
      errorMessage: null,
   },
   reducers: {
      register: (state) => {
         state.isUserLoggedIn = true;
      },
      login: (state) => {
         state.isUserLoggedIn = true;
         state.errorMessage = null;
      },
      logout: (state, {payload}) => {
         state.isUserLoggedIn = false;
         state.errorMessage = payload?.errorMessage; 
      }
   }
})

export const { register, login, logout} = userSlice.actions

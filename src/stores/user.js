import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      isUserLoggedIn: false,
      message: null,
      status: 'not-authenticated'  //cheking, not authenticated, authenticated
   },
   reducers: {
      register: (state) => {
         state.isUserLoggedIn = true
         state.message = 'Register successful'
         state.status = 'authenticated'
      },
      login: (state) => {
         state.isUserLoggedIn = true
         state.message = 'Login successful'
         state.status = 'authenticated'
      },
      logout: (state, { payload }) => {
         state.message = payload?.errorMessage
         state.isUserLoggedIn = false
         state.status = 'not-authenticated'
      },
      checkingCredentials: (state) =>{
         state.message = 'Checking...'
         state.status= 'checking'; 
      }
   }
})

export const { register, login, logout, checkingCredentials} = userSlice.actions

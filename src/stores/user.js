import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
   name: 'user',
   initialState: {
      isUserLoggedIn: false,
   },
   reducers: {
      register: (state) => {
         state.isUserLoggedIn = true
      },
      login: (state) => {
         state.isUserLoggedIn = true
      },
      logout: (state) => {
         state.isUserLoggedIn = false
      }
   }
})

export const { register, login, logout} = userSlice.actions

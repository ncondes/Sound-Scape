import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './modal'
import { userSlice } from './user'

export const store = configureStore({
   reducer: {
    modal: modalSlice.reducer,
    user: userSlice.reducer
   }
})

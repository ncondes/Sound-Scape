import { configureStore } from '@reduxjs/toolkit'
import { modalSlice } from './modal'

export const store = configureStore({
   reducer: {
    modal: modalSlice.reducer
   }
})

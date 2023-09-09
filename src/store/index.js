import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { modalSlice } from './modal/modal.slice'
import { alertSlice } from './alert/alert.slice'

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
})

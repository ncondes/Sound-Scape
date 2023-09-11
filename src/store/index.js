import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { authModalSlice } from './auth-modal/authModal.slice'
import { alertSlice } from './alert/alert.slice'

export const store = configureStore({
  reducer: {
    'auth-modal': authModalSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
  },
})

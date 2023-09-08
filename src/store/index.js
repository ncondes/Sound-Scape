import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { modalSlice } from './modal/modal.slice'
import { uploadsSlice } from './uploads/uploads.slice'

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    auth: authSlice.reducer,
    uploads: uploadsSlice.reducer,
  },
})

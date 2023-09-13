import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { authModalSlice } from './auth-modal/authModal.slice'
import { alertSlice } from './alert/alert.slice'
import { uploadsSlice } from './uploads/uploads.slice'
import { uploadModalSlice } from './upload-modal/uploadModal.slice'
import { manageSongsSlice } from './manage-songs/manageSongs.slice'

export const store = configureStore({
  reducer: {
    'auth-modal': authModalSlice.reducer,
    'upload-modal': uploadModalSlice.reducer,
    'manage-songs': manageSongsSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    uploads: uploadsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

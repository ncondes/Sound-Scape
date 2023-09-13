import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth/auth.slice'
import { authModalSlice } from './auth-modal/authModal.slice'
import { alertSlice } from './alert/alert.slice'
import { uploadsSlice } from './uploads/uploads.slice'
import { manageSongsSlice } from './manage-songs/manageSongs.slice'
import { uploadSongsModalSlice } from './upload-songs-modal/uploadSongsModal.slice'

export const store = configureStore({
  reducer: {
    'auth-modal': authModalSlice.reducer,
    'upload-songs-modal': uploadSongsModalSlice.reducer,
    'manage-songs': manageSongsSlice.reducer,
    auth: authSlice.reducer,
    alert: alertSlice.reducer,
    uploads: uploadsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

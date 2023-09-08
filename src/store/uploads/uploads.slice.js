import { createSlice } from '@reduxjs/toolkit'

export const uploadsSlice = createSlice({
  name: 'uploads',
  initialState: {
    message: null,
    status: 'not-uploading',
  },
  reducers: {
    uploadSong: (state) => {
      state.message = 'Uploading...'
      state.status = 'uploading'
    },
  },
})

export const { uploadSong } = uploadsSlice.actions

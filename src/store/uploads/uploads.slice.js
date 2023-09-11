import { createSlice } from '@reduxjs/toolkit'

export const uploadsSlice = createSlice({
  name: 'uploads',
  initialState: {
    uploads: [],
  },
  reducers: {
    uploadSong: (state, action) => {
      state.uploads.push(action.payload)
    },
    setUpload: (state, action) => {
      // use Object.assign to avoid incorrect serializing of the task
      state.uploads.map((upload) => (upload.id === action.payload.id ? Object.assign(upload, action.payload) : upload))
    },
  },
})

export const { uploadSong, setUpload } = uploadsSlice.actions

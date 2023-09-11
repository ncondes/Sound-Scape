import { createSlice } from '@reduxjs/toolkit'

export const uploadsSlice = createSlice({
  name: 'uploads',
  initialState: {
    uploads: [],
  },
  reducers: {
    upload: (state, action) => {
      state.uploads.push(action.payload)
    },
    setUpload: (state, action) => {
      console.log(state.uploads)
      state.uploads.map((upload) => (upload.id === action.payload.id ? { ...upload, ...action.payload } : upload))
    },
  },
})

export const { upload, setUpload } = uploadsSlice.actions

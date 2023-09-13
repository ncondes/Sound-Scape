import { createSlice } from '@reduxjs/toolkit'

export const manageSongsSlice = createSlice({
  name: 'manage-songs',
  initialState: {
    songs: [],
  },
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload
    },
  },
})

export const { setSongs } = manageSongsSlice.actions

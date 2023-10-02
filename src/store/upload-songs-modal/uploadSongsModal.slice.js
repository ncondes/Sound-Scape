import { createSlice } from '@reduxjs/toolkit'

export const uploadSongsModalSlice = createSlice({
  name: 'upload-songs-modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true
    },
    closeModal: (state) => {
      state.isOpen = false
    },
  },
})

export class UploadSongsModalActions {
  static openModal = uploadSongsModalSlice.actions.openModal
  static closeModal = uploadSongsModalSlice.actions.closeModal
}

export const { openModal, closeModal } = uploadSongsModalSlice.actions

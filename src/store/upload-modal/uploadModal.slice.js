import { createSlice } from '@reduxjs/toolkit'

export const uploadModalSlice = createSlice({
  name: 'upload-modal',
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

export const { openModal, closeModal } = uploadModalSlice.actions

import { createSlice } from '@reduxjs/toolkit'

export const authModalSlice = createSlice({
  name: 'auth-modal',
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

export const { openModal, closeModal } = authModalSlice.actions

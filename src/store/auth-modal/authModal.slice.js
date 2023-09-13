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

export class AuthModalActions {
  static openModal = authModalSlice.actions.openModal
  static closeModal = authModalSlice.actions.closeModal
}

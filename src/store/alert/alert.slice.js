import { createSlice } from '@reduxjs/toolkit'

export const AlertVariants = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO',
  WARNING: 'WARNING',
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    isOpen: false,
    message: '',
    variant: '',
  },
  reducers: {
    setAlert: (state, action) => {
      state.isOpen = action.payload.isOpen
      state.message = action.payload.message
      state.variant = action.payload.variant
    },
    closeAlert: (state) => {
      state.isOpen = false
      state.message = ''
      state.variant = ''
    },
  },
})

export const { setAlert, closeAlert } = alertSlice.actions

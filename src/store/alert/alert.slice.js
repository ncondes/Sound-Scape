import { createSlice } from '@reduxjs/toolkit'

export const AlertVariants = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO',
  WARNING: 'WARNING',
}

const initialState = {
  isOpen: false,
  message: '',
  variant: '',
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action) => {
      state.isOpen = true
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

export class AlertActions {
  static showAlert = alertSlice.actions.showAlert
  static closeAlert = alertSlice.actions.closeAlert
}

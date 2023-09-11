import { createSlice } from '@reduxjs/toolkit'

export const Status = {
  CHECKING: 'CHECKING',
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED',
}

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    isUserLoggedIn: false,
    status: Status.NOT_AUTHENTICATED,
  },
  reducers: {
    register: (state) => {
      state.isUserLoggedIn = true
      state.status = Status.AUTHENTICATED
    },
    login: (state) => {
      state.isUserLoggedIn = true
      state.status = Status.AUTHENTICATED
    },
    logout: (state) => {
      state.isUserLoggedIn = false
      state.status = Status.NOT_AUTHENTICATED
    },
    checkingCredentials: (state) => {
      state.status = Status.CHECKING
    },
  },
})

export const { register, login, logout, checkingCredentials } = authSlice.actions

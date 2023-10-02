import { createSlice } from '@reduxjs/toolkit'

export const AuthStatus = {
  CHECKING: 'CHECKING',
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED',
}

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    status: AuthStatus.NOT_AUTHENTICATED,
  },
  reducers: {
    login: (state) => {
      state.status = AuthStatus.AUTHENTICATED
    },
    logout: (state) => {
      state.status = AuthStatus.NOT_AUTHENTICATED
    },
    checking: (state) => {
      state.status = AuthStatus.CHECKING
    },
  },
})

export class AuthActions {
  static login = authSlice.actions.login
  static logout = authSlice.actions.logout
  static checking = authSlice.actions.checking
}

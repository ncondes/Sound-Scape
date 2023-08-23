import { createSelector } from '@reduxjs/toolkit'

export const selectAuthMessage = createSelector(
  (state) => state.auth,
  (auth) => auth.message,
)

export const selectIsUserLoggedIn = (state) => state.auth.isUserLoggedIn

export const selectAuthStatus = (state) => state.auth.status

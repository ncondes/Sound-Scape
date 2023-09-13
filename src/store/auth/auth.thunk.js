import { getFirebaseErrorMessage } from '@/firebase/errors'
import { AuthModalActions } from '../auth-modal/authModal.slice'
import { AuthActions } from './auth.slice'
import { AlertActions, AlertVariants } from '../alert'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '../../services'

export class AuthThunk {
  static login = createAsyncThunk('auth/login', async (payload, thunkAPI) => {
    // set status to checking
    thunkAPI.dispatch(AuthActions.checking())
    // make request
    const response = await AuthService.login(payload)
    // ! handle unsuccessful response
    if (!response.success) {
      const message = getFirebaseErrorMessage(response.errorMessage)
      // set status to not authenticated
      thunkAPI.dispatch(AuthActions.logout())
      // show error alert
      thunkAPI.dispatch(AlertActions.showAlert({ message, variant: AlertVariants.ERROR }))
      return
    }
    // * handle successful response
    // set status to authenticated
    thunkAPI.dispatch(AuthActions.login())
    // show success alert
    thunkAPI.dispatch(AlertActions.showAlert({ message: 'Login successful', variant: AlertVariants.SUCCESS }))
    // close auth modal
    thunkAPI.dispatch(AuthModalActions.closeModal())
  })

  static register = createAsyncThunk('auth/register', async (payload, thunkAPI) => {
    // set status to checking
    thunkAPI.dispatch(AuthActions.checking())
    // make request
    const response = await AuthService.register(payload)
    // ! handle unsuccessful response
    if (!response.success) {
      const message = getFirebaseErrorMessage(response.errorMessage)
      // set status to not authenticated
      thunkAPI.dispatch(AuthActions.logout())
      // show error alert
      thunkAPI.dispatch(AlertActions.showAlert({ message, variant: AlertVariants.ERROR }))
      return
    }
    // * handle successful response
    // set status to authenticated
    thunkAPI.dispatch(AuthActions.login())
    // show success alert
    thunkAPI.dispatch(AlertActions.showAlert({ message: 'Registration successful', variant: AlertVariants.SUCCESS }))
    // close auth modal
    thunkAPI.dispatch(AuthModalActions.closeModal())
  })

  static logout = createAsyncThunk('auth/logout', async (payload, thunkAPI) => {
    // make request
    const response = await AuthService.logout()
    // ! handle unsuccessful response
    if (!response.success) {
      const message = getFirebaseErrorMessage(response.errorMessage)
      // set status to not authenticated
      thunkAPI.dispatch(AuthActions.logout())
      // show error alert
      thunkAPI.dispatch(AlertActions.showAlert({ message, variant: AlertVariants.ERROR }))
      return
    }
    // * handle successful response
    // set status to not authenticated
    thunkAPI.dispatch(AuthActions.logout())
    // show success alert
    thunkAPI.dispatch(AlertActions.showAlert({ message: 'Logout successful', variant: AlertVariants.SUCCESS }))
  })
}

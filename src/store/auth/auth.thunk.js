import { getFirebaseErrorMessage } from '@/firebase/errors'
import { showAlert } from '../alert/alert.thunk'
import { closeModal } from '../auth-modal/authModal.slice'
import { loginUser, logoutUser, registerUser } from './auth.provider'
import { checkingCredentials, login, logout, register } from './auth.slice'
import { AlertVariants } from '../alert/alert.slice'

export const startLogin =
  ({ email, password }) =>
  async (dispatch) => {
    // set status to checking
    dispatch(checkingCredentials())
    // make request
    const resp = await loginUser({ email, password })
    // handle unsuccessful response
    if (!resp.success) {
      const message = getFirebaseErrorMessage(resp.errorMessage)
      dispatch(logout())
      dispatch(showAlert({ message, variant: AlertVariants.ERROR }))
      return
    }
    // handle successful response
    dispatch(login())
    dispatch(closeModal())
    dispatch(showAlert({ message: 'Login successful', variant: AlertVariants.SUCCESS }))
  }

export const startCreatingUser = (userData) => async (dispatch) => {
  // set status to checking
  dispatch(checkingCredentials())
  // make request
  const resp = await registerUser(userData)
  // handle unsuccessful response
  if (!resp.success) {
    const message = getFirebaseErrorMessage(resp.errorMessage)
    dispatch(logout())
    dispatch(showAlert({ message, variant: AlertVariants.ERROR }))
    return
  }
  // handle successful response
  dispatch(register())
  dispatch(closeModal())
  dispatch(showAlert({ message: 'Registration successful', variant: AlertVariants.SUCCESS }))
}

export const startLogout = () => async (dispatch) => {
  // make request
  await logoutUser()
  // handle successful response
  dispatch(logout())
  dispatch(showAlert({ message: 'Logout successful', variant: AlertVariants.SUCCESS }))
}

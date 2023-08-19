import { loginUser, logoutFirebase, registerUser } from './auth.provider'
import { checkingCredentials, login, logout, register, setMessage } from './auth.slice'

export const chekingAuthentication = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials())
  }
}

export const startLogin = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await loginUser({ email, password })
    if (!resp.ok) {
      dispatch(setMessage(resp.errorMessage))
      dispatch(logout())
      return
    }

    dispatch(login())
  }
}

export const startCreatingUser = (userData) => {
  return async (dispatch) => {
    dispatch(checkingCredentials())

    const resp = await registerUser(userData)
    if (!resp.ok) {
      dispatch(setMessage(resp.errorMessage))
      dispatch(logout())
      return
    }

    dispatch(register())
  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase()
    dispatch(logout())
  }
}

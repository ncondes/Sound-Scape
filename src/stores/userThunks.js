import { loginUser, logoutFirebase, registerUser } from '../firebase/providers'
import { checkingCredentials, login, logout, register } from './user'

export const chekingAuthentication = () => {
   return async (dispatch) => {
      dispatch(checkingCredentials())
   }
}

export const startLogin = ({ email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials())

      const data = await loginUser({ email, password })
      if (!data.ok) return dispatch(logout(data))

      dispatch(login())
   }
}

export const startCreatingUser = ({ email, password }) => {
   return async (dispatch) => {
      dispatch(checkingCredentials())

      const data = await registerUser({ email, password })
      if (!data.ok) return dispatch(logout(data))

      dispatch(register())
   }
}

export const startLogout = () => {
   return async (dispatch) => {
      await logoutFirebase()
      dispatch(logout({}))
   }
}

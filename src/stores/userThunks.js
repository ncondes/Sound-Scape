import { loginUser, logoutFirebase, registerUser } from "../firebase/providers"
import { login, logout } from "./user"


export const startLogin = ({ email, password }) => {
   return async (dispatch) => {
      const data = await loginUser({ email, password })
      if( !data.ok ) return dispatch(logout( data));

      dispatch(login())
   }
}
export const startCreatingUser = ({ email, password}) => {
   return async (dispatch) => {
      const data = await registerUser({ email, password }) 
      if (!data.ok) return dispatch(logout(data))
      dispatch(login())
   }
}

export const startLogout = () => {
   return async (dispatch) => {
      await logoutFirebase()
      dispatch(logout({}))
   }
}


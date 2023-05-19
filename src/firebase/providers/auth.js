import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../'
import { registerUserData } from '../docs/user'

export const registerUser = async ({ email, password, name, age, country }) => {
   try {
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      registerUserData(credentials.user.uid, name, email, age, country)
      return { ok: true }
   } catch (error) {
      const errorMessage = error.message
      return { ok: false, errorMessage }
   }
}

export const loginUser = async ({ email, password }) => {
   try {
      const credentials = await signInWithEmailAndPassword(auth, email, password)
      return { ok: true }
   } catch (error) {
      const errorMessage = error.message
      return { ok: false, errorMessage }
   }
}

export const logoutFirebase = async () => {
   return await signOut(auth)
}

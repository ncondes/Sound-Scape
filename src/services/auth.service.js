import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

export class AuthService {
  static async register({ name, email, password, age, country }) {
    try {
      // create user
      const credentials = await createUserWithEmailAndPassword(auth, email, password)
      // store user data in firestore
      await setDoc(doc(db, 'users', credentials.user.uid), {
        name,
        email,
        age,
        country,
      })

      return { success: true, data: null, error: null }
    } catch (error) {
      return { success: false, data: null, error: error.message }
    }
  }

  static async login({ email, password }) {
    try {
      // login user
      await signInWithEmailAndPassword(auth, email, password)

      return { success: true, data: null, error: null }
    } catch (error) {
      return { success: false, data: null, error: error.message }
    }
  }

  static async logout() {
    try {
      // logout user
      await signOut(auth)

      return { success: true, data: null, error: null }
    } catch (error) {
      return { success: false, data: null, error: error.message }
    }
  }
}

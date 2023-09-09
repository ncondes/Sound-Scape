import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, db } from '@/firebase'
import { doc, setDoc } from 'firebase/firestore'

export const registerUser = async ({ email, password, name, age, country }) => {
  try {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, 'users', credentials.user.uid), {
      name,
      email,
      age,
      country,
    })

    return { success: true }
  } catch (error) {
    const errorMessage = error.message
    return { success: false, errorMessage }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return { success: true }
  } catch (error) {
    const errorMessage = error.message
    return { success: false, errorMessage }
  }
}

export const logoutUser = async () => {
  return await signOut(auth)
}

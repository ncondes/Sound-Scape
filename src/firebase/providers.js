import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '.'

const FirebaseAuth = getAuth(app) 

export const registerUser = async ({ email, password}) => {

      try {
         const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
         const user = resp.user
         return {
            user,
            ok: true
         }
      } catch (error) {
         const errorCode = error.code
         const errorMessage = error.message
         return {
            ok: false,
            errorMessage
         }
      }
}

export const loginUser = async ({ email, password }) => {
   try{
      const resp = await  signInWithEmailAndPassword(FirebaseAuth, email, password)
      const user = resp.user; 
         return {
            user,
            ok: true
         }
   }catch(error) {
         const errorCode = error.code
         const errorMessage = error.message
         return {
            ok: false,
            errorMessage
         };
      }
}

export const logoutFirebase = async () => {
   return await FirebaseAuth.signOut()
}  

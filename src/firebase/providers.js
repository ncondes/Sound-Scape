import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { app } from '.'

const FirebaseAuth = getAuth(app) 

export const registerUser = async ({ email, password}) => {

   createUserWithEmailAndPassword(FirebaseAuth, email, password)
      .then((userCredential) => {
         const user = userCredential.user
         console.log('Usuario registrado', user)
         return user
      })
      .catch((error) => {
         const errorCode = error.code
         const errorMessage = error.message
         console.log('Error al registrar el usaurio', errorCode, errorMessage)
      })
}

export const loginUser = async ({ email, password }) => {

   signInWithEmailAndPassword(FirebaseAuth, email, password)
      .then((userCredential) => {
         const user = userCredential.user
         console.log('Se ha iniciado sesión', user)
         return user; 
      })
      .catch((error) => {
         const errorCode = error.code
         const errorMessage = error.message
         console.log('No se ha podido iniciar sesión', errorCode, errorMessage)
      })
}

export const logoutFirebase = async () => {
   return await FirebaseAuth.signOut()
}  

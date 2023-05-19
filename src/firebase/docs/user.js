import { collection, addDoc } from 'firebase/firestore'
import { db } from '../index'

// Function to register a user and save data in Firestore
export const registerUserData = async (uid, name, email, age, country) => {
   try {
      // Get a reference to the "users" collection
      const usersCollection = collection(db, 'users')
      // Add a new document to the "users" collection
      const docRef = await addDoc(usersCollection, {
         id: uid,
         name: name,
         email: email,
         age: age,
         country: country
      })

      console.log('Document written with ID: ', docRef.id)
   } catch (error) {
      console.error('Error adding document: ', error)
   }
}

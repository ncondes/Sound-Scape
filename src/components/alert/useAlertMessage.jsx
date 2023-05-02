import { useState } from 'react'

export const useAlertMessage = () => {

   const [alertMessage, setAlertMessage] = useState('')
   const [backgroundColor, setBackgroundColor] = useState('')

   const handleAlertMessage = (alertMessage, type) => {

      const dictionary = {
            login: {
               'Firebase: Error (auth/user-not-found).': {
                  message: 'Email not found.',
                  backgroundColor: 'bg-red-500'
               },
               'Firebase: Error (auth/wrong-password).': {
                  message: 'Invalid login credentials.',
                  backgroundColor: 'bg-red-500'
               },
               'Login successful': {
                  message: 'Login successful!',
                  backgroundColor: 'bg-green-500'
               },
               'Checking...': {
                  message: 'Checking...',
                  backgroundColor: 'bg-blue-500'
               }
            },
            register: {
               'Firebase: Error (auth/email-already-in-use).': {
                  message: 'Email already in use.',
                  backgroundColor: 'bg-red-500'
               },
               'Register successful': {
                  message: 'Register successful!',
                  backgroundColor: 'bg-green-500'
               },
               'Checking...': {
                  message: 'Checking...',
                  backgroundColor: 'bg-blue-500'
               }
            }
         }
         
         if (!alertMessage) {
            return;
         }

         const selectedDictionary = dictionary[type]
         if (!selectedDictionary) {
            return;
         }

         const selectedAlert = selectedDictionary[alertMessage]
         if (selectedAlert) {
            setAlertMessage(selectedAlert.message)
            setBackgroundColor(selectedAlert.backgroundColor)
         }

      }
   return {
      alertMessage,
      handleAlertMessage,   
      backgroundColor,
   }
}



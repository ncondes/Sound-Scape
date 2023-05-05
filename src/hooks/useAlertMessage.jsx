import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

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

export const useAlertMessage = (formType) => {
   const [message, setMessage] = useState('')
   const [backgroundColor, setBackgroundColor] = useState('')
   const [showAlert, setShowAlert] = useState(false)
   const { message: messageFromFirebase } = useSelector((state) => state.user)

   const handleAlertMessage = (alertMessage, type) => {
      if (!alertMessage) {
         return
      } else {
         setShowAlert(true)
      }

      const selectedDictionary = dictionary[type]
      if (!selectedDictionary) {
         return
      }

      const selectedAlert = selectedDictionary[alertMessage]
      if (selectedAlert) {
         setMessage(selectedAlert.message)
         setBackgroundColor(selectedAlert.backgroundColor)
      }
   }

   useEffect(() => {
      handleAlertMessage(messageFromFirebase, formType)
   }, [messageFromFirebase])

   return {
      showAlert,
      alertMessage: message,
      handleAlertMessage,
      backgroundColor
   }
}

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

export const useAlertMessage = (type) => {
   const [message, setMessage] = useState('')
   const [backgroundColor, setBackgroundColor] = useState('')
   const [showAlert, setShowAlert] = useState(false)

   const { message: messageFromFirebase } = useSelector((state) => state.user)

   const handleAlertMessage = (alertMessage, formType) => {
      if (!alertMessage) return

      setShowAlert(true)

      const selectedDictionary = dictionary[formType]

      if (!selectedDictionary) return

      const selectedAlert = selectedDictionary[alertMessage]
      if (selectedAlert) {
         setMessage(selectedAlert.message)
         setBackgroundColor(selectedAlert.backgroundColor)
      }
   }

   const clearAlertMessage = () => {
      setMessage('')
      setBackgroundColor('')
      setShowAlert(false)
   }

   useEffect(() => {
      handleAlertMessage(messageFromFirebase, type)
      return clearAlertMessage
   }, [messageFromFirebase])

   return {
      showAlert,
      alertMessage: message,
      handleAlertMessage,
      clearAlertMessage,
      backgroundColor
   }
}

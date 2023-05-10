import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { useEffect, useState } from 'react'
import { login, logout } from '../store/slices/auth'

export const useCheckout = () => {
   const [isLoading, setIsLoading] = useState(true)
   const { status } = useSelector((state) => state.auth)
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (!user) {
            setIsLoading(false)
            return dispatch(logout())
         }
         dispatch(login())
         setIsLoading(false)
      })
   }, [])

   return { status, isLoading }
}

import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase'
import { useEffect } from 'react'
import { login, logout } from '../store/slices/auth'

export const useCheckout = () => {
   const { status } = useSelector((state) => state.auth)
   const dispatch = useDispatch()

   useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
         if (!user) return dispatch(logout())
         dispatch(login())
      })
   }, [])

   return status
}

import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '@/firebase'
import { useEffect, useState } from 'react'
import { AuthActions } from '../store/auth'

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false)
      dispatch(!user ? AuthActions.logout() : AuthActions.login())
    })
  }, [])

  return { isLoading }
}

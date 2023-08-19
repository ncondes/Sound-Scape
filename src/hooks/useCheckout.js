import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '@/firebase'
import { useEffect, useState } from 'react'
import { login, logout } from '@/store/auth/auth.slice'

export const useCheckout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(false)

      dispatch(!user ? logout() : login())
    })
  }, [])

  return { status, isLoading }
}

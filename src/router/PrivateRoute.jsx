import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AuthSelectors, AuthStatus } from '../store/auth'
import { useMemo } from 'react'

export const PrivateRoute = ({ children }) => {
  const status = useSelector(AuthSelectors.selectStatus)
  const isAuthenticated = useMemo(() => status === AuthStatus.AUTHENTICATED, [status])

  if (!isAuthenticated) return <Navigate to="/" replace />

  return children
}

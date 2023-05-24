import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ children }) => {
   const { isUserLoggedIn } = useSelector((state) => state.auth)

   if (!isUserLoggedIn) return <Navigate to="/" replace />

   return children
}

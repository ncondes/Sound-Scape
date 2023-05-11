import { Navigate, Route, Routes } from 'react-router-dom'
import { useCheckout } from '../hooks'
import { HomePage, ManagePage } from '../pages'

export const AppRouter = () => {
   const { status } = useCheckout()

   return (
      <Routes>
         <Route path="/home" element={<HomePage />} />
         {status === 'authenticated' ? <Route path="/manage" element={<ManagePage />} /> : null}
         <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
   )
}

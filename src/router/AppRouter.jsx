import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage } from '../pages'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />
   },
   {
      path: '/manage',
      element: <ManagePage />
   }
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}

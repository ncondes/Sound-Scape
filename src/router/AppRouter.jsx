import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage } from '../pages'

export const AppRouter = () => {
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
   return <RouterProvider router={router}></RouterProvider>
}

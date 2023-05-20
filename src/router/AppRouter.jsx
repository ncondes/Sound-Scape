import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage } from '../pages'
import { Error404 } from '../pages/Error404'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
      errorElement: <Error404 />
   },
   {
      path: '/manage',
      element: <ManagePage />,
      errorElement: <Error404 />
   }
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}

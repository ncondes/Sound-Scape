import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage, NotFoundPage } from '../pages'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />
   },
   {
      path: '/manage',
      element: <ManagePage />
   },
   {
      path: '*',
      element: <NotFoundPage />
   }
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}

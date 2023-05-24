import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage, NotFoundPage } from '../pages'

import { PrivateRoute } from './PrivateRoute'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />
   },
   {
      path: '/manage',
      element: (
         <PrivateRoute>
            <ManagePage />
         </PrivateRoute>
      )
   },
   {
      path: '*',
      element: <NotFoundPage />
   }
])

export const AppRouter = () => {
   return <RouterProvider router={router}></RouterProvider>
}

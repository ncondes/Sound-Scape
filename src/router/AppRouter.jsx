import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { HomePage, ManagePage, NotFoundPage } from '@/pages'

import { PrivateRoute } from './PrivateRoute'
import { ManageSongPage } from '../pages/ManageSong'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/manage',
    element: (
      <PrivateRoute>
        <ManagePage />
      </PrivateRoute>
    ),
  },
  {
    path: '/manage/:id',
    element: (
      <PrivateRoute>
        <ManageSongPage />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}

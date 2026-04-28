import { createBrowserRouter } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import Home from '@/pages/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // Add other routes here (e.g., /about, /dashboard, ...)
    ],
  },
  {
    path: '*',
    element: (
      <div className='p-8 text-center text-red-500'>404 - Page Not Found</div>
    ),
  },
]

export const router = createBrowserRouter(routes)

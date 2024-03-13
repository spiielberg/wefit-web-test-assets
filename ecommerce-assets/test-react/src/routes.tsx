import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import { Cart } from './pages/cart'
import { Home } from './pages/home'
import { PurchaseCompleted } from './pages/purchase-completed'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/purchase-completed',
        element: <PurchaseCompleted />,
      },
    ],
  },
])

// App.tsx
import { createBrowserRouter, RouterProvider, Outlet  } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage'
import Dashboard from './components/Dashboard/Dashboard'

function Layout() {
  return (
    <div className='layout'>
      <Dashboard />
      <Header />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/admin-dash',
    element: <Layout />,
    children: [
      {
        path: '/admin-dash',
        element: <Homepage />
      }
    ]
  }
])

function App() {
    return <RouterProvider router={router} />
}

export default App

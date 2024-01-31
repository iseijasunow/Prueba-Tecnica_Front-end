import { Toaster } from 'react-hot-toast'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Home from './Pages/Home/Home'
import User from './Pages/User/User'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/user/:login',
    element: <User />
  }
])

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
    
  )
}

export default App

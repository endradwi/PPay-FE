import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './page/Home.jsx';
import Topup from './page/Top-up.jsx';
import Register from './pages/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/top-up',
    element: <Topup />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
function App() {
  useState(0)
  return (
    <RouterProvider router={router} />
  )
}

export default App

import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './page/Home.jsx';
import Topup from './page/Top-up.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/top-up',
    element: <Topup />,
  },
]);
function App() {
  useState(0)
  return (
        <RouterProvider router={router} />
  )
}

export default App

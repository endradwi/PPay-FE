import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './page/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);
function App() {

  return (
        <RouterProvider router={router} />
  )
}

export default App

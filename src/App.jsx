import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ForgotPass from './pages/ForgotPassword.jsx';
import PinLogin from './pages/PinLogin.jsx';
import Topup from "./pages/Top-up.jsx";
import Dashboard from './pages/Dashboard.jsx';
// import Sidebar from './components/Sidebar.jsx';ss

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/top-up",
    element: <Topup />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgotPass',
    element: <ForgotPass />,
  },
  {
    path: '/pinLogin',
    element: <PinLogin />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

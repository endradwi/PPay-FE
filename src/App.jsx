import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader.jsx";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home.jsx"));
const Register = React.lazy(() => import("./pages/Register.jsx"));
const Login = React.lazy(() => import("./pages/Login.jsx"));
const ForgotPass = React.lazy(() => import("./pages/ForgotPassword.jsx"));
const PinLogin = React.lazy(() => import("./pages/PinLogin.jsx"));
const Topup = React.lazy(() => import("./pages/Top-up.jsx"));
const Transfer = React.lazy(() => import("./pages/Transfer.jsx"));
const TransferDetail = React.lazy(() => import("./pages/TransferDetail.jsx"));
const HistoryTransaction = React.lazy(() => import("./pages/HistoryTransaction.jsx"));
const Profile = React.lazy(() => import("./pages/Profile.jsx"));
const ChangePin = React.lazy(() => import("./pages/ChangePin.jsx"));
const ChangePass = React.lazy(() => import("./pages/ChangePassword.jsx"));
const Dashboard = React.lazy(() => import("./pages/Dashboard.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader/>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/top-up",
    element: (
      <Suspense fallback={<Loader/>}>
        <Topup />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loader/>}>
        <Register />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader/>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/forgotPass",
    element: (
      <Suspense fallback={<Loader/>}>
        <ForgotPass />
      </Suspense>
    ),
  },
  {
    path: "/pinLogin",
    element: (
      <Suspense fallback={<Loader/>}>
        <PinLogin />
      </Suspense>
    ),
  },
  {
    path: "/transfer",
    element: (
      <Suspense fallback={<Loader/>}>
        <Transfer />
      </Suspense>
    ),
  },
  {
    path: "/users/transfer/:id",
    element: (
      <Suspense fallback={<Loader/>}>
        <TransferDetail />
      </Suspense>
    ),
  },
  {
    path: "/historyTransaction",
    element: (
      <Suspense fallback={<Loader/>}>
        <HistoryTransaction />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense fallback={<Loader/>}>
        <Profile />
      </Suspense>
    ),
  },
  {
    path: "/change-pin",
    element: (
      <Suspense fallback={<Loader/>}>
        <ChangePin />
      </Suspense>
    ),
  },
  {
    path: "/change-password",
    element: (
      <Suspense fallback={<Loader/>}>
        <ChangePass />
      </Suspense>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loader/>}>
        <Dashboard />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

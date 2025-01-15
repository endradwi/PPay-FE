import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ForgotPass from "./pages/ForgotPassword.jsx";
import PinLogin from "./pages/PinLogin.jsx";
import Topup from "./pages/Top-up.jsx";
import Transfer from "./pages/Transfer.jsx";
import TransferDetail from "./pages/TransferDetail.jsx";
import HistoryTransaction from "./pages/HistoryTransaction.jsx";
import Profile from "./pages/Profile";
import ChangePin from "./pages/ChangePin.jsx";
import ChangePass from "./pages/ChangePassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPass",
    element: <ForgotPass />,
  },
  {
    path: "/pinLogin",
    element: <PinLogin />,
  },
  {
    path: "/transfer",
    element: <Transfer />,
  },
  {
    path: "/transfer-detail",
    element: <TransferDetail />,
  },
  {
    path: "/historyTransaction",
    element: <HistoryTransaction />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/change-pin",
    element: <ChangePin />,
  },
  {
    path: "/change-password",
    element: <ChangePass />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

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
import PopupPin from "./pages/PopupPin.jsx";
import Profile from "./pages/Profile";

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
    path: "/popup-pin",
    element: <PopupPin />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

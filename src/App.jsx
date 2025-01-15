import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./page/Home.jsx";
import Transfer from "./page/Transfer.jsx";
import TransferDetail from "./page/TransferDetail.jsx";
import PopupPin from "./page/PopupPin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

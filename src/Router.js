import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Regist from "./pages/regist/Regist";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/my-account/login", element: <Login /> },
  { path: "/my-account/new", element: <Regist /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

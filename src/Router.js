import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/my-account/login", element: <Login /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

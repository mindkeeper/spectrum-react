import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Regist from "./pages/regist/Regist";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Code from "./pages/forgotpassword/OTP";
import ProfileCustomer from "./pages/profile/profile customer/ProfileCustomer";
import ProfileSeller from "./pages/profile/profile seller/ProfileSeller";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Regist /> },
  { path: "/profile/customer", element: <ProfileCustomer /> },
  { path: "/profile/seller", element: <ProfileSeller /> },
  { path: "/forget-password", element: <ForgotPassword /> },
  { path: "/forget-password/new", element: <Code /> },
]);

export default router;

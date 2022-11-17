import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Regist from "./pages/regist/Regist";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import ProfileCustomer from "./pages/profile/profile customer/ProfileCustomer";
import ProfileSeller from "./pages/profile/profile seller/ProfileSeller";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/registration", element: <Regist /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
  { path: "/profile/customer", element: <ProfileCustomer /> },
  { path: "/profile/seller", element: <ProfileSeller /> },
  { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;

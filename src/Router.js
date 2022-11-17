import { createBrowserRouter } from "react-router-dom";

// Import Pages
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import Home from './pages/home/Home'
import ProfileCustomer from './pages/profile/profile customer/ProfileCustomer'
import ProfileSeller from './pages/profile/profile seller/ProfileSeller'

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/profile/customer", element: <ProfileCustomer /> },
    { path: "/profile/seller", element: <ProfileSeller /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;
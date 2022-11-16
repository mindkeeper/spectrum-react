import { createBrowserRouter } from "react-router-dom";

// Import Pages
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import Home from './pages/home/Home'

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;
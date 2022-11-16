import { createBrowserRouter } from "react-router-dom";

import ForgotPassword from './pages/forgotpassword/ForgotPassword'
const router = createBrowserRouter([
    { path: "/forgotpassword", element: <ForgotPassword /> },
]);

export default router;
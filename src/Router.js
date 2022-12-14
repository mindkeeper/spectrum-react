import { createBrowserRouter } from "react-router-dom";

// Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Regist from "./pages/regist/Regist";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import Code from "./pages/forgotpassword/OTP";
import ProfileCustomer from "./pages/profile/profilecustomer/ProfileCustomer";
import ProfileSeller from "./pages/profile/profileseller/ProfileSeller";
import ProductDetail from "./pages/productdetail/description/Productdetail";
import Product from "./pages/product/Product";
import Blog from "./pages/blog/Blog";
import NotFound from "./pages/Error404/NotFound";
import Blogdetail from "./pages/blogdetail/Blogdetail";
import MyProduct from "./pages/seller/myProduct/MyProduct";
import Selling from "./pages/seller/sellingProduct/Selling";
import Order from "./pages/seller/myOrder/Order";
import ProductDetailReview from "./pages/productdetail/review/ProductdetailReview";
import CartDetail from "./pages/cart/cart-detail/CartDetail";
import CartCheckout from "./pages/cart/cart-process/CartCheckout";
import ComingSoon from "./pages/comingsoon/comingsoon";
import FAQ from "./pages/Faq/Faq";
import AboutUs from "./pages/aboutUs/aboutUs";
import ContactUs from "./pages/contactUs/contactUs";
import Chat from "./pages/chat/chat";
import Notification from "./pages/Notification/notification";
import OrderTrack from "./pages/order-track/order-track";
import Wistlist from "./pages/wishlist/Wishlist";

import PrivateElement from "./components/private/PrivateElement"
import PrivateElementAuth from "./components/private/PrivateElementAuth";

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <NotFound /> },
  { path: "/login", element: <PrivateElementAuth><Login /></PrivateElementAuth> },
  { path: "/register", element: <PrivateElementAuth><Regist /></PrivateElementAuth> },
  { path: "/profile/customer", element: <PrivateElement allowedRoles={[1]}><ProfileCustomer /></PrivateElement> },
  { path: "/profile/seller", element: <PrivateElement allowedRoles={[2]}><ProfileSeller /></PrivateElement> },
  { path: "/forget-password", element:  <PrivateElementAuth><ForgotPassword /></PrivateElementAuth> },
  { path: "/forget-password/new", element:  <PrivateElementAuth><Code /></PrivateElementAuth>},
  { path: "/product/detail/:id", element: <ProductDetail /> },
  { path: "/product", element: <Product /> },
  { path: "/profile/seller/product", element: <PrivateElement allowedRoles={[2]}><MyProduct /></PrivateElement> },
  { path: "/profile/seller/selling-product", element:  <PrivateElement allowedRoles={[2]}><Selling /></PrivateElement>},
  { path: "/profile/seller/order", element:  <PrivateElement allowedRoles={[2]}><Order /></PrivateElement>},
  { path: "/blog", element: <Blog /> },
  { path: "/blog/detail", element: <Blogdetail /> },
  { path: "/product/detail/review", element: <ProductDetailReview /> },
  { path: "/FAQ", element: <FAQ /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/chat", element: <Chat /> },
  { path: "/notification", element: <Notification /> },
  { path: "/order-track", element:  <PrivateElement allowedRoles={[1]}><OrderTrack /></PrivateElement> },
  { path: "/cart", element:  <PrivateElement allowedRoles={[1]}><CartDetail /></PrivateElement>},
  { path: "/cart/checkout", element:  <PrivateElement allowedRoles={[1]}><CartCheckout /></PrivateElement>},
  { path: "/comingsoon", element: <ComingSoon /> },
  { path: "/wistlist", element:  <PrivateElement allowedRoles={[1]}><Wistlist /></PrivateElement>},
]);

export default router;

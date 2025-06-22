import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../components/common/NotFound"
import SignupC from "../components/customer/Signup";
import LoginC from "../components/customer/Login";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/Products/ProductDetails";
import MyShoppingCart from "../pages/Mycart/Mycart";
import MyWishlist from "../pages/Mycart/MyWishlist";
import Category from "../pages/Category/Category";
import CheckoutForm from "../pages/Checkout/Checkout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "shop",
        element: <Shop></Shop>
      },
      {
        path: "signin",
        element: <LoginC></LoginC>
      },
      {
        path: "signup",
        element: <SignupC></SignupC>
      },
      {
        path: "productdetails/:id",
        element: <ProductDetails></ProductDetails>
      },
      {
        path: "mycart/:id",
        element: <MyShoppingCart></MyShoppingCart>
      },
      {
        path: "myWishlist/:id",
        element: <MyWishlist></MyWishlist>
      },
// In your router.js file
{
  path: "category",
  element: <Category />,
  children: [
    {
      path: ":sorting?",
      element: <Category />,
    }
  ]
},
{
  path: "checkout",
  element: <CheckoutForm></CheckoutForm>
}
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;

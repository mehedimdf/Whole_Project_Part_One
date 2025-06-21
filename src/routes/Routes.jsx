import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import NotFound from "../components/common/NotFound"
import SignupC from "../components/customer/Signup";
import LoginC from "../components/customer/Login";
import Shop from "../pages/Shop/Shop";


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
      }
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/forgotpass",
      //   element: <ForgotPass></ForgotPass>,
      // },
      // {
      //   path: "/details/:_id",
      //   element: (
      //     <PrivateRoute>
      //       <VisaDetails />
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/all-product",
      //   element: <AllProducts />,
      // },
      // {
      //   path: "/contact",
      //   element: <ContactUs />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <PrivateRoute>
  //       <DashboardLayout></DashboardLayout>
  //     </PrivateRoute>
  //   ),
  //   children: [
  //     {
  //       path: "",
  //       element: <MyProfile></MyProfile>,
  //     },
  //     {
  //       path: "addproduct",
  //       element: <AddProduct></AddProduct>,
  //     },
  //     {
  //       path: "myproducts",
  //       element: <MyProducts></MyProducts>,
  //     },
  //     {
  //       path: "my-profile",
  //       element: <MyProfile></MyProfile>,
  //     },
  //     {
  //       path: "payment",
  //       element: <ProfilePayment></ProfilePayment>
  //     },
  //     {
  //       path: 'update-profile',
  //       element: <UpdateProfile></UpdateProfile>
  //     },
  //     {
  //       path: 'pending-posts',
  //       element: <PendingPosts></PendingPosts>
  //     },
  //     {
  //       path: 'accepted-posts',
  //       element: <AcceptedPosts></AcceptedPosts>
  //     },
  //     {
  //       path: 'rejected-posts',
  //       element: <RejectedPosts></RejectedPosts>
  //     },
  //     {
  //       path: 'reported-posts',
  //       element: <ReportedPosts></ReportedPosts>
  //     },
  //     {
  //       path: 'all-users',
  //       element: <AllUsers></AllUsers>
  //     },
  //     {
  //       path: 'all-modetators',
  //       element: <AllModerators></AllModerators>
  //     },
  //     {
  //       path: 'all-admins',
  //       element: <AllAdmins></AllAdmins>
  //     },
  //     {
  //       path: 'statistics',
  //       element: <Statistics></Statistics>
  //     },
  //     {
  //       path: 'cupon',
  //       element: <Coupon></Coupon>
  //     }
  //   ],
  // },
]);

export default router;

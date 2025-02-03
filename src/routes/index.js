import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/login",
    title: "Finablr-Login",
    component: lazy(() => import("../pages/SignIn/index.js")),
    exact: true,
  },

  {
    path: "/forgotPassword",
    title: "Finablr-ForgotPassword",
    component: lazy(() => import("../pages/ForgetPassword/index.js")),
  },
  {
    path: "/forgotPassword/:id",
    title: "Finablr-ChangePassword",
    component: lazy(() => import("../pages/Newpassword")),
  },

  {
    path: "*",
    title: "Finablr-404",
    component: lazy(() => import("../pages/Page404")),
    exact: true,
  },

  {
    path: "/test-management",
    title: "Finablr-Chat",
    key:"test-management",
    component: lazy(() => import("../pages/Chat")),
    exact: true,

  },

  // All the public routes
];

const PrivateRoutes = [
  {
    path: "/",
    title:"Dashboard",
    component: lazy(() => import("../pages/Dashboard")),
    exact: true,
    defaultAccess: true,
  },

  {
    path: "/profile",
    title:"Profile",
    key:"profile",
    component: lazy(() => import("../pages/Profile")),
    exact: true,
    defaultAccess: true,
  },

  {
    path: "/user-management",
    title:"UserManagement",
    key:"user-management",
    component: lazy(() => import("../pages/Usermanagement")),
    exact: true,

  },

];

export { PublicRoutes, PrivateRoutes };

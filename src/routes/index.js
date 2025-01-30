import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/SignIn/index.js")),
    exact: true,
  },

  {
    path: "/forgotPassword",
    component: lazy(() => import("../pages/ForgetPassword/index.js")),
  },
  {
    path: "/forgotPassword/:id",
    component: lazy(() => import("../pages/Newpassword")),
  },

  {
    path: "*",
    component: lazy(() => import("../pages/Page404")),
    exact: true,
  },

  {
    path: "/test-management",
    key:"test-management",
    component: lazy(() => import("../pages/Chat")),
    exact: true,

  },

  // All the public routes
];

const PrivateRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Dashboard")),
    exact: true,
    defaultAccess: true,
  },

  {
    path: "/profile",
    key:"profile",
    component: lazy(() => import("../pages/Profile")),
    exact: true,
    defaultAccess: true,
  },

  {
    path: "/user-management",
    key:"user-management",
    component: lazy(() => import("../pages/Usermanagement")),
    exact: true,

  },
  {
    path: "/test-management",
    key:"test-management",
    component: lazy(() => import("../pages/Chat")),
    exact: true,

  },
];

export { PublicRoutes, PrivateRoutes };

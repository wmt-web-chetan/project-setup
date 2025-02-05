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
    key:["create-user","update-user","delete-user"],
    component: lazy(() => import("../pages/Usermanagement")),
    exact: true,

  },
  {
    path: "/user-management/create",
    title:"UserManagement",
    key:"create-user",
    component: lazy(() => import("../pages/UserCreate")),
    exact: true,

  },
  {
    path: "/loan-management",
    title:"Loan Management",
    key:["create-loan","update-loan","delete-loan"],
    component: lazy(() => import("../pages/LoanManagement")),
    exact: true,
    defaultAccess: true

  },
  {
    path: "/faq-management",
    title:"FAQ Management",
    key:["create-loan","update-loan","delete-loan"],
    component: lazy(() => import("../pages/Faq/index.jsx")),
    exact: true,
    defaultAccess: true

  },

];

export { PublicRoutes, PrivateRoutes };

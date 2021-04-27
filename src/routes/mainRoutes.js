import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    exact: true,
    path: "/",
    component: lazy(() => import("../pages/HomePage")),
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: "Contacts",
    exact: false,
    path: "/contacts",
    component: lazy(() => import("../pages/ContactsPage")),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Registration",
    exact: false,
    path: "/registration",
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    exact: false,
    path: "/login",
    component: lazy(() => import("../pages/AuthPage")),
    isPrivate: false,
    isRestricted: true,
  },
];

export default mainRoutes;

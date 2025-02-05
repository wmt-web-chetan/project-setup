import React, { Suspense } from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import NonAuth from "./components/NonAuthLayout";
import AuthLayout from "./components/AuthLayout";
import config from "./utils/url-config";
import Page404 from "./pages/Page404";
import { userData } from "./utils/dummy-data";
function App() {
  let location = useLocation();
  
 // Function to find the current route and get its title
 const getRouteTitle = (pathname) => {
  // Combine both route arrays
  const allRoutes = [...PublicRoutes, ...PrivateRoutes];
  
  // Find matching route
  const currentRoute = allRoutes.find(route => {
    // Handle exact matches
    if (route.exact) {
      return route.path === pathname;
    }
    // Handle dynamic routes with parameters
    const routePath = route.path.split('/:')[0];
    return pathname.startsWith(routePath);
  });

  // Return title with prefix, or default title if not found
  return currentRoute ? `${currentRoute.title}` : 'Finablr';
};
useEffect(() => {
  const pageTitle = getRouteTitle(location.pathname);
  document.title = pageTitle;
}, [location]);
 

 

  const token = 121212323423423;
  const isLoggedIn = true;

  let routes = [];
  if (userData) {
    let permissionsKey = userData?.data?.user?.role[0]?.modules?.map((item) => 
      item?.permissions?.map((item) => item?.key)
    ).flat() || [];

    routes = PrivateRoutes.filter(route => {
      // If route has defaultAccess, allow it
      if (route.defaultAccess) {
        return true;
      }

      // If route has key property
      if (route.key) {
        // If key is an array, check if any key matches
        if (Array.isArray(route.key)) {
          return route.key.some(k => permissionsKey.includes(k));
        }
        // If key is a string, check if it matches
        return permissionsKey.includes(route.key);
      }

      return false;
    });
  }

 

  return (
    <Routes>
      {PublicRoutes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          element={
            <Suspense fallback="">
              <NonAuth>
                <Component />
              </NonAuth>
            </Suspense>
          }
        />
      ))}
      <Route path="/" exact element={<AuthLayout />}>
        {routes?.map(({ path, exact, component: Component, access }) => {
          return isLoggedIn ? (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Component />}
            />
          ) : (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Navigate to="/login" />}
            />
          );
        })}
      </Route>
     
    </Routes>
  );
}

export default App;

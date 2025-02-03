import React, { Suspense } from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "./routes";
import NonAuth from "./components/NonAuthLayout";
import AuthLayout from "./components/AuthLayout";
import config from "./utils/url-config";
function App() {
  let location = useLocation();
  let pathname = location?.pathname?.split("/")[1];
  let title = pathname
    ? `Baseline_${pathname.charAt(0).toUpperCase() + pathname.slice(1)}`
    : "";
  const userData = {
    meta: {
      message: "User logged in successfully",
      success: true,
      status: 200,
    },
    data: {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiMSIsInVuaXF1ZV9pZCI6Im02ZXRod3BmLWQzZTJlYWU0LTRiN2EtNGRjZC05MTQ1LTgyYjc4NjZiZDQxZSIsImZ1bGxfbmFtZSI6IlN1cGVyIEFkbWluIiwiZW1haWwiOiJzdXBlcmFkbWluLmZpbmFibHJAbWFpbGluYXRvci5jb20iLCJwaG9uZV9udW1iZXIiOiIrOTE5MTIzNDU2NzgiLCJyb2xlIjp7ImlkIjoiMSIsIm5hbWUiOiJTdXBlciBBZG1pbmlzdHJhdG9yIiwia2V5IjoiU1VQRVJfQURNSU4iLCJkZXNjcmlwdGlvbiI6bnVsbCwibW9kdWxlcyI6W3siaWQiOiIxIiwibmFtZSI6IlByb2ZpbGUiLCJrZXkiOiJwcm9maWxlIiwiZGVzY3JpcHRpb24iOm51bGwsInBlcm1pc3Npb25zIjpbeyJpZCI6IjIiLCJuYW1lIjoiQ3JlYXRlIiwia2V5IjoiY3JlYXRlIiwiZGVzY3JpcHRpb24iOm51bGx9LHsiaWQiOiIzIiwibmFtZSI6IlVwZGF0ZSIsImtleSI6InVwZGF0ZSIsImRlc2NyaXB0aW9uIjpudWxsfSx7ImlkIjoiNCIsIm5hbWUiOiJEZWxldGUiLCJrZXkiOiJkZWxldGUiLCJkZXNjcmlwdGlvbiI6bnVsbH1dfV19fSwiaWF0IjoxNzM3OTc4NjYxLCJleHAiOjE3MzgwNjUwNjF9.N3MxYf8vXaDYx37-8NKYMQl1elgqW231RJ-gmIeFoko",
      user: {
        id: "1",
        unique_id: "m6ethwpf-d3e2eae4-4b7a-4dcd-9145-82b7866bd41e",
        full_name: "Super Admin",
        email: "superadmin.finablr@mailinator.com",
        phone_number: "+91912345678",
        role: {
          id: "1",
          name: "Super Administrator",
          key: "SUPER_ADMIN",
          description: null,
          modules: [
            {
              id: "1",
              name: "Profile",
              key: "profile",
              description: null,
              permissions: [
                {
                  id: "2",
                  name: "Create",
                  key: "create",
                  description: null,
                },
                {
                  id: "3",
                  name: "Update",
                  key: "update",
                  description: null,
                },
                {
                  id: "4",
                  name: "Delete",
                  key: "delete",
                  description: null,
                },
              ],
            },
            {
              id: "1",
              name: "User Management",
              key: "user-management",
              description: null,
              permissions: [
                {
                  id: "2",
                  name: "Create",
                  key: "create",
                  description: null,
                },
                {
                  id: "3",
                  name: "Update",
                  key: "update",
                  description: null,
                },
                {
                  id: "4",
                  name: "Delete",
                  key: "delete",
                  description: null,
                },
              ],
            },
          ],
        },
      },
    },
  };

  console.log(userData?.data?.user?.role?.modules, "userData");

  const token = 121212323423423;
  const isLoggedIn = true;

  let routes = [];
  if (userData) {
    const permissions = userData?.data?.user?.role?.modules;
    // Get all permitted module keys
    const permittedModules = permissions?.map((module) => module.key) || [];
    // Filter PrivateRoutes based on permissions and defaultAccess
    routes = PrivateRoutes?.filter((route) => {
      // Allow routes with defaultAccess
      if (route?.defaultAccess) {
        return true;
      }
      // Check if route key exists in permitted modules
      return route?.key && permittedModules.includes(route?.key);
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

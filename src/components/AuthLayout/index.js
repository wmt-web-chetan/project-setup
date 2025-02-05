import React, { useState, useEffect, Suspense } from "react";
import { Card, Layout } from "antd";
import HeaderNav from "../../components/AuthLayout/HeaderNav";
import SideBar from "../../components/AuthLayout/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./LayoutBox.scss";
import SkeletonBoard from "./SkeletonBoard";

const { Content } = Layout;

const AuthLayout = () => {
  const { isCollapse } = useSelector((state) => state.sidebarCollapse);
  // const { userDetail, loading } = useSelector((state) => state.getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // // to fethech the user
  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("data"));
  
  //   if (userData) {
  //     const data = {
  //       id: userData?.id,
  //       type: userData?.user_type


  //     };
  //     // dispatch(fetchUser(data));
  //   } else {
  //     navigate("/login");
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.removeItem("data");
  //   localStorage.setItem("data", JSON.stringify(userDetail));
  //   if(userDetail?.is_active===false){
  //     localStorage.removeItem("BASELINE_TOKEN");
  //     localStorage.removeItem("data")
  //     localStorage.removeItem("id")
  //     navigate("/login")
  //   }
  // }, [userDetail]);



  return (
    <>
      {1==2 ? (
        <SkeletonBoard className="p-3 shadow-md rounded bg-white h-100 d-flex align-items-center justify-content-center" />
      ) : (
        <div className="">
          <div
            className={
              isCollapse
                ? "mainLayout h-screen "
                : "mainLayout sideBarWithCollapse  h-screen"
            }
            data-testid="main-layout-id"
          >
            <Layout className="h-full">
              <SideBar />
              <Layout className="site-layout">
                <HeaderNav />
                <Suspense>
                  <Content
                    style={{
                      padding: 32,
                      minHeight: 280,
                      // background: "#fff",
                    }}
                  >
                    <div className="min-h-[80vh] bg-white rounded-2xl p-4" >
                      <Outlet />
                    </div>
                    
                  </Content>
                </Suspense>
              </Layout>
            </Layout>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthLayout;

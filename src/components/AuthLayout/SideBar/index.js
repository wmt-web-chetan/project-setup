import React, { useEffect, useState } from "react";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import headerLogo from "../../../Assets/logoddd.svg";
import Group from "../../../Assets/logo11.svg";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, theme } from "antd";
import { toggleSidebar } from "../../../reducers/SidebarCollapse";
import { useNavigate } from "react-router-dom";
import { items } from "../../../constants";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = ({ selectedImage, showImage }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const { isCollapse } = useSelector((state) => state.sidebarCollapse);

  useEffect(() => {
    const activeItem = findActiveItem(data, location.pathname);
    setActiveKey(activeItem?.key);
  }, [data, location]);

  const findActiveItem = (items, pathname) => {
    for (const item of items) {
      if (isActive(item.route, pathname)) {
        return item;
      }
      if (item.isSubmenu && item.SubMenu) {
        const activeSubItem = findActiveItem(item.SubMenu, pathname);
        if (activeSubItem) {
          return activeSubItem;
        }
      }
    }
    return null;
  };

  useEffect(() => {
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
                id: "2",
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
              {
                id: "3",
                name: "User Management",
                key: "sports",
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
                id: "4",
                name: "User Management",
                key: "treatment",
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

    // Get permitted module keys from user data
    const permittedModules = userData?.data?.user?.role?.modules?.map(module => module.key) || [];

    // Filter menu items based on permissions
    const filterMenuItems = (menuItems) => {
      return menuItems
        .map(item => {
          // Always include items with defaultAccess
          if (item.defaultAccess) {
            return item;
          }

          // Handle submenu items
          if (item.isSubmenu && item.SubMenu) {
            // Check if any of the multipleAccess permissions are present
            const hasPermission = item.multipleAccess?.some(access => 
              permittedModules.includes(access)
            );

            if (hasPermission) {
              // Filter submenu items based on their individual access
              const filteredSubMenu = item.SubMenu.filter(subItem =>
                permittedModules.includes(subItem.access)
              );

              if (filteredSubMenu.length > 0) {
                return {
                  ...item,
                  SubMenu: filteredSubMenu
                };
              }
            }
            return null;
          }

          // Check regular menu items
          if (item.access && permittedModules.includes(item.access)) {
            return item;
          }

          return null;
        })
        .filter(Boolean); // Remove null items
    };

    const filteredItems = filterMenuItems(items);
    setData(filteredItems);
  }, []); // Add dependencies as needed

  const isActive = (path) => {
    const currentPathname = location.pathname;
    return currentPathname === path || currentPathname.startsWith(path + "/");
  };

  const onClickLogo = () => {
    navigate("/");
  };

  return (
    <>
      <Sider
        trigger={null}
        collapsible
        width={250}
        collapsed={isCollapse}
        className="h-[100vh] main-side-bar"
      >
        <div
          className={isCollapse ? "logoBoxContainerOneByOne" : "logoBoxContainer"}
          onClick={onClickLogo}
          data-testid="sidebar-top-logo"
        >
          <div className="logoBox">
            <img
              src={isCollapse ? Group : headerLogo}
              alt="logo"
              onClick={() => navigate("/")}
              className="cursor-pointer w-2/3"
            />
          </div>
        </div>
        <div className="sideBarMenuList" data-testid="main-sideBarMenu-id">
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[activeKey]}
            defaultOpenKeys={[data?.find((item) => isActive(item.route))?.key]}
            className="pb-4 menuuuu"
          >
            {data?.map((item, i) => (
              <React.Fragment key={i}>
                {item?.isSubmenu === false ? (
                  <Menu.Item
                    key={item?.key}
                    className={isActive(item?.route) ? "active" : ""}
                  >
                    <NavLink to={item?.route}>
                      {item?.icon}
                      <span>{item?.label}</span>
                    </NavLink>
                  </Menu.Item>
                ) : null}
                {item?.isSubmenu ? (
                  <SubMenu
                    key={item?.key}
                    title={
                      <>
                        {item?.icon}
                        <span>{item?.label}</span>
                      </>
                    }
                    className="siderSubMenu"
                  >
                    {item?.SubMenu?.map((subItem) => (
                      <Menu.Item key={subItem?.key}>
                        <NavLink to={subItem?.route}>
                          {subItem?.icon}
                          <span>{subItem?.label}</span>
                        </NavLink>
                      </Menu.Item>
                    ))}
                  </SubMenu>
                ) : null}
              </React.Fragment>
            ))}
          </Menu>
        </div>
        <div
          className="sider-toggler-main cursor-pointer "
          data-testid="main-collapse-div-id"
          style={{ backgroundColor: `${colorPrimary}` }}
          onClick={() => dispatch(toggleSidebar(!isCollapse))}
        >
          {React.createElement(isCollapse ? RightOutlined : LeftOutlined, {
            className: "trigger",
            style: { fontSize: "16px", color: "#fff" },
          })}
        </div>
      </Sider>
    </>
  );
};

export default SideBar;
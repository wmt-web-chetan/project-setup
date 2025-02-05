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
import { userData } from "../../../utils/dummy-data";

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
    

    // Get permitted module keys from user data
    const permittedModules = userData?.data?.user?.role?.[0].modules?.map(module => module.key) || [];

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
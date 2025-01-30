import React, { useState, useEffect } from "react";
import "./HeaderNav.scss";
import { Avatar, Dropdown, Layout, Row, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../services/store/Authentication/slice";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const HeaderNav = () => {
  const [open, setOpen] = useState(false);
  const url =
    "https://www.sacmag.com/wp-content/uploads/sites/50/2020/12/HI_RES_FIN_IMG_8626.jpg";

  const navigate = useNavigate();
  const { isDark } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const {
    token: { colorPrimary },
  } = theme.useToken();

  const profileItems = [
    {
      label: "Profile",
      key: "1",
      icon: (
        <UserOutlined
          style={{ fontSize: "14px" }}
          data-testid="profile-test-id"
        />
      ),
      className: "header-profile-dropdown",
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined style={{ fontSize: "14px" }} />,
      style: { color: "#ee4b4f" },
      className: "headerLogoutDropdown",
    },
  ];

  const onClose = () => {
    setOpen(false);
  };

  const onClickClear = () => {};

  const onClick = ({ key }) => {
    if (key === "1") {
      navigate("/profile");
    }
    if (key === "2") {
      dispatch(removeUser()); // remove the user after logout
      localStorage.removeItem("BASELINE_TOKEN"); // remove the token after logout
      localStorage.removeItem("id"); // remove the id after logout
      localStorage.removeItem("data");
      localStorage.removeItem("dataForProfile");

      navigate("/login");
    }
  };

  return (
    <Header style={{ padding: 0 }}>
      <div className="flex items-center justify-end pr-4">
        <Dropdown
          menu={{
            items: profileItems,
            onClick,
          }}
        >
          <div
            onClick={(e) => e.preventDefault()}
            data-testid="profileDropdown"
          >
            <span className=" text-white pr-3">
              Hi,<span className="font-bold"> Alvero Moreno</span>
            </span>
            <Avatar size={40} src={url} alt="profile" />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default HeaderNav;

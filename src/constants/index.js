import {
  UserSwitchOutlined,
  DesktopOutlined,
  ApartmentOutlined,
  UserAddOutlined,
  FundProjectionScreenOutlined,
  WarningOutlined,
  DribbbleOutlined,
  BankOutlined,
  SisternodeOutlined,
  ReadOutlined,
  FileDoneOutlined,
  QuestionOutlined,
  ClusterOutlined,
  FileUnknownOutlined,
  NotificationOutlined,
  IdcardOutlined,
  DiscordOutlined,
  SettingOutlined,
  MobileOutlined,
  BorderLeftOutlined,
  UsergroupAddOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
const userData = JSON.parse(localStorage.getItem("data"));
console.log(userData?.user_type, "userData");

export let items = [];

items = [
  {
    key: "/",
    route: "/",
    icon: <DesktopOutlined style={{ fontSize: "120%" }} />,
    label: "Dashboard",
    isSubmenu: false,
    defaultAccess: true,
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "Users",
    key: "/user-management",
    route: "/user-management",
    isSubmenu: false,
    access: "user-management",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "Loan Management",
    key: "/loan-management",
    route: "/loan-management",
    isSubmenu: false,
    access: "loan-management",
  },
  {
    icon: <UsergroupAddOutlined style={{ fontSize: "120%" }} />,
    label: "FAQ",
    key: "/faq-management",
    route: "/faq-management",
    isSubmenu: false,
    access: "loan-management",
  },
  {
    icon: <MobileOutlined style={{ fontSize: "120%" }} />,
    label: `App Management`,
    key: "/appmanagment",
    isSubmenu: true,
    multipleAccess: ["sports", "treatment"],
    SubMenu: [
      {
        icon: <DribbbleOutlined style={{ fontSize: "120%" }} />,
        label: "Sports",
        key: "/sports",
        route: "/sports",
        isSubmenu: false,
        access: "sports",
      },
      {
        icon: <SisternodeOutlined style={{ fontSize: "120%" }} />,
        label: "Treatment Plan",
        key: "/treatment-plan-management",
        route: "/treatment-plan-management",
        isSubmenu: false,
        access: "treatment",
        // defaultAccess: true,
      },
    ],
  },
];

export const LOCAL_SECRET_KEY =process.env.REACT_APP_LOCAL_SECRET_KEY;

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
      icon: <MobileOutlined style={{ fontSize: "120%" }} />,
      label: `App Management`,
      key: "/appmanagment",
      isSubmenu: true,
      multipleAccess: [
        "sports",
        "treatment"
      ],
      SubMenu: [
        {
          icon: <DribbbleOutlined style={{ fontSize: "120%" }} />,
          label: "Sports",
          key: "/sports",
          route: "/sports",
          isSubmenu: false,
          access: "sports"
        },
        {
          icon: <SisternodeOutlined style={{ fontSize: "120%" }} />,
          label: "Treatment Plan",
          key: "/treatment-plan-management",
          route: "/treatment-plan-management",
          isSubmenu: false,
          access: "treatment"
          // defaultAccess: true,
        },
        
      ],
    },
   
  ];


export const items1 = [
  {
    key: "/",
    route: "/",
    icon: <DesktopOutlined style={{ fontSize: "120%" }} />,
    label: "Dashboard",
    isSubmenu: false,
    description: "Here is description for dashboard",
    defaultAccess: true,
  },

  {
    icon: <UserAddOutlined style={{ fontSize: "120%" }} />,
    label: "Employee Management",
    key: "/employee",
    route: "/employee",
    isSubmenu: false,
    access: [
      "view-employee-management",
      "create-update-employee-management",
      "delete-employee-management",
    ],
  },
  {
    icon: <ClusterOutlined style={{ fontSize: "120%" }} />,
    label: "Roles & Permissions",
    key: "/roles",
    route: "/roles",
    isSubmenu: false,
    access: [
      "view-roles-permissions",
      "delete-roles-permissions",
      "create-update-roles-permission",
    ],
  },
  {
    icon: <ApartmentOutlined style={{ fontSize: "120%" }} />,
    label: "User Management",
    key: "/user-management",
    route: "/user-management",
    isSubmenu: false,
    access: [
      "delete-parent-child",
      "view-parent-child",
      "create-update-parent-child",
    ],
  },
  {
    icon: <DribbbleOutlined style={{ fontSize: "120%" }} />,
    label: "Sports Management",
    key: "/sports",
    route: "/sports",
    isSubmenu: false,
    access: [
      "view-sports-management",
      "delete-sports-management",
      "create-update-sports-management",
    ],
  },
  {
    icon: <IdcardOutlined style={{ fontSize: "120%" }} />,
    label: "Category Management",
    key: "/category-mangement",
    route: "/category-mangement",
    isSubmenu: false,
    access: ["view-category", "create-update-category", "delete-category"],
    // defaultAccess: true,
  },
  {
    icon: <BankOutlined style={{ fontSize: "120%" }} />,
    label: "School-Club Management",
    key: "/school-club-mangement",
    route: "/school-club-mangement",
    isSubmenu: false,
    access: [
      "view-school-club",
      "create-update-school-club",
      "delete-school-club",
    ],
    // defaultAccess: true,
  },
  {
    icon: <SisternodeOutlined style={{ fontSize: "120%" }} />,
    label: "Treatment Plan Management",
    key: "/treatment-plan-management",
    route: "/treatment-plan-management",
    isSubmenu: false,
    access: [
      "view-treatment-plan",
      "create-update-treatment-plan",
      "delete-treatment-plan",
    ],
    // defaultAccess: true,
  },
  {
    icon: <FileUnknownOutlined style={{ fontSize: "120%" }} />,
    label: "Question Management",
    key: "/question",
    route: "/question",
    isSubmenu: false,
    access: [
      "view-question-management",
      "create-update-question-management",
      "delete-question-management",
    ],
  },
  {
    icon: <ReadOutlined style={{ fontSize: "120%" }} />,
    label: "News Management",
    key: "/news-mangement",
    route: "/news-mangement",
    isSubmenu: false,
    access: [
      "view-news-management",
      "create-update-news-management",
      "delete-news-management",
    ],
  },
  // {
  //   icon: <SnippetsOutlined style={{ fontSize: "120%" }} />,
  //   label: "Report Management",
  //   key: "/report-mangement",
  //   route: "/report-mangement",
  //   isSubmenu: false,
  //   access: ["view-report-management"],
  // },

  {
    icon: <FileDoneOutlined style={{ fontSize: "120%" }} />,
    label: " Document Management",
    key: "/document-mangement",
    route: "/document-mangement",
    isSubmenu: false,
    access: ["view-cms-management", "create-update-cms-management"],
  },
  {
    icon: <QuestionOutlined style={{ fontSize: "120%" }} />,
    label: "FAQ Management",
    key: "/faq-mangement",
    route: "/faq-mangement",
    isSubmenu: false,
    access: [
      "view-faq-management",
      "create-update-faq-management",
      "delete-faq-management",
    ],
    // defaultAccess: true,
  },
  {
    icon: <FundProjectionScreenOutlined style={{ fontSize: "120%" }} />,
    label: "Foundation Managment",
    key: "/foundation-mangement",
    route: "/foundation-mangement",
    isSubmenu: false,
    access: [
      "view-foundation-management",
      "create-update-foundation-management",
      "delete-foundation-management",
    ],
    // defaultAccess: true,
  },
  {
    icon: <ApartmentOutlined style={{ fontSize: "120%" }} />,
    label: "Member Management",
    key: "/member-management",
    route: "/member-management",
    isSubmenu: false,
    access: ["delete-member", "view-member", "create-update-member"],
    // defaultAccess: true
  },
  {
    icon: <BankOutlined style={{ fontSize: "120%" }} />,
    label: `${
      userData?.user_type == "school" ? "Class Management " : "Team Management"
    } `,
    key: "/class-team-managment",
    route: "/class-team-managment",
    isSubmenu: false,
    access: [
      "view-class-List",
      "create-update-class-list",
      "delete-class-list",
    ],
    // defaultAccess: true,
  },
  {
    icon: <WarningOutlined style={{ fontSize: "120%" }} />,
    label: "Injury Management",
    key: "/injury-mangement",
    route: "/injury-mangement",
    isSubmenu: false,
    access: ["view-injury-management"],
  },
  {
    icon: <UserSwitchOutlined style={{ fontSize: "120%" }} />,
    label: `Guest Management`,
    key: "/guest-mangement",
    route: "/guest-mangement",
    isSubmenu: false,
    access: ["view-guest-management"],
    // defaultAccess: true,
  },
  {
    icon: <NotificationOutlined style={{ fontSize: "120%" }} />,
    label: "Notifications",
    key: "/notification",
    route: "/notification",
    isSubmenu: false,
    access: [
      "view-notification-management",
      "create-notification-management",
      "delete-notification-management",
    ],
    // defaultAccess: true,
  },
];

import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker, Space } from "antd";
import {
  LayoutDashboard,
  PlusCircle,
  UserPlus,
  Users,
  FileCheck,
  Search,
  Calendar,
  Bell,
  Settings,
  User,
} from "lucide-react";
import RepaymentDrawer from "./Component/RepaymentDrawer";
import InviteProviderDrawer from "./Component/InviteProviderDrawer";

const DashBoard = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [repaymentDrawer, setRepaymentDrawer] = useState(false);
  const [inviteProviderDrawer, setInviteProviderDrawer] = useState(false);



  const menuItems = [
    {
      icon: PlusCircle, label: "New Repayment", color: "text-green-600", onClick: () => {
        setRepaymentDrawer(true);
      }
    },
    {
      icon: UserPlus,
      label: "Invite Service Provider",
      color: "text-blue-600",
      onClick: () => {
        setInviteProviderDrawer(true);
      }
    },
    { icon: Users, label: "Create New Account", color: "text-purple-600" },
    { icon: FileCheck, label: "Check Loan Status", color: "text-yellow-600" },
    { icon: Search, label: "Search EFL Database", color: "text-red-600" },
    {
      icon: Calendar,
      label: "Generate Repayment Schedule",
      color: "text-indigo-600",
    },
  ];
  return (
    <>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={item?.onClick}
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 rounded-lg bg-opacity-10 ${item.color.replace(
                  "text-",
                  "bg-"
                )}`}
              >
                <item.icon className={`h-6 w-6 ${item.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Quick access to {item.label.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <RepaymentDrawer repaymentDrawer={repaymentDrawer} setRepaymentDrawer={setRepaymentDrawer} />
      <InviteProviderDrawer inviteProviderDrawer={inviteProviderDrawer} setInviteProviderDrawer={setInviteProviderDrawer} />
    </>
  );
};

export default DashBoard;

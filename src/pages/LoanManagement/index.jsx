import React, { useState, useCallback, useMemo } from "react";
import {
  Table,
  Input,
  Select,
  Card,
  Button,
  Space,
  Dropdown,
  Menu,
} from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  FilterOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import ActionTagTable from "../../components/AuthLayout/ActionTagTable";
import { DebounceInput } from "react-debounce-input";

const { Option } = Select;

const LoanManagement = () => {
  const [searchText, setSearchText] = useState(null);
  const [paginationForTable, setPaginationforTable] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
    itemLength: 0,
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      ellipsis: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => <>test</>,
    },
    {
      title: "Actions",
      key: "actions",
      render: () => <>hello</>,
    },
  ];

  //search
  const onChangeSearch = () => {
     searchText()
  };

  return (
    <div className="shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Loan Application</h1>
      </div>
      <div>
        <DebounceInput
          element={Input}
          onChange={onChangeSearch}
          minLength={3}
          debounceTimeout={500}
          className="input fs-16 mr-2 w-50"
          placeholder="Search Notification"
          size="large"
        />
      </div>

      <div className="overflow-x-auto">
        <ActionTagTable dataSource={[]} columns={columns} />
      </div>
    </div>
  );
};

export default LoanManagement;

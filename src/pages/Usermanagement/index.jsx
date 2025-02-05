import React, { useState, useCallback, useMemo } from 'react'
import { Table, Input, Select, Card, Button, Space, Dropdown, Menu } from 'antd'
import { SearchOutlined, PlusOutlined, FilterOutlined, MoreOutlined } from '@ant-design/icons'
import { DebounceInput } from 'react-debounce-input'
import ActionTagTable from '../../components/AuthLayout/ActionTagTable'

const { Option } = Select

// Mock data for the table
const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Viewer' },
// add 15 more data
  { id: 6, name: 'David Lee', email: 'david@example.com', role: 'Admin' },
  { id: 7, name: 'Eva Green', email: 'eva@example.com', role: 'Editor' },

  { id: 8, name: 'Frank White', email: 'frank@example.com', role: 'Viewer' },
  { id: 9, name: 'Grace Black', email: 'grace@example.com', role: 'Editor' },
  { id: 10, name: 'Hannah Gray', email: 'hannah@example.com', role: 'Viewer' },
  { id: 11, name: 'Ivy Brown', email: 'ivy@example.com', role: 'Admin' },
  { id: 12, name: 'Jack Blue', email: 'jack@example.com', role: 'Editor' },
  { id: 13, name: 'Karen Red', email: 'karen@example.com', role: 'Viewer' },
  { id: 14, name: 'Liam Yellow', email: 'liam@example.com', role: 'Editor' },
  { id: 15, name: 'Mia Pink', email: 'mia@example.com', role: 'Viewer' },
  { id: 16, name: 'Noah Orange', email: 'noah@example.com', role: 'Admin' },
  { id: 17, name: 'Olivia Purple', email: 'olivia@example.com', role: 'Editor' },
  { id: 18, name: 'Paul Green', email: 'paul@example.com', role: 'Viewer' },
  { id: 19, name: 'Quinn Black', email: 'quinn@example.com', role: 'Editor' },
  { id: 20, name: 'Ryan White', email: 'ryan@example.com', role: 'Viewer' },
  { id: 21, name: 'Sara Blue', email: 'sara@example.com', role: 'Admin' },
  { id: 22, name: 'Tom Red', email: 'tom@example.com', role: 'Editor' },
  { id: 23, name: 'Uma Yellow', email: 'uma@example.com', role: 'Viewer' },
  { id: 24, name: 'Vera Pink', email: 'vera@example.com', role: 'Editor' },
  { id: 25, name: 'Wade Orange', email: 'wade@example.com', role: 'Viewer' },
  { id: 26, name: 'Xander Purple', email: 'xander@example.com', role: 'Admin' },
  { id: 27, name: 'Yara Green', email: 'yara@example.com', role: 'Editor' },
  { id: 28, name: 'Zach Black', email: 'zach@example.com', role: 'Viewer' },


   

]

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [roleFilter, setRoleFilter] = useState(null)

  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value)
  }, [])

  const handleRoleFilter = useCallback((value) => {
    setRoleFilter(value)
  }, [])

  const filteredData = useMemo(() => {
    return initialData.filter(
      (item) =>
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.role.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (roleFilter ? item.role === roleFilter : true)
    )
  }, [searchTerm, roleFilter])

  const actionMenu = (
    <Menu>
      <Menu.Item key="1">Edit</Menu.Item>
      <Menu.Item key="2" danger>Delete</Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => (
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          role === 'Admin' ? 'bg-red-100 text-red-800' :
          role === 'Editor' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {role}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: () => (
        <Space>
          <Button size="small" type="primary" className="hidden sm:inline-block">Edit</Button>
          <Button size="small" danger className="hidden sm:inline-block">Delete</Button>
          <Dropdown overlay={actionMenu} trigger={['click']} className="sm:hidden">
            <Button icon={<MoreOutlined />} size="small" />
          </Dropdown>
        </Space>
      ),
    },
  ]

  return (
    <Card className="shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">User Management</h1>
        <Button type="primary" icon={<PlusOutlined />} className="w-full md:w-auto">
          Add User
        </Button>
      </div>
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-grow">
            <Input
              placeholder="Search users..."
              prefix={<SearchOutlined className="text-gray-400" />}
              onChange={handleSearch}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-48">
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by role"
              onChange={handleRoleFilter}
              allowClear
              className="w-full"
            >
              <Option value="Admin">Admin</Option>
              <Option value="Editor">Editor</Option>
              <Option value="Viewer">Viewer</Option>
            </Select>
          </div>
        </div>
        {(searchTerm || roleFilter) && (
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <FilterOutlined className="mr-2" />
            <span>
              Showing results for
              {searchTerm && <span className="font-medium"> "{searchTerm}"</span>}
              {searchTerm && roleFilter && " and "}
              {roleFilter && <span className="font-medium"> {roleFilter} role</span>}
            </span>
          </div>
        )}
      </div>
      <div className="overflow-x-auto">
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="id"
          pagination={{
            total: filteredData.length,
            pageSize: 10,
            showSizeChanger: true,
            showQuickJumper: true,
          }}
          scroll={{ x: 'max-content' }}
        />
      </div>
    </Card>
  )
}

export default AdminPanel


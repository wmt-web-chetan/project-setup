import React, { useState, useCallback, useMemo } from 'react'
import { Table, Input, Select, Card, Button, Space, Dropdown, Menu } from 'antd'
import { SearchOutlined, PlusOutlined, FilterOutlined, MoreOutlined } from '@ant-design/icons'

const { Option } = Select

// Mock data for the table
const initialData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'Viewer' },
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


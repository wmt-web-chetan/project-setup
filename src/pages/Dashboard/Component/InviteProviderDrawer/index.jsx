import React, { useEffect } from "react";
import CustomDrawer from "../../../../components/AuthLayout/Common/CustomDrawer";
import { Form, Select, InputNumber, DatePicker, Button, Input } from "antd";
const { Option } = Select;

const InviteProviderDrawer = ({inviteProviderDrawer,setInviteProviderDrawer}) => {
  const [form] = Form.useForm();
   const onFinish = (values) => {
    console.log("Form values:", values);
  };
  useEffect(() => {
    if(!inviteProviderDrawer){
      form.resetFields();
    }
  }, [form, inviteProviderDrawer]);
  return (
    <CustomDrawer
      isDrawerOpen={inviteProviderDrawer}
      setIsDrawerOpen={setInviteProviderDrawer}
      title={"Invite Service Provider"}
    >
    <Form layout="vertical" size="large" onFinish={onFinish} form={form}>
      {/* Email Address */}
      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          { required: true, message: "Please enter your email!" },
          { type: "email", message: "Please enter a valid email address!" }
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>

      {/* Name */}
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name!" }]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      {/* Role */}
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please select a role!" }]}
      >
        <Select placeholder="Select role">
          <Option value="valuer_vehicle">Valuer (Vehicle/Real Estate/Electronics)</Option>
          <Option value="surveyor">Surveyor</Option>
          <Option value="legal_advisor">Legal Advisor</Option>
          <Option value="bailiff">Bailiff</Option>
        </Select>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </CustomDrawer>
  );
};

export default InviteProviderDrawer;

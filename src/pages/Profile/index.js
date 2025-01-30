import React, { useState, useRef } from "react";
import { Form, Input, Button, Avatar, Card } from "antd";
import { EditOutlined, UserOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AdminProfile = () => {
  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const fileInputRef = useRef(null);

  const onFinish = (values) => {
    console.log("Success:", values);
    setIsEditing(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setAvatar(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Please upload an image file");
      }
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Card className="min-h-[80vh]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profile</h1>
        <Button
          type="primary"
          onClick={() => setIsEditing(!isEditing)}
          className=""
          size="large"
        >
          ⚡ Edit Profile
        </Button>
      </div>

      <div className="border-t pt-6">
        <Form
          form={form}
          name="admin_profile"
          initialValues={{
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+1 (555) 123-4567",
          }}
          onFinish={onFinish}
          layout="vertical"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                
                <div className="relative">
                  <Avatar
                    shape="circle"
                    className="drop-shadow-lg border-4 border-secondary"
                    size={{
                      xs: 140,
                      sm: 140,
                      md: 140,
                      lg: 140,
                      xl: 140,
                      xxl: 160,
                    }}
                    src={avatar}
                  >
                    {!avatar && <UserOutlined />}
                  </Avatar>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: 'none' }}
                  />
                  {isEditing && <button
                    type="button"
                    onClick={handleAvatarClick}
                    className="absolute border-none bottom-0 right-0 bg-white hover:bg-primary text-primary hover:text-white w-11 h-11 rounded-full flex justify-center items-center drop-shadow-lg"
                  >
                    <EditOutlined className="text-xl" />
                  </button>}
                </div>
              </div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-500">Super Admin</p>
            </div>

            <div className="md:col-span-2">
              <Form.Item
                name="name"
                label={<span className="flex items-center">Name </span>}
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input
                  disabled={!isEditing}
                  className="rounded lg:w-1/2"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="email"
                label={<span className="flex items-center">Email </span>}
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  disabled={!isEditing}
                  className="rounded lg:w-1/2"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="phone"
                label={<span className="flex items-center">Phone Number </span>}
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                className="lg:w-1/2"
              >
                <PhoneInput
                  disabled={!isEditing}
                  country={"au"}
                  onlyCountries={["au"]}
                  countryCodeEditable={true}
                  // enableSearch={true}
                  placeholder="Enter Phone Number"
                  defaultMask="+61 9#### ####"
                  inputProps={{
                    name: "phone_number",
                    required: true,
                    autoFocus: false,
                    noValidate: true
                  }}
                  inputStyle={{
                    height: "40px",
                    width: "100%",
                  }}
                />
              </Form.Item>

              {isEditing && (
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-3"
                    size="large"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              )}
            </div>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default AdminProfile;
import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Input,
  Select,
  Row,
  Button,
  Switch,
  Avatar,
  notification,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployeeAction,
  editEmployeeAction,
} from "../../../services/store/Employee/actions";
import { allRolesForDropAction } from "../../../services/store/Roles&Permissions/actions";
import config from "../../../utils/url-config";
import user from "../../../Assets/user.png";
import "./editModal.scss";

const { Option } = Select;

const EditModal = ({
  openModal,
  setIsShowEditorAddModal,
  userData,
  setEditUserData,
}) => {
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImageForApi, setSelectedImageForApi] = useState(null);
  const [options, setOptions] = useState([]);
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const { AllRolesForDropdown } = useSelector((state) => state.roles);
  const { userDetail } = useSelector((state) => state.getUser);

  useEffect(() => {
    dispatch(allRolesForDropAction());
  }, []);

  useEffect(() => {
    const list = AllRolesForDropdown?.data?.map((item) => ({
      value: item.id,
      label: item.name,
    }));
    setOptions(list);
  }, [AllRolesForDropdown]);

  useEffect(() => {
    if (userData) {
      const {
        first_name,
        last_name,
        email,
        phone_number,
        role_id,
        is_active,
        photo,
        role,
      } = userData;

      if (photo) {
        setProfileImage(`${config?.IMAGE_URL}${photo}`);
      } else {
        setProfileImage(null);
      }

      const formattedData = {
        first_name,
        last_name,
        email,
        phone_number,
        is_active,
        role: role?.name,
      };
      form.setFieldsValue(formattedData);
    } else {
      form.resetFields();
    }
  }, [userData]);

  const onCancel = () => {
    setIsShowEditorAddModal(false);
    setProfileImage(null);
    setEditUserData(null);
    setSelectedImageForApi(null);
    form.resetFields();
  };

  const onFinish = (values) => {
    if (userData) {
      const formData = new FormData();

      formData.append("first_name", values?.first_name);
      formData.append("last_name", values?.last_name);
      formData.append("email", values?.email);
      formData.append("phone_number", values?.phone_number);
      formData.append(
        "is_active",
        values?.is_active ? values?.is_active : false
      );
      if (userData?.role?.name == values?.role) {
        formData.append("role_id", userData?.role_id);
      } else {
        formData.append("role_id", values?.role);
      }

      if (selectedImageForApi) {
        formData.append("photo", selectedImageForApi);
      }
      const data = {
        id: userData?.id,
      };
      dispatch(editEmployeeAction({ formData, data })).then((res) => {
        setEditUserData(null);
        setProfileImage(null);
        setIsShowEditorAddModal(false);
        setSelectedImageForApi(null);
      });
    } else {
      const formData = new FormData();

      const data = {
        first_name: values?.first_name,
        last_name: values?.last_name,
        email: values?.email,
        phone_number: values?.phone_number,
        password: values?.password,
        is_active: values?.is_active ? values?.is_active : false,
        role_id: values?.role,
      };

      formData.append("data", JSON.stringify(data));

      if (selectedImageForApi) {
        formData.append("photo", selectedImageForApi);
      }
      dispatch(createEmployeeAction(formData)).then((response) => {
        if (response?.payload?.meta?.success) {
          form.resetFields();
          setEditUserData(null);
          setProfileImage(null);
          setIsShowEditorAddModal(false);
          setSelectedImageForApi(null);
        }
      });
    }
  };

  const onChangeProfileImageUpload = (e) => {
    const file = e?.target?.files[0];
    const reader = new FileReader();
    const acceptedImageTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!acceptedImageTypes.includes(file?.type)) {
      notification.error({
        message: "Error",
        description: "Please upload a valid image file",
      });
      return;
    }
    setSelectedImageForApi(file);
    reader.onload = (event) => {
      setProfileImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const validateSpaces = (rule, value) => {
    if (value && value.trim() === "") {
      return Promise.reject(`Only blank space is not allowed!`);
    }
    return Promise.resolve();
  };

  const validateMobile = (_, value) => {
    if (!value) {
      return Promise.reject("Please input your mobile number!");
    }

    // Remove any non-digit characters
    const digitsOnly = value.replace(/\D/g, "");

    if (!/^61\d{9,10}$/.test(digitsOnly)) {
      return Promise.reject("Please enter a valid mobile number");
    }
    return Promise.resolve();
  };

  const validatePassword = (_, value) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()[\]{};:'",.<>?\\|_+=~-])[A-Za-z\d!@#$%^&*()[\]{};:'",.<>?\\|_+=~-]{5,16}$/;
    if (!value || passwordRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 5-16 characters long!"
      )
    );
  };

  return (
    <Modal
      title={userData ? "Edit Admin User" : "Add New Admin User"}
      open={openModal}
      onCancel={onCancel}
      footer={false}
      destroyOnClose
    >
      <div className="wrapperForImageUploadProfile d-flex justify-content-center">
        <div className="picture">
          {profileImage && !imageError ? (
            <img
              className="img-fluid"
              src={profileImage}
              alt="groupcard"
              onError={() => setImageError(true)}
            />
          ) : (
            <Avatar
              size={90}
              src={user}
              className="img-fluid text-capitalize"
              alt="groupcard"
            />
          )}
        </div>
        <div className="inputForImageProfile">
          <label
            onClick={(e) => e.stopPropagation()}
            className="inputForImageLable"
          >
            <EditOutlined className="text-white fs-12 imageUploadProfileEditeIcon" />
            <input
              type="file"
              onChange={(e) => onChangeProfileImageUpload(e)}
            />
          </label>
        </div>
      </div>
      <div className="flex justify-content-center">
        <p className="text-gray">
          Note: Only PNG, JPG, and SVG formats are allowed.
        </p>
      </div>

      <Form form={form} className="mt-2" onFinish={onFinish}>
        <Form.Item
          name="first_name"
          label={<span style={{ fontSize: "16px" }}>First Name</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          rules={[
            { required: true, message: "Please input your first name!" },
            { validator: validateSpaces },
          ]}
        >
          <Input size="large" placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="last_name"
          label={<span style={{ fontSize: "16px" }}>Last Name</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          rules={[
            { required: true, message: "Please input your last name!" },
            { validator: validateSpaces },
          ]}
        >
          <Input size="large" placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="email"
          label={<span style={{ fontSize: "16px" }}>Email</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          rules={[
            { required: true, message: "Please input your E-mail!" },
            { type: "email", message: "The input is not valid E-mail!" },
            { validator: validateSpaces },
          ]}
        >
          <Input
            size="large"
            placeholder="Email"
            disabled={userData ? true : false}
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item
          name="phone_number"
          label={<span style={{ fontSize: "16px" }}>Mobile</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          rules={[{ validator: validateMobile }]}
        >
          <PhoneInput
            country={"au"}
            onlyCountries={["au"]}
            countryCodeEditable={false}
            placeholder="Enter Phone Number"
            inputStyle={{
              width: "100%",
              height: "40px",
            }}
          />
        </Form.Item>

        {!userData && (
          <Form.Item
            name="password"
            label={<span style={{ fontSize: "16px" }}>Password</span>}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            rules={[
              { required: true, message: "Please input your password!" },
              { validator: validatePassword },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Password"
              type="password"
              autoComplete="new-password"
            />
          </Form.Item>
        )}

        <Form.Item
          name="role"
          label={<span style={{ fontSize: "16px" }}>Role</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          rules={[{ required: true, message: "Please select the role!" }]}
        >
          <Select
            placeholder="Select a Role"
            style={{
              width: "100%",
            }}
            options={options?.map((item) => ({
              value: item?.value,
              label: item?.label,
            }))}
            size="large"
            disabled={userDetail?.id == userData?.id}
          />
        </Form.Item>

        <Form.Item
          name="is_active"
          label={<span style={{ fontSize: "16px" }}>Status</span>}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          size="large"
        >
          <Switch className="ml-3" disabled={userDetail?.id == userData?.id} />
        </Form.Item>

        <Form.Item className="">
          <Row justify="end">
            <Button className="mr-3" onClick={onCancel} size="large">
              Cancel
            </Button>
            <Button htmlType="submit" type="primary" size="large">
              Save
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;

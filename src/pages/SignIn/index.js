import React, { useEffect } from "react";
import "./SignIn.scss";

import {
  Button,
  Col,
  Row,
  Form,
  Input,
  Checkbox,
  notification,
  Select,
} from "antd";
import { theme } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Group from "../../Assets/logo11.svg";
import leftLogo from "../../Assets/logoddd.svg";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const token = localStorage.getItem("BASELINE_TOKEN");
  useEffect(() => {
    if (token) {
      window.location.href = "/";
    }
  }, []);

  const onFinish = (values) => {
     
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 

  return (
    <div className="signInMainContainer h-screen">
      <Row className="h-screen">
        <Col
          xs={24}
          md={24}
          lg={12}
          className="h-full base-container hidden lg:flex justify-center items-center"
          style={{ backgroundColor: `${colorPrimary}` }}
        >
          <img src={leftLogo} alt="logo1" className="w-1/2 pl-4" />
        </Col>
        <Col xs={24} md={24} lg={12} className="h-full ">
          <div className="rightBox flex flex-col items-center justify-center h-full">
            <div className="mb-3">
              <img
                src={Group}
                alt="logo"
                className=""
                style={{ width: "50px" }}
              />
            </div>
            <div
              className="text-xl font-semibold"
              
            >
              Welcome back
            </div>
            <div
              className="fs-16  text-primary"
            >
              Please enter your details to sign in
            </div>
            <div className="signUpform" data-testid="signin-form-id">
              <Form
                name="signIn"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                scrollToFirstError
                requiredMark={"optional"}
              >
  
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "Please enter valid email!",
                    },
                  ]}
                >
                  <Input size="large" placeholder="Enter Email" />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please enter your password!" },
                  ]}
                >
                  <Input.Password size="large" placeholder="Enter Password" />
                </Form.Item>

                <Row>
                  <Col
                    xs={24}
                    md={24}
                    lg={24}
                    className="flex justify-end mb-2"
                  >
                    <Link
                      to="/forgotPassword"
                      className="forgotPassLink text-primary mb-2"
                      data-testid="signin-forgot-password-id"
                    >
                      Forgot Password?
                    </Link>
                  </Col>
                </Row>

                <Form.Item>
                  <Button
                    className=""
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignIn;

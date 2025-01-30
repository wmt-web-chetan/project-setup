import React, { useEffect, useState } from "react";
import "./ForgetPassword.scss";
import { Button, Col, Row, Form, Input, notification, Select } from "antd";
import { theme } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo1 from "../../Assets/logoddd.svg";
import logo from "../../Assets/logo11.svg";
import { useDispatch } from "react-redux";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const token = localStorage.getItem("BASELINE_TOKEN");
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    const token = localStorage.getItem("IPBT_TOKEN");
    if (token) {
      navigate("/");
    }
  }, []);


  return (
    <div className="signUpMainContainer" data-testid="main-forgot-password-id">
      <Row className="h-screen">
        <Col
          xs={24}
          md={24}
          lg={12}
          className="h-full base-container hidden lg:flex justify-center items-center"
          style={{ backgroundColor: `${colorPrimary}` }}
        >
          <img src={logo1} alt="logo1" className="w-1/2 pl-4" />
        </Col>
        <Col xs={24} md={24} lg={12} className=" base-container h-full">
          <div className="rightBox flex flex-col justify-center items-center h-full ">
            <div>
              <img src={logo} alt="logo" className="w-20 h-full" />
            </div>
            <div className="text-3xl font-semibold  text-bolder text-primary mb-5">
              Forgot Password?
            </div>
            <div className="text-base text-primary text-center w-50 mb-5">
              Enter your email address and we'll send you a link to reset your
              password.
            </div>

            <div className="signUpform">
              <Form
                name="signUp"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                scrollToFirstError
                requiredMark={"optional"}
              >
                <Form.Item
                  label="Email"
                  name="Email"
                  rules={[
                    { required: true, message: "Please enter your email!" },
                    {
                      type: "email",
                      message: "Please enter valid email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    type="email"
                    placeholder="Enter Email"
                    onChange={onEmailChange}
                    value={email}
                    data-testid="email-input-element"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    className="mt-3"
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                    data-testid="send-button-element"
                  >
                    Send
                  </Button>
                </Form.Item>
              </Form>
              <div className="text-center mb-5">
                Remembered Password?{" "}
                <Link to="/login" className="text-primary">
                  Sign In{" "}
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgetPassword;

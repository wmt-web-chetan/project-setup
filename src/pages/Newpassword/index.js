import React, { useEffect } from "react";
import "./newpassword.scss";

import { Button, Col, Row, Form, Input, Checkbox } from "antd";
import { theme } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../Assets/logo11.svg";
import logo1 from "../../Assets/logoddd.svg";
import { getItem } from "../../utils/localStorage";

const NewPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { resetpassword } = useSelector((state) => state.authentication);
  console.log(resetpassword, "test24");

  useEffect(() => {
    // if (resetpassword?.meta?.status == 200) {
    //   navigate("/login");
    // }
  }, [resetpassword]);
  useEffect(()=>{
    const token=getItem("BASELINE_TOKEN")
    if(token){
      navigate("/")
    }

  },[])

  const {
    token: { colorPrimary , secondaryColor },
  } = theme.useToken();

  const onFinish = (values) => {
  
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const validatePassword = (_, value) => {
    // Strong password regex: At least one uppercase, one lowercase, one digit, one special character, and minimum 8 characters
    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{5,16}$/;
    if (!value || passwordRegex.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(
      new Error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and minimum 5 characters!"
      )
    );
  };

  return (
    <div className="signInMainContainer">
      <Row className="h-screen">
        <Col
          xs={24}
          md={24}
          lg={12}
          className="h-full base-container hidden lg:flex justify-center items-center bg-[]"
          style={{ backgroundColor: `${colorPrimary}` }}
        >
          <img src={logo1} alt="logo1" className="w-1/2 pl-4" />
        </Col>
        <Col xs={24} md={24} lg={12} className="h-full ">
          <div className="rightBox flex flex-col items-center justify-center h-full">
            <div className="mb-3">
              <img src={logo} alt="logo" className="w-20 h-full" />
            </div>

            <div
              className="fs-16 text-primary mb-5"
              data-testid="signin-right-form-des"
            >
              Please reset your password!
            </div>
            <div className="signUpform" data-testid="signin-form-id">
              <Form
                name="passwordreset"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                scrollToFirstError
                requiredMark={"optional"}
              >
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },

                    { validator: validatePassword },
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter New Password"
                  />
                </Form.Item>
                <Form.Item
                  name="confirmpass"
                  dependencies={["password"]}
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "Password does not match!"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    size="large"
                    placeholder="Enter Confirm Password"
                    data-testid="pass-confirm-id"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    className=""
                    type="primary"
                    size="large"
                    block
                    htmlType="submit"
                  >
                    Submit
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

export default NewPassword;

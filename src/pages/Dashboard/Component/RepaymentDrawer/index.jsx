import React, { useEffect } from "react";
import CustomDrawer from "../../../../components/AuthLayout/Common/CustomDrawer";
import { Form, Select, InputNumber, DatePicker, Button } from "antd";
const { Option } = Select;

const RepaymentDrawer = ({repaymentDrawer,setRepaymentDrawer}) => {
  const [form] = Form.useForm();
   const onFinish = (values) => {
    console.log("Form values:", values);
  };
  useEffect(() => {
    if(!repaymentDrawer){
      form.resetFields();
    }
  }, [form, repaymentDrawer]);

  
  return (
    <CustomDrawer
      isDrawerOpen={repaymentDrawer}
      setIsDrawerOpen={setRepaymentDrawer}
      title={"New Repayment"}
      form={form}
    >
     <Form layout="vertical" size="large" onFinish={onFinish} form={form}>
      {/* Borrower ID */}
      <Form.Item
        label="Borrower ID"
        name="borrowerId"
        rules={[{ required: true, message: "Please select a borrower ID!" }]}
      >
        <Select showSearch placeholder="Select Borrower" optionFilterProp="children">
          <Option value="1">John Doe</Option>
          <Option value="2">Jane Smith</Option>
          <Option value="3">Mike Johnson</Option>
        </Select>
      </Form.Item>

      {/* Amount Paid */}
      <Form.Item
        label="Amount Paid"
        name="amountPaid"
        rules={[
          { required: true, message: "Please enter the amount paid!" },
          { type: "number", message: "Amount must be a number!" }
        ]}
      >
        <InputNumber style={{ width: "100%" }} min={0} placeholder="Enter amount" />
      </Form.Item>

      {/* Repayment Date */}
      <Form.Item
        label="Repayment Date"
        name="repaymentDate"
        rules={[{ required: true, message: "Please select a repayment date!" }]}
      >
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>

      {/* Submit Button */}
      
    </Form>
    </CustomDrawer>
  );
};

export default RepaymentDrawer;

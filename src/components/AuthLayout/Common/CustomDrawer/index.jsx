import { Button, Drawer } from "antd";
import React from "react";
import "./CustomeDrawer.scss";

const CustomDrawer = ({ children, isDrawerOpen, setIsDrawerOpen, title , form }) => {
  //   const showDrawer = () => {
  //     setIsDrawerOpen(true);
  //   };

  const onClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Drawer
        title={<h3 className="text-lg font-semibold">{title}</h3>}
        placement="right"
        closable={true}
        onClose={onClose}
        open={isDrawerOpen}
        footer={
          <Button type="primary" onClick={()=>{form.submit()}} size="large" block>
            Submit
          </Button>
        }
        // getContainer={false}
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;

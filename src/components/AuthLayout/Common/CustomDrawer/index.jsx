import { Drawer } from "antd";
import React from "react"; 
import './CustomeDrawer.scss'

const CustomDrawer = ({ children,isDrawerOpen,setIsDrawerOpen,title }) => {
  
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
        // placement="right"
        closable={false}
        onClose={onClose}
        open={isDrawerOpen}
        // getContainer={false}
      >
        {children}
      </Drawer>
    </>
  );
};

export default CustomDrawer;

import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined, DeleteFilled } from "@ant-design/icons";

const DeleteModal = (props) => {
  const { openModal, onCancel, onOk,text } = props;
  return (
    <>
      <Modal centered data-testid="delete-modal" title="" open={openModal} onOk={onOk} onCancel={onCancel} okText="Delete" okButtonProps={{danger:true}}>
        <div className="d-flex flex-column align-items-center justify-content-center">
        <DeleteFilled  className="text-red fs-24 pr-3 flex items-start mt-4 " style={{ color: "#ee4b4f"}}/>
          <p className="">{text}</p>
        </div>
      </Modal>
    </>
  );
};

export default DeleteModal;

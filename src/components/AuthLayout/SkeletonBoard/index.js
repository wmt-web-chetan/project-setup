import React from "react";
import "./SkeletonBoard.scss";
import { Spin } from "antd";

const SkeletonBoard = ({ className }) => {
  return (
    <div className={className}>
      {/* <Spin size="large" /> */}
      <div className='loader'></div>

    </div>
  );
};

export default SkeletonBoard;

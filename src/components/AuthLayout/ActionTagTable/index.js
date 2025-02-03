import { Table } from "antd";
import React from "react";
import "./ActionTagTable.scss";
import { useSelector } from "react-redux";

const ActionTagTable = (props) => {
  const { isDark } = useSelector((state) => state.darkMode);
  const { dataSource, columns, heading, handleChange, pagination } = props;

  return (
    <div data-testid="action-tag-table" className="dashboard-table">
      {heading ? (
        // <h4
        //   className={`fs-18 text-bolder mb-3 ${isDark ? "text-white" : ""}`}
        //   data-testid="heading-block"
        // >
        //  
        // </h4>
        <h3>{heading}</h3>
      ) : null}
      <div className="table-box">
        <Table
          dataSource={dataSource}
          columns={columns}
          onChange={handleChange}
          pagination={
            pagination ? { ...pagination, showSizeChanger: false } : false
          }
          scroll={{ x: 400 }}
         
        />
      </div>
    </div>
  );
};

export default ActionTagTable;

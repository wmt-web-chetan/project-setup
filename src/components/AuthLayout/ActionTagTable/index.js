import { Table } from "antd";
import React from "react";
import "./ActionTagTable.scss";
import { useSelector } from "react-redux";

const ActionTagTable = (props) => {
  const { isDark } = useSelector((state) => state.darkMode);
  const { dataSource, columns, heading, handleChange, pagination } = props;

  return (
    <div data-testid="action-tag-table" className="dashboard-table">
      
      <div className="table-box">
        <Table
          dataSource={dataSource}
          columns={columns}
          onChange={handleChange}
          pagination={
            pagination ? { ...pagination, showSizeChanger: true } : false
          }
          scroll={{ x: 400 }}
         
        />
      </div>
    </div>
  );
};

export default ActionTagTable;

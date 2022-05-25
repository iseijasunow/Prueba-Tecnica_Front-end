import React, { useState } from "react";
import { Modal, Table } from "antd";
import { Link } from "react-router-dom";
import { TableOutlined } from "@ant-design/icons";

const SearchUserModalResult = ({ id, users, setShowResultModal }) => {
  const [showModal, setShowModal] = useState(true);
  let tableDataSource = [];
  let tableColumns = [
    { title: "Id", dataIndex: "id", key: "id" },
    {
      title: "Name",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Graphs",
      dataIndex: "graphs",
      key: "graphs",
    },
  ];

  const renderUsers = () => {
    users.length > 0 &&
      users.map((user) => {
        tableDataSource.push({
          key: user.id,
          login: <Link to={`userResult/${user.id}`}>{user.login}</Link>,
          graphs: (
            <Link to={`userFolowersInfo/${user.id}`}>
              <TableOutlined />
            </Link>
          ),
        });
      });
  };

  const paginationConfig = {
    pageSize: 10,
    defaultCurrent: 1,
    total: 1,
    pageSize: 10,
    pageSizeOptions: 10,
  };

  const onCancel = () => {
    setShowModal(false);
    setShowResultModal(false);
  };
  renderUsers();

  return (
    <Modal
      visible={showModal}
      title="Users Result"
      closable
      onCancel={onCancel}
    >
      <Table
        dataSource={tableDataSource}
        columns={tableColumns}
        pagination={paginationConfig}
      />
    </Modal>
  );
};

export default SearchUserModalResult;

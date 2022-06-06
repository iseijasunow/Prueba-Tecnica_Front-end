import React, { useState } from "react";
import { Layout, Input, Button, Typography } from "antd";
import SearchUserModalResult from "../components/modals/SearcUserModalResult";
import { fetchData } from "../utility/fetchData";
import { SearchOutlined } from "@ant-design/icons";

const { Content, Header } = Layout;
const { Title } = Typography;
const API_URL = process.env.API_URL;
const Home = () => {
  const [user, setUser] = useState([]);
  const [usersResult, setUsersResult] = useState([]);
  const [showResultModal, setShowResultModal] = useState(false);
  let initialState = fetchData(API_URL);

  const handleClick = () => {
    let users = [];
    if (validateInput() !== 1) {
      if (initialState.items) {
        if (user.length > 0) {
          users = initialState.items.filter((item) => {
            return item.login.toString().toLowerCase().indexOf(user, 0) !== -1;
          });
          setUsersResult(users);
          setShowResultModal(true);
        }
      }
    }
  };

  const validateInput = () => {
    if (user.length < 4) {
      alert("El tamaño del valor de búsqueda debe ser mínimo de 4 caracteres");
      return 1;
    }
    if (user === "iseijasunow") {
      alert("Favor de elegir otro usuario diferente a iseijasunow");
      return 1;
    }
  };

  return (
    <Layout>
      <Header style={{ textAlign: "center" }}>
        <Title style={{ color: "white" }}>Buscar por Usuario</Title>
      </Header>
      <Content>
        <Input.Group style={{ display: "flex" }}>
          <Input
            type={"text"}
            placeholder="Favor de introducir un usuario"
            value={user}
            onChange={(u) => {
              setUser(u.currentTarget.value);
            }}
          />

          <Button type="primary" onClick={handleClick}>
            <SearchOutlined />
          </Button>
        </Input.Group>
      </Content>

      {showResultModal && (
        <SearchUserModalResult
          users={usersResult}
          setShowResultModal={setShowResultModal}
        />
      )}
    </Layout>
  );
};

export default Home;

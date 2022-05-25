import React, { useState } from "react";
import { Layout, Typography, Card } from "antd";
import { fetchData } from "../utility/fetchData";
import { useParams } from "react-router";
const API_URL = process.env.API_URL;
const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Meta } = Card;

const User = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    login: "",
    avatar_url: "",
    html_url: "",
    score: "",
  });
  let initialState = fetchData(API_URL);

  const getUserInfo = () => {
    let userObtained = {};
    if (initialState.items) {
      initialState.items.map((user) => {
        if ((user.id = id.toString())) {
          console.log(user.login);
          userObtained.login = user.login;
          userObtained.avatar_url = user.avatar_url;
          userObtained.html_url = user.html_url;
          userObtained.score = user.score;
        }

        if (userInfo.login === "") {
          setUserInfo(userObtained);
        }
      });
    }
  };

  getUserInfo();

  return (
    <Layout>
      <Header>
        <Title style={{ color: "white", textAlign: "center" }}>User Info</Title>
      </Header>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <Card
          bodyStyle={{ textAlign: "center", cursor: "default" }}
          headStyle={{
            textAlign: "center",
            fontSize: "20px",
            cursor: "default",
          }}
          hoverable
          style={{ width: 400, cursor: "default" }}
          cover={<img alt={userInfo.avatar_url} src={userInfo.avatar_url} />}
          title={userInfo.login}
        >
          <Meta title={userInfo.login} description={userInfo.html_url} />
          <Footer style={{ width: "100%" }}>
            <a
              target={"_blank"}
              href={userInfo.html_url}
              style={{ margin: "0 10px" }}
            >
              Profile
            </a>
            <Text>Score: {userInfo.score}</Text>
          </Footer>
        </Card>
      </Content>
    </Layout>
  );
};

export default User;

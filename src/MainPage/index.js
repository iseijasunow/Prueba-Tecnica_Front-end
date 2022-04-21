import "../App.css";
import { useEffect, useState, useCallback } from "react";
import Table from "antd/lib/table";
import Image from "antd/lib/image";
import {
  Container,
  InputContainer,
  InputBase,
  ButtonBase,
  TableContainer,
  UserContainer,
  Error,
} from "../styles";
import { openNotification } from "../Notification";
import { Link } from "react-router-dom";
import UserChart from "../Chart";

const MainPage = () => {
  const [users, setUsers] = useState([]);
  const [userToFind, setUserToFind] = useState("");
  const [userSelected, setUserSelected] = useState({});

  const [showChart, setShowChart] = useState(false);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
      render: (data) => (
        <Link to={{ pathname: `./${data}`, query: { data } }}>{data}</Link>
      ),
    },
  ];

  const getChartData = useCallback((list) => {
    // aqui iba el codigo para buscar los followers de cada usuario :(
    /* let listData = [];
    for (let element of list) {
      fetch(`${element.followers_url}`)
        .then((data) => data.json())
        .then((response) => {
          console.log(response.length);
          listData.push({ followers: response.lenght, name: element.login });
        })
        .catch((err) => {
          new Error(err);
          openNotification(
            "Error",
            "Ocurrió un error al consultar la data, intenta más tarde",
            "error"
          );
        });
    }
    console.log(listData);*/
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/search/users?q=YOUR_NAME")
      .then((data) => data.json())
      .then((response) => {
        setUsers(response.items.slice(0, 10));
        getChartData(response.items.slice(0, 10));
      })
      .catch((err) => {
        new Error(err);
        openNotification(
          "Error",
          "Ocurrió un error al consultar la data, intenta más tarde",
          "error"
        );
      });
  }, [getChartData]);

  const getUser = () => {
    if (userToFind === "iseijasunow") {
      setUserToFind("");
      return openNotification(
        "Error",
        "No puedes buscar este usuario, usa otro.",
        "error"
      );
    }

    const user = users.filter((user) => user.login === userToFind);
    if (user.length === 0) {
      setUserToFind("");
      return openNotification(
        "Error",
        "No existe éste registro, prueba con otro",
        "error"
      );
    }
    setUserSelected(user[0]);
  };

  const back = () => {
    setUserSelected({});
    setUserToFind("");
  };

  return (
    <Container>
      {users.length === 0 ? (
        <Error>
          <h1>Ocurrió un error inesperado &#128128;</h1>
        </Error>
      ) : (
        <Container>
          <InputContainer>
            <InputBase
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUserToFind(e.target.value)}
              value={userToFind}
            />
            <ButtonBase
              type="button"
              onClick={() => getUser()}
              margin="0 0 0 10px"
              width="30%"
              disabled={userToFind.length < 4}
            >
              Go
            </ButtonBase>
          </InputContainer>

          {userSelected.id && (
            <UserContainer>
              <Image src={userSelected.avatar_url} width={300} />
              <p>{userSelected.login}</p>
              <p>{userSelected.html_url}</p>

              <ButtonBase type="button" onClick={() => back()} width="50%">
                Back
              </ButtonBase>
            </UserContainer>
          )}

          {users?.length > 0 && !userSelected.id && !showChart && (
            <TableContainer>
              <Table
                dataSource={users}
                columns={columns}
                pagination={{
                  position: ["bottomCenter"],
                  responsive: true,
                }}
              />
            </TableContainer>
          )}

          {showChart && <UserChart />}

          <ButtonBase
            type="button"
            onClick={() => setShowChart(!showChart)}
            width="30%"
            margin="0 0 10px 0"
          >
            {showChart ? "Hide Chart" : "Show Chart"}
          </ButtonBase>
        </Container>
      )}
    </Container>
  );
};

export default MainPage;

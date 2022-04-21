import "../App.css";
import Image from "antd/lib/image";
import { Container, ButtonBase, UserContainer, Error } from "../styles";
import { openNotification } from "../Notification";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const User = (props) => {
  const [user, setUser] = useState({});
  const { login } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((data) => data.json())
      .then((response) => setUser(response))
      .catch((err) => {
        new Error(err);
        openNotification(
          "Error",
          "Ocurrió un error al consultar la data, intenta más tarde",
          "error"
        );
      });
  }, [login]);

  return (
    <Container>
      <UserContainer>
        <Image src={user.avatar_url} width={300} />
        <p>{user.login}</p>
        <p>{user.html_url}</p>

        <ButtonBase width="50%">
          <Link to="/"> Back</Link>
        </ButtonBase>
      </UserContainer>
    </Container>
  );
};

export default User;

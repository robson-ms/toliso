import React, { useEffect, useState } from "react";
import Button from "../button";
import axios from "axios";
import { Container, Content } from "./styles";

const Header = () => {
  const [color, setColor] = useState("#04d676");
  const [test, setTest] = useState(false);
  const [users, setUsers] = useState([]);

  function handleClick() {
    setTest(true);
  }

  async function getUsers() {
    const res = await axios.get("https://api.github.com/users");

    setUsers(res.data);
  }

  useEffect(() => {
    getUsers();
    if (test) {
      setColor("red");
    }
  }, [test]);

  return (
    <Container>
      <Content>
        <div className="title">
          <h1>
            Tudo que não te ensinaram sobre <span>finanças.</span>
          </h1>
          <Button handleClick={handleClick} color={color}>
            Começar
          </Button>

          {/* {users.map((user) => (
            <>
              <img src={user.avatar_url} alt="" />
              <p>{user.login}</p>
            </>
          ))} */}
        </div>
        <div className="banner--img">
          <img
            src="https://toliso.com.br/assets/img/aprendendo.png"
            alt="banner"
          />
        </div>
      </Content>
    </Container>
  );
};

export default Header;

import React from "react";

import { Container, Navigate } from "./styles";

const Header = () => {
  return (
    <Container>
      <div className="header--area">
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <Navigate>
          <ul>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Conteúdo</li>
            <li>Contato</li>
          </ul>
        </Navigate>
      </div>
    </Container>
  );
};

export default Header;

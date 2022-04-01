import React from "react";

import { Container } from "./styles";

const Header = ({ children, color, handleClick }) => {
  return (
    <Container onClick={handleClick} style={{ background: color }}>
      {children}
    </Container>
  );
};

export default Header;

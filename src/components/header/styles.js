import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 999;

  .header--area {
    max-width: 1024px;
    width: 100%;
    display: flex;
    margin: 0 auto;
    align-items: center;

    justify-content: space-between;
    padding: 0 10px;

    .logo h1 {
      background: -webkit-linear-gradient(#04d676, #00aec2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const Navigate = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  padding-right: 15px;

  ul {
    display: flex;
  }

  ul,
  li {
    list-style: none;
  }

  li {
    cursor: pointer;
    margin: 0 20px;
    border-bottom: 2px solid transparent;
    padding: 20px 0;
    font-size: 18px;
    font-weight: 600;
    transition: all ease 0.2s;

    :hover {
      border-bottom: 2px solid var(--primary);
    }
  }
`;

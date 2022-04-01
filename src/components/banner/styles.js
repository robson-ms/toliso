import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 80px);
`;

export const Content = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  margin: 0 auto;

  justify-content: center;
  align-items: center;

  .title {
    flex: 1;
    h1 {
      font-size: 48px;
      line-height: 60px;
      margin-bottom: 50px;

      span {
        color: var(--primary);
      }
    }
  }

  .banner--img {
    width: 450px;

    img {
      width: 100%;
    }
  }
`;

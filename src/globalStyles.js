import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&family=Poppins:ital,wght@0,200;0,500;0,600;0,700;1,400&family=Roboto:wght@300;400;500;700;900&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden ;
  }

  html,
  body,
  #root {
    min-height: 100%;
    
  }

  :root {
    --primary: #04d676;
    --secondary: #00aec2;
    --red: #ff3333;
    --gray: #585656;
  }
`;

export default GlobalStyle;

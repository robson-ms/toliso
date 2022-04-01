import Header from "./components/header";
import GlobalStyle from "./globalStyles";
import Banner from "./components/banner";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <Header />
      <Banner />
      <GlobalStyle />
    </Container>
  );
}

export default App;

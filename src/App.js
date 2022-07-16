import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { darkTheme, lightTheme } from "./utils/Theme";

const Container = styled.div`
  display: flex;
`;
const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;
const Wrapper = styled.div``;
const Card = styled.div``;

function App() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <ThemeProvider theme={darkmode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkmode={darkmode} setDarkmode={setDarkmode} />
        <Main>
          <Navbar />
          <Wrapper>
            <Card>test</Card>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;

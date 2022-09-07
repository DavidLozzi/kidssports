import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';
import Home from './components/home';

function App() {
  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
    }
  `
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;

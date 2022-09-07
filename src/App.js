import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './theme';

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

      </ThemeProvider>
    </>
  );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme.js';
import { GlobalStyle } from './style/GlobalStyle.js';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

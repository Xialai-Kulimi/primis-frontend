import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Button from '@mui/material/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <NavBar/>
    <App />
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

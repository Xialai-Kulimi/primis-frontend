import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppBar from './components/AppBar';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container>
      <AppBar username="asdf"></AppBar>
      <Typography>
        
      </Typography>
      <Button>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Container>
    </ThemeProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

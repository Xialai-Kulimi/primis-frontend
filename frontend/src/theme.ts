import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    "fontFamily": `"微軟正黑體", "Roboto", "Helvetica", "Arial", sans-serif`
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252',
    },
    secondary: {
      main: '#770000',
    },
    background: {
      default: '#121212',
      paper: '#181818',
    },
    text: {
      primary: '#dddddd',
    },
    error: {
      main: '#ff1400',
    },
  },
});

export default theme
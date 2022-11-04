import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#ff5252',
    },
    secondary: {
      main: '#181818',
    },
    background: {
      default: '#212121',
      paper: '#303030',
    },
  },
});

export default theme
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff5252',
      light: '#ff7474',
      dark: '#b23939',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3b3b3b',
      light: '#626262',
      dark: '#292929',
      contrastText: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: '#181818',
    },
    text: {
      primary: '#dddddd',
      secondary: 'rgba(255,255,255,0.7)',
      disabled: 'rgba(255,255,255,0.5)',
    },
    error: {
      main: '#f44335',
      light: '#f6685c',
      dark: '#aa2e24',
      contrastText: '#fffffe',
    },
  },
});

export default theme
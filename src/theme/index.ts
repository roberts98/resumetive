import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1B2021',
    },
    secondary: {
      main: '#1B2021',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 576,
      sm: 992,
      md: 1280,
      lg: 1600,
      xl: 1920,
    },
  },
});

export default theme;

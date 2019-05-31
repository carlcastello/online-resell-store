import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    h1: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
    },
    fontFamily: [
      '"Open Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
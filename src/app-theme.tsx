import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1C0C4F',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#1C0C4F',
      dark: '#f4f4f4'
    },
  },
  typography: {
    subtitle1: {
      fontSize: '10px',
    },
    h1: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '2.50rem'
    },
    h2: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.1,
    },
    h3: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '2.00rem'
    },
    h4: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.75rem'
    },
    h5: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.5rem'
    },
    h6: {
      fontFamily: [
        'Amiko',
        'sans-serif'
      ].join(','),
      fontWeight: 600,
      fontSize: '1.25rem'
    },
    fontFamily: [
      'Montserrat',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 12,

  },
  spacing: 18
});